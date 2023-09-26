import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import NavBa
import {Link} from "@mui/material";
import MesTickets from "./components/MesTickets";
import Signout from "./components/Signout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import ListUsers from "./components/ListUsers";
import Homepage from "./components/Homepage";
import OtherProfile from "./components/OtherProfile";


const App = () => {
    return (
        <div className='App'>
            <div className="App">
                <NavBar/>
            </div>
            <Routes>
                <Route path='/'>
                    <Route path='home' element={<Homepage/>} />
                    <Route path='/listusers' element={<ListUsers/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signout' element={<Signout/>}/>
                    <Route path='/ticket/add' element={<AddTicket/>}/>
                    <Route path='/ticket' element={<Tickets/>}/>
                    <Route path='/mestickets' element={<MesTickets/>}/>
                    <Route path='/register' element={<SignUp/>}/>
                    <Route path='/userprofile' element={<UserProfile/>}/>
                    <Route path='eventlist' element={<EventList />} />
                    <Route path='events' element={<EventList/>}/>
                    <Route path='listusers' element={<ListUsers/>}/>
                    <Route path='signin' element={<SignIn/>}/>
                    <Route path='register' element={<SignUp/>}/>
                    <Route path='userprofile' element={<UserProfile/>}/>
                    <Route path='otherprofile' element={<OtherProfile/>}/>
                </Route>
                <Route path='/*' element={<NoMatch/>}/>
            </Routes>
            <div className="App">
                <Footer/>
            </div>
        </div>
);
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

export default App;