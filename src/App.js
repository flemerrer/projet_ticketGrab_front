import logo from './logo.svg';
import './App.css';
import {Outlet, Route, Routes} from 'react-router-dom';
import React from 'react';
import {Link} from '@mui/material';
import EventList from "./components/EventList";

export default function App() {
  return (

    <div className='App'>

        <Routes>
            <Route path='/'>
                <Route path='home' element={<Home/>} />
                {/*<Route path='login' element={<Register/>}/>*/}
                {/*<Route path='login' element={<Login/>}/>*/}
                <Route path='eventlist' element={<EventList />} />
            </Route>
            <Route path='/*' element={<NoMatch/>}/>
        </Routes>

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