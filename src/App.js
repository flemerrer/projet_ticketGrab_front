import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";
import TemplateTicket from "./components/TemplateTicket";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Home} from "@mui/icons-material";


const App = () => {
    return (
        <>
            <NavBar/>
                <Link href='/'  component="button" variant="body2">Home</Link> ||
                <Link href='/ticket'>Tickets</Link> ||
                <Link href='/ticket/add'>Add Ticket</Link> ||
                <Link href='/templateTicket'>Mes tickets </Link>
                <Routes>
                    <Route path='/'>
                        <Route path='home' element={<Home/>}/>
                        {/*<Route path='login' element={<Register/>}/>*/}
                        {/*<Route path='login' element={<Login/>}/>*/}
                        <Route path='/ticket/add' element={<AddTicket/>}/>
                        <Route path='/ticket' element={<Tickets/>}/>
                        <Route path='/templateTicket' element={<TemplateTicket/>}/>
                        <Route path='eventlist' element={<EventList/>}/>
                    </Route>
                    <Route path='/*' element={<NoMatch/>}/>
                </Routes>
            <Footer/>
        </>
    );
}

// function Home() {
//     return (
//             <header className='App-header'>
//                 <img src={logo} className='App-logo' alt='logo'/>
//                 <a
//                     className='App-link'
//                     href='https://reactjs.org'
//                     target='_blank'
//                     rel='noopener noreferrer'>
//                 </a>
//
//             </header>
//     )
// }
// export default Home;


// function Layout() {
//     return (
//         <div>
//
//             {/*<Outlet />*/}
//         </div>
//     )
// }


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