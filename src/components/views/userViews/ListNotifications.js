import React, {Component, useEffect, useRef, useState} from 'react';
import TopMenu from "../../user/TopMenu";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import $ from 'jquery';
import * as signalR from '@aspnet/signalr';
import {
    HubConnectionBuilder,
    // HubConnectionState,
    // HubConnection,
} from '@microsoft/signalr';

$(document).ready(connectToSignalR);
var i=1

function displayNotification(user, data) {
    var $target = $('div#signalr-notifications');
    var $div = $(`<div>${data}</div>`);
    $target.prepend($div);
    window.setTimeout(function () { $div.fadeOut(2000, function () { $div.remove(); }); }, 8000);
    console.log(data)
    i++
}
function connectToSignalR() {
    console.log("Connecting to SignalR...");
    //window.notificationDivs = new Array();
    var conn = new signalR.HubConnectionBuilder().withUrl("http://localhost:5215/hub").build();
    conn.on("DisplayNotification", displayNotification);
    conn.start().then(function () {
        console.log("SignalR has started.");
    }).catch(function (err) {
        console.log(err);
    });
}
// const connection = new signalR.HubConnectionBuilder()
//     .withUrl("/hub")
//     .configureLogging(signalR.LogLevel.Information)
//     .build();
//
// async function start() {
//     try {
//         await connection.start();
//         console.log("connected");
//     } catch (err) {
//         console.log(err);
//         setTimeout(() => start(), 5000);
//     }
// };
//
// connection.onclose(async () => {
//     await start();
// });
//
// // Start the connection.
// start();
//
//
// connection.start().then(() => console.log("connected"));
// connection.start().catch(err => console.error(err));
//

const ListNotifications =()=> {
    // const [ connection, setConnection ] = useState(null);
    // const [ chat, setChat ] = useState([]);
    // const latestChat = useRef(null);
    //
    // latestChat.current = chat;
    //
    // useEffect(() => {
    //     const newConnection = new HubConnectionBuilder()
    //         .withUrl('http://localhost:5215/hub')
    //         .build();
    //
    //     setConnection(newConnection);
    // }, []);
    //
    // useEffect(() => {
    //     if (connection) {
    //         connection.start()
    //             .then(result => {
    //                 console.log('Connected!');
    //
    //                 connection.on('ReceiveMessage', message => {
    //                     const updatedChat = [...latestChat.current];
    //                     updatedChat.push(message);
    //
    //                     setChat(updatedChat);
    //                 });
    //             })
    //             .catch(e => console.log('Connection failed: ', e));
    //     }
    // }, [connection]);

    let navigate = useNavigate()

        return (
            <main>
                <TopMenu />
                <div>

                    <h2 className="listNotifications">Welcome to the list notifications!</h2>
                    <div id="signalr-notifications"></div>
                </div>
            </main>

        );


}

export default ListNotifications;