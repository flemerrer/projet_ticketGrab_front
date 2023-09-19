import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function ListUsers() {
    const [user, setUser] = useState([]);

    // const navigate = useNavigate();
    // const [userid, setUserId]= useState([]);
    // const {taskId} = useParams();

    // Access-Control-Allow-Origin header


    useEffect(() => {
        // const userid = 17;
        fetch('http://localhost:8080/api/allusers', {
            headers:{
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + localStorage.getItem('token'),
            },

        })
            .then(res => res.json())
            .then(user=>
                setUser(user));
        console.table(user);
    }, []);

    return (
        <>
            <h1 className="m-3">Données de l'utilisateur</h1>
            {user.map (u => (
            <div>
                <p>{u.firstName}</p>
                <p>{u.lastName}</p>
                <p>{u.email}</p>
                <p>{u.password}</p>
            </div>))}
        </>
    );
}