import * as React from 'react';
import {useEffect, useState} from "react";

export default function ListUsers() {

    const [user, setUser] = useState([]);
    const [userid, setUserId]= useState([]);
    // setUserId({user.id});

    useEffect(() => {
        let id =18;
        fetch('http://localhost:8080/api/allusers/{id}')
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
                <p>{user.soldTicketsNumber}</p>
                <p>{user.admin}</p>
            </div>
        </>
    );
}