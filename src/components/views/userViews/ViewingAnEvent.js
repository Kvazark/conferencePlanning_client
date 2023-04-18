import React, {Component, useEffect, useState} from 'react';
import TopMenu from "../../user/TopMenu";
import "./viewingAnEventStyle.css"
import BlockImgEvent from "../viewingAnEvent/BlockImgEvent";
import ContentEvent from "../viewingAnEvent/ContentEvent";

const ViewingAnEvent =()=> {
        return (
            <main>
                <TopMenu></TopMenu>
                <BlockImgEvent></BlockImgEvent>
                <ContentEvent></ContentEvent>
            </main>
        );
}

export default ViewingAnEvent;