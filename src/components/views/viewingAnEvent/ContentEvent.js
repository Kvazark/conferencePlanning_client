import React, {Component, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import headCardEvent from "../../../img/head-card-event.svg";
import "./contentEventStyle.css"
import {useSelector} from "react-redux";
import {ArrowRight} from "react-bootstrap-icons";

const ContentEvent = () => {
    const location = useLocation();
    const { state } = location;
    const [event, setEvent] = useState({});
    const role = useSelector(state => state.user.role)

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceWithSections?id=${state.eventId}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, [state.eventId]);

    const [infoOrg, setInfoOrg] = useState({});
    const [idMod, setIdMod] = useState('');
    useEffect(()=>{
        if(event.moderatorId !== 'undefined' || event.moderatorId !== ''){
            setIdMod(()=>event.moderatorId)
        }
    },[event.moderatorId])


    console.log('id mod '+idMod)
    useEffect(() => {
        fetch(`https://localhost:7215/api/moderator/getModeratorById?id=${idMod}`)
            .then(res => res.json())
            .then(result => {
                setInfoOrg(result);
            })
            .catch(() => {

            })
    }, [idMod]);

    let path
    let navigate = useNavigate();
    const routeChangeBtn1 = () => {
        if (role == 'Moderator') {
            path = '/moderator/mainPageModerator/viewingAnEvent/viewingListOfSpeakers'
            navigate(path);
        } else if (role == 'User') {
            path = '/user/viewingAnEvent/viewingListOfSpeakers'
            navigate(path);
        }
    }
    const routeChangeBtn2 = () => {
        if (role == 'Moderator') {
            path = '/moderator/mainPageModerator/viewingAnEvent/materialsSpeakers'
            navigate(path);
        } else if (role == 'User') {
            path = '/user/viewingAnEvent/materialsSpeakers'
            navigate(path);
        }
    }

    event.sections?.sort(function (a, b) {
        return a.startTime.localeCompare(b.startTime);
    });
    return (
        <section className="content-event">
            <article>
                <p className="short-description-event">{event.shortTopic}</p>
                <div className="btn-group-event">
                    <button onClick={()=>routeChangeBtn1()}
                            style={role=='User'?{background: `rgba(126, 25, 25, 0.9)`}: {background: `#206F6D`}}>
                        <div className="to-listOfSpeakers">
                            <h3>Ознакомиться со списком выступающих</h3>
                            <ArrowRight className='arrow-r-icon' size="40px" color='rgba(242, 242, 242, 0.5)'></ArrowRight>
                            <p>итоговый список будет готов через 2 дня после завершения регистрации</p>
                        </div>
                    </button>
                    <button onClick={()=>routeChangeBtn2()}
                            style={role=='User'?{background: `rgba(126, 25, 25, 0.9)`}: {background: `#206F6D`}}>
                        <div className="to-listOfSpeakers">
                            <h3>Ознакомиться с материалами участников</h3>
                            <ArrowRight className='arrow-r-icon' size="40px" color='rgba(242, 242, 242, 0.5)'></ArrowRight>
                            <p>все материалы выступающих становятся доступны после завершения конференции</p>
                        </div>
                    </button>

                </div>
                <div className="long-description-event-block">
                    <h3 style={role=="Moderator"?{color:"#206F6D"}:{color:`rgba(126, 25, 25, 0.9)`}}>что нужно знать ещё</h3>
                    <p style={{whiteSpace: "pre-wrap"}}>
                        {event.fullTopic}
                    </p>
                </div>
                <div className="schedule-event" style={role=="Moderator"?{background:"#206F6D"}:{background:`#7E1919`}}>
                    <h3>Раписание</h3>
                    <section>
                            {event.sections?.map(section => (
                                <div className="schedule-event-card" key={section.call}>
                                    <p className='time-schedule'>{section.startTime? section.startTime.substring(0, 5): ''} –&nbsp;
                                       {section.endTime? section.endTime.substring(0,5):''}</p>
                                    <div className="line-schedule"></div>
                                    <p className='name-schedule'>{section.name}</p>
                                </div>
                            ))}
                    </section>
                </div>
            </article>

            <footer className="footer-event" style={role=="Moderator"?{borderTop: `1px solid #206F6D`}:{borderTop: `1px solid rgba(126, 25, 25, 0.9)`}}>
                <div className="contact-info-event">
                    <h4>Контактная информация</h4>
                    <p>{infoOrg.email}</p>
                </div>
                <div className="name-org-event">
                    <h4>Организация</h4>
                    <p>{infoOrg.organizationName}</p>
                </div>
            </footer>
        </section>
    );

}

export default ContentEvent;