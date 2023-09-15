import '../App.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Login() {

    const user = {
        email: "JP",
        password: "blabla"
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'your-api-key',
            'X-RapidAPI-Host': 'localhost:8080/auth/login',
        },
        body: JSON.stringify(user)
    };
    fetch('http://localhost:8080/auth/login', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    return(user);
}