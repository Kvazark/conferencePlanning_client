import React, {Component, useEffect, useRef, useState} from 'react';
import TopMenu from "../../user/TopMenu";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import $ from 'jquery';
import * as signalR from '@aspnet/signalr';
import "./listNotificationsStyle.css"
import {CheckCircle} from "react-bootstrap-icons";

$(document).ready(connectToSignalR);

function displayNotification(user, data) {
    console.log(data)
    var status = data.split('+')[0]
    var mes;
    if (status === 'Accepted') {
        mes = `Ваше участие в "${data.split('+')[1]}" <span class="status-mes">одобренно</span>.<br /> <span class="strong-mes">Дата проведения:</span> ${data.split('+')[2]}, <span class="strong-mes"><br />формат выступления:</span> ${data.split('+')[3]}.`;
    }
    if(status === 'NotAccepted') mes = `Ваше участие в "${data.split('+')[1]}" отклонили.`
    var $target = $('div#signalr-notifications');
    var $div = $(`<div>${mes}</div>`);
    $target.prepend($div);
    window.setTimeout(function () {
        $div.fadeOut(2000, function () {
            $div.remove();
        });
    }, 8000);
}

function connectToSignalR() {
    console.log("Connecting to SignalR...");
    var conn = new signalR.HubConnectionBuilder().withUrl("http://localhost:5215/hub").build();
    conn.on("DisplayNotification", displayNotification);
    conn.start().then(function () {
        console.log("SignalR has started.");
    }).catch(function (err) {
        console.log(err);
    });
}

const ListNotifications = () => {
    // let navigate = useNavigate()
    return (
        <main>
            <TopMenu/>
            <div>
                <h2 className="listNotifications">Welcome to the list notifications!</h2>

            </div>
        </main>

    );


}

export default ListNotifications;