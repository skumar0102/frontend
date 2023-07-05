import React from 'react';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";



function Noti() {
  const firebaseConfig = {
    apiKey: "AIzaSyCoNjqndFZIAwk0VLJ5-MqGcIBi65XMbps",
    authDomain: "ids-infotech-payment.firebaseapp.com",
    projectId: "ids-infotech-payment",
    storageBucket: "ids-infotech-payment.appspot.com",
    messagingSenderId: "103746048853",
    appId: "1:103746048853:web:5aaae910756dc94e72d5dc",
    measurementId: "G-39LQN6WRW3"
  };

  function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);
        getToken(messaging, {
          vapidKey:'BA1ArSRkkaVB-OWgrGh5NR_duEGcDGbduzyk4QJS0pfv25LE_Z9qTThe3j-5iZMjJRMJAm61Qhi2i3uz6gd4r0I'
        }).then((currentToken) => {
          console.log(currentToken)
          if (currentToken) {
            console.log("currentToken: ", currentToken);
          } else {
            console.log("Can not get token");
          }
        });
      } else {
        console.log("Do not have permission!");
      }
    });
  }

  requestPermission();
  return (
    <div>Noti</div>
  )
}

export default Noti