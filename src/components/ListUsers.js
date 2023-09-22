import '../App.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ListUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/allusers', {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            // .then(res => console.table(res))
            .then(res => res.json())
            // .then(res => console.table(res))
            .then(users=>
                setUsers(users));
        // console.table(users);
    }, []);

    return (
        <section id="utilisateurs">
            {/*{search}*/}
            <h1 className="m-3">Liste des Users</h1>
            <ul className="list-group m-3">
                {users.map (u => (
                    <li className="list-group-item d-flex align-tiems-center">
                        {u.firstName} {u.lastName}
                        <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
                    </li>)
                )}
            </ul>
        </section>
    );
}