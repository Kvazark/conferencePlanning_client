import React, {Component, useContext, useEffect, useState} from 'react';
import InputCreateEvent from "../../../commonComponents/details/inputs/input_forCreateEvent/InputCreateEvent";
import AddRemoveInputCategory
    from "../../../commonComponents/details/inputs/input_forCreateEvent/AddRemoveInputCategory";
import {Button, Group} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {addAvatarEvent} from "../../../../redux/actions/event";
import {FileEarmarkImage} from "react-bootstrap-icons";

const SecondStep = ({step}) => {
    const [event, setEvent] = useState({});
    const idEventEdit = localStorage.getItem('idEventEdit')
    const idEvent = useSelector(state => state.event.id)
    let id
    if (idEventEdit != null) {
        id = idEventEdit
    } else {
        id = idEvent
    }

    useEffect(() => {
        fetch(`https://localhost:7215/api/conferences/getConferenceById?id=${id}`)
            .then(res => res.json())
            .then(result => {
                setEvent(result);
            })
            .catch(() => {

            })
    }, []);


    const [longDescription, setLongDescription] = useState(localStorage.getItem('longDescription') || '')

    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent') || '')
    const [cityEvent, setCityEvent] = useState(localStorage.getItem('cityEvent') || ' ')
    const [addressEvent, setAddressEvent] = useState(localStorage.getItem('addressEvent') || ' ')

    let [categoryList, setCategoryList] = useState(localStorage.getItem('categoryList') || '')


    // if (localStorage.getItem('longDescription') === `undefined`) localStorage.setItem('longDescription', event.conf?.fullTopic)
    // else localStorage.setItem('longDescription', longDescription)

    ///доп. описание
    let longDescriptionDefault;
    if (longDescription != `undefined`) {
        longDescriptionDefault = longDescription
    } else {
        longDescriptionDefault = event.conf?.fullTopic
    }

    if (localStorage.getItem('longDescription') === `` || localStorage.getItem('longDescription')==='undefined'){
        if (event.conf?.shortTopic)localStorage.setItem('longDescription', event.conf?.fullTopic)
        else  localStorage.setItem('longDescription', ``)
    }else localStorage.setItem('longDescription', longDescription);

    const handleClick = () => {
        setLongDescription()
        setCityEvent()
        setAddressEvent()
        setCategoryList()
    }
    useEffect(() => {
        localStorage.setItem('longDescription', longDescription.value)
        localStorage.setItem('cityEvent', cityEvent)
        localStorage.setItem('addressEvent', addressEvent)
        localStorage.setItem('categoryList', categoryList)
    }, [longDescription, cityEvent, addressEvent, categoryList])

    let fieldAddress;
    let fieldCity;
    let h;
    if (typeEvent == "онлайн") {
        fieldAddress = ""
        fieldCity = ""
        h = '74.2vh'
    } else {
        h = '103.6vh'
        fieldCity = <section className="full-inputEvent" style={{width: "25vw"}}>
            <label>Город</label>
            {/*<input name="addressEventNew" type="text"  value={state.addressEventNew} onChange={handleChange}/>*/}
            <InputCreateEvent value={cityEvent} setValue={setCityEvent} type="text"
                              placeholder={event.conf?.city}></InputCreateEvent>
        </section>
        fieldAddress = <section className="full-inputEvent">
            <label>Остальной адрес</label>
            {/*<input name="addressEventNew" type="text"  value={state.addressEventNew} onChange={handleChange}/>*/}
            <InputCreateEvent value={addressEvent} setValue={setAddressEvent} type="text"
                              placeholder={event.conf?.addres}></InputCreateEvent>
        </section>
    }
    const dispatch = useDispatch()
    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(addAvatarEvent(id,file))
    }


    return (
        <section>
            <form className="creation-field-form1">
                <section className="full-inputEvent">
                    <label>Дополнительная информация</label>
                    <textarea className="longDescription-textarea"
                              defaultValue={longDescriptionDefault}
                              value={longDescription.value} onChange={v => setLongDescription({value: v.target.value})}>
                < /textarea>
                </section>
                {fieldCity}
                {fieldAddress}
                <section className="full-inputEvent">
                    <label className="upload-a-img">
                        <input accept="image/*" onChange={e => changeHandler(e)}
                               type="file"/>
                        <span>Загрузить обложку</span>
                        <FileEarmarkImage size='25px' color='rgba(32, 111, 109, 0.85)' style={{paddingBottom:'5px'}}></FileEarmarkImage>
                    </label>
                    <div className="input-file-list"></div>
                </section>
                <section className="full-inputEvent">
                    <label>Категории</label>
                    <AddRemoveInputCategory dataList={event.conf?.categories}></AddRemoveInputCategory>
                </section>

            </form>
            <div className="btn-next-step" style={{top: h}}>
                <Button className="btn-forth-step"
                        onClick={() => {
                            step();
                            handleClick()
                        }}>Далее</Button>
            </div>
        </section>

    );

}

export default SecondStep;