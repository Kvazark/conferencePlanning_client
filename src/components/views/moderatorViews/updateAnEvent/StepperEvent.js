import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import style from "./stepperEventStyle.css"
import "./buttonsStyle.css"

import {Stepper, Button, Group } from '@mantine/core';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import {Circle} from "react-bootstrap-icons";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";


const StepperEvent = () => {

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    // const [nameEvent, setNameEvent] = useState('')
    // const [address, setAddress] = useState('')

    // const handleChangeAddress = (value) => {
    //     setAddress(value)
    // }
    // console.log(nameEvent)

    const typeEvent = localStorage.getItem('typeEvent')
    let h;
    if(typeEvent=='онлайн'){h='48.4%'}
    else{h='68.9%'}


    return(
      <main className="field-stepper">
          <Stepper iconSize={30} color="rgba(32, 111, 109, 0.85);" active={active} onStepClick={setActive} breakpoint="sm">
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="основное" >
                  <FirstStep step={nextStep}></FirstStep>
                  {/*<Group className="buttons-stepper1">*/}
                  {/*    <Button className="btn-forth-step" onClick={nextStep}>Далее</Button>*/}
                  {/*</Group>*/}
              </Stepper.Step>
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="дополнительно" style={{textAlign:`center`}} >
                  <SecondStep step={nextStep}></SecondStep>
                  <Group className="buttons-stepper2" style={{marginTop: h}}>
                      <Button className="btn-back-step" variant="default" onClick={prevStep}
                      >Назад</Button>
                  </Group>
              </Stepper.Step>
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="расписание">
                  <ThirdStep></ThirdStep>
                  <Group className="buttons-stepper3">
                      <Button className="btn-back-step" variant="default" onClick={prevStep}>Назад</Button>
                      <Button className="btn-forth-step" onClick={nextStep}>Далее</Button>
                  </Group>
              </Stepper.Step>
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="публикация" >
                  <FourthStep step={nextStep} ></FourthStep>
                  <Group className="buttons-stepper4">
                      <Button className="btn-back-step" variant="default" onClick={prevStep}>Назад</Button>
                      {/*<Button className="btn-save-event" onClick={nextStep}>Опубликовать</Button>*/}
                  </Group>
              </Stepper.Step>
              <Stepper.Completed>
                  Событие сохранено и опубликовано, нажмите кнопку "вернуться", чтобы выйти из панели редактирования.
              </Stepper.Completed>
          </Stepper>
      </main>
    );
}
export default StepperEvent;
