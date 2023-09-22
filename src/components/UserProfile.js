import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function UserProfile() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const email = localStorage.getItem('email');
        console.log(email);
        fetch(`http://localhost:8080/api/user/${email}`, {
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
            <div>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
            </div>
        </>
    );
    }