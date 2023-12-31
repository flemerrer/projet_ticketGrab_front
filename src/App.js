import './App.css';
import React, {useState} from "react";
import {Link} from "@mui/material";
import ListUsers from "./components/user/ListUsers";
import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/NavBar";
import Signout from "./components/user/Signout";
import SignIn from "./components/user/SignIn";
import UserProfile from "./components/user/UserProfile";
import SignUp from "./components/user/SignUp";
import {Route, Routes} from 'react-router-dom';
import EventList from "./components/eventList/EventList";
import HomePage from "./components/Homepage";
import OtherProfile from "./components/user/OtherProfile";
import Basket from "./components/purchase/Basket";
import AddTicket from "./components/tickets/AddTicket";
import AllTicket from "./components/tickets/AllTicket";


export default function App() {

    return (
        <div className='App'>
            <NavBar/>
            <Routes>
                <Route path='/'>
                    <Route index element={<HomePage/>}/>
                    <Route path='events' element={<EventList/>}/>
                    <Route path='listusers' element={<ListUsers/>}/>
                    <Route path='addticket' element={<AddTicket/>}/>
                    <Route path='allticket' element={<AllTicket/>}/>
                    <Route path='signin' element={<SignIn/>}/>
                    <Route path='register' element={<SignUp/>}/>
                    <Route path='signout' element={<Signout/>}/>
                    <Route path='userprofile' element={<UserProfile/>}/>
                    <Route path='otherprofile' element={<OtherProfile/>}/>
                    <Route path='basket' element={<Basket/>}/>
                </Route>
                <Route path='/*' element={<NoMatch/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

//Main MUI colors: #0288d1, #ed6c02, #9c27b0

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