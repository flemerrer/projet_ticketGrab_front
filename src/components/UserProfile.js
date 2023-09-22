import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function ListUsers() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/allusers', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you are using Bearer token authentication
            }
        })
            .then(response => response.json())
            .then(user => {
                setUser(user);
                console.table(user);
                // Handle the response data here
            })
            .catch(error => {
                console.error(error);
                // Handle errors here
            })
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