import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Link} from "@mui/material";
import ListUsers from "./components/ListUsers";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import UserProfile from "./components/UserProfile";
import SignUp from "./components/SignUp";
import {Route, Routes} from 'react-router-dom';
import EventList from "./components/EventList";
import NavBar from "./components/NavBar";
import HomePage from "./components/Homepage";

export default function App() {
  return (

    <div className='App'>

        <NavBar />

        <Routes>
            <Route path='/'>
                <Route index element={<HomePage/>} />
                <Route path='events' element={<EventList />} />
                <Route path='listusers' element={<ListUsers/>} />
                <Route path='signin' element={<SignIn/>} />
                <Route path='register' element={<SignUp/>} />
                <Route path='userprofile' element={<UserProfile/>} />
            </Route>
            <Route path='/*' element={<NoMatch/>} />
        </Routes>

        <Footer/>

    </div>
);
}

function Home(){
    return(
        <>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </>
    )


    // const [users, setUsers] = useState([]);
    //
    // useEffect(() => {
    //     fetch('http://localhost:8080/api/allusers')
    //         .then(res => res.json())
    //         .then(users=>
    //             setUsers(users));
    //     console.table(users);
    // }, []);
    //
    // return (
    //     <section id="utilisateurs">
    //         {/*{search}*/}
    //         <h1 className="m-3">Liste des Users</h1>
    //         <ul className="list-group m-3">
    //             {users.map (u => (
    //                 <li className="list-group-item d-flex align-tiems-center">
    //                     {u.firstName} {u.lastName}
    //                     <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
    //                 </li>)
    //             )}
    //         </ul>
    //     </section>
    // );

}

function Layout() {
    return (
        <div>

            {/*<Outlet />*/}
        </div>
    )
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link href='/'>Go to the home page</Link>
            </p>
        </div>
    );
}