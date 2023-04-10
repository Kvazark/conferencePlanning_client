import React, {Component, useContext, useState} from 'react';
import style from "./stepperEventStyle.css"

// import {Stepper} from "react-form-stepper";
import {Stepper, Button, Group } from '@mantine/core';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import {Circle} from "react-bootstrap-icons";


const StepperEvent = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    //
    // const sections = [
    //     {
    //         label: "описание",
    //         onClick: () => setCurrentPage(1),
    //     },
    //     {
    //         label: "анкета",
    //         onClick: () => setCurrentPage(2),
    //     },
    //     {
    //         label: "расписание",
    //         onClick: () => setCurrentPage(3),
    //     },
    //     {
    //         label: "публикация",
    //         onClick: () => setCurrentPage(4),
    //     },
    // ];
    // return (
    //     <Stepper steps={sections} activeStep={currentPage}>
    //         {/*<NavLink to="/moderator/eventsListModerator">*/}
    //         {/*    <button className="back-to-eventsList">отменить</button>*/}
    //         {/*</NavLink>*/}
    //         {/*<Step label="описание" />*/}
    //         {/*<Step label="анкета" />*/}
    //         {/*<Step label="расписание" />*/}
    //         {/*<Step label="публикация" />*/}
    //     </Stepper>
    // );
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return(
      <div>
          <Stepper iconSize={30} color="rgba(32, 111, 109, 0.85);" active={active} onStepClick={setActive} breakpoint="sm">
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="описание" >
                  <FirstStep></FirstStep>
              </Stepper.Step>
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="анкета" >
                  <SecondStep></SecondStep>
              </Stepper.Step>
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="расписание">
                  <FirstStep></FirstStep>
              </Stepper.Step>
              <Stepper.Step icon={<Circle size="35px" color="#f2f2f2"></Circle> } label="публикация" >
                  <FirstStep></FirstStep>
              </Stepper.Step>
              <Stepper.Completed>
                  Completed, click back button to get to previous step
              </Stepper.Completed>
          </Stepper>

          <Group className="buttons-stepper" mt="xl">
              <Button className="btn-back-step" variant="default" onClick={prevStep}>Назад</Button>
              <Button className="btn-forth-step" onClick={nextStep}>Далее</Button>
          </Group>
      </div>
    );
}
export default StepperEvent;
