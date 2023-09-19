import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function ListUsers() {
    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [userid, setUserId]= useState([]);

    const {taskId} = useParams();

    useEffect(() => {
        // const userid = 17;
        fetch('http://localhost:8080/api/allusers', {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + localStorage.getItem("token")
        })
            .then(res => res.data)
            .then(data=>
                setUser(data));
        console.table(user);
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