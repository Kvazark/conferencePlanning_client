import React, {Component, useContext, useEffect, useState} from 'react';
import InputCreateEvent from "../../../commonComponents/details/inputs/input_forCreateEvent/InputCreateEvent";
import AddRemoveInputCategory from "../../../commonComponents/details/inputs/input_forCreateEvent/AddRemoveInputCategory";
import {Button, Group} from "@mantine/core";
import {useSelector} from "react-redux";

const SecondStep = ({step}) => {
    const [event, setEvent] = useState({});
    const idEventEdit = localStorage.getItem('idEventEdit')
    const idEvent = useSelector(state => state.event.id)
    let id
    if(idEventEdit!=null){
        id = idEventEdit
    }else{
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


    const [longDescription, setLongDescription] =  useState(localStorage.getItem('longDescription') || '')
    const [organizersName, setOrganizersName] = useState(localStorage.getItem('organizersName') || '')

    const [typeEvent, setTypeEvent] = useState(localStorage.getItem('typeEvent') || '')
    const [cityEvent, setCityEvent] = useState(localStorage.getItem('cityEvent') || ' ')
    const [addressEvent, setAddressEvent] = useState(localStorage.getItem('addressEvent') || ' ')

    let [categoryList, setCategoryList] = useState(localStorage.getItem('categoryList') || '')

    const handleClick = () => {
        setLongDescription()
        setOrganizersName()
        setCityEvent()
        setAddressEvent()
        setCategoryList()
    }
    useEffect(() => {
        localStorage.setItem('longDescription', longDescription.value)
        localStorage.setItem('organizersName', organizersName)
        localStorage.setItem('cityEvent', cityEvent)
        localStorage.setItem('addressEvent', addressEvent)
        localStorage.setItem('categoryList', categoryList)
    }, [longDescription,organizersName,cityEvent,addressEvent, categoryList])

    let fieldAddress;
    let fieldCity;
    let h;
    if(typeEvent=="онлайн"){
        fieldAddress = ""
        fieldCity=""
        h = '74.2vh'
    }else{
        h='103.6vh'
        fieldCity =  <section className="full-inputEvent"style={{width:"25vw"}}>
            <label>Город</label>
            {/*<input name="addressEventNew" type="text"  value={state.addressEventNew} onChange={handleChange}/>*/}
            <InputCreateEvent value={cityEvent} setValue={setCityEvent} type="text"
                              placeholder=""></InputCreateEvent>
        </section>
        fieldAddress = <section className="full-inputEvent" >
            <label>Остальной адрес</label>
            {/*<input name="addressEventNew" type="text"  value={state.addressEventNew} onChange={handleChange}/>*/}
            <InputCreateEvent value={addressEvent} setValue={setAddressEvent} type="text"
                              placeholder=""></InputCreateEvent>
        </section>
    }
    let longDescriptionDefault;
    if(longDescription!= `undefined`){
        longDescriptionDefault = longDescription
    }else{
        longDescriptionDefault=""
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
                <section className="full-inputEvent">
                    <label>Организатор</label>
                    <InputCreateEvent value={organizersName} setValue={setOrganizersName} type="text"
                                      placeholder=""></InputCreateEvent>
                </section>
                {fieldCity}
                {fieldAddress}
                <section className="full-inputEvent">
                    <label>Категории</label>
                    <AddRemoveInputCategory></AddRemoveInputCategory>
                </section>

            </form>
            <div className="btn-next-step" style={{top: h}}>
                <Button className="btn-forth-step"
                        onClick={() => {step();
                            handleClick()
                        }}>Далее</Button>
            </div>
        </section>

    );
}

export default SecondStep;