import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Link} from "@mui/material";
import MesTickets from "./components/MesTickets";


const App = () => {
    return (
        <>
            <NavBar/>
                <Routes>
                    <Route path='/'>
                        {/*<Route path='login' element={<Register/>}/>*/}
                        {/*<Route path='login' element={<Login/>}/>*/}
                        <Route path='/ticket/add' element={<AddTicket/>}/>
                        <Route path='/ticket' element={<Tickets/>}/>
                        <Route path='/mestickets' element={<MesTickets/>}/>
                        <Route path='eventlist' element={<EventList/>}/>
                    </Route>
                    <Route path='/*' element={<NoMatch/>}/>
                </Routes>
            <Footer/>
        </>
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