import React, { useState } from "react";

const Notify = () => {

    const handleButtonClick = () => {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            sendNotification();
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    sendNotification();
                }
            });
        }
    };

    const sendNotification = () => {
        window.alert("You pressed a red button");
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "1em 2em",
                    fontSize: "2em"
                }}
                onClick={handleButtonClick}
            >
                Big Red Button
            </button>
        </div>
    );
};

export default Notify;
