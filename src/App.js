
import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Link} from "@mui/material";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";

const App = () => {
  return (
      <>
          <h1>Ticket App</h1>
          <nav>
              <ul>
                  <li><Link href='/' >Home</Link></li>
                  <li><Link href='/ticket'>Tickets</Link></li>
                  <li><Link href='/ticket/add'>Add Ticket</Link></li>
              </ul>
          </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ticket/add' element={<AddTicket />} />
            <Route path='/ticket' element={<Tickets/>}/>
            <Route path='/*' element={<NoMatch/>}/>
        </Routes>
      </>
);
}

function Home(){
    return(
        <>
            <header className="App-header">

            </header>
        </>
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

export default App;