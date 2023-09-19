
import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import {AppBar, Link, Toolbar, Typography} from "@mui/material";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";
import TemplateTicket from "./components/TemplateTicket";
import CameraIcon from "@mui/icons-material/PhotoCamera";

const App = () => {
  return (
      <>
          <AppBar position="relative">
              <Toolbar>
                  <CameraIcon sx={{ mr: 2 }} />

                  <Typography variant="h6" color="inherit" noWrap>
                      Album layout
                  </Typography>

              </Toolbar>
              <Link href='/'>Home</Link>
              <Link href='/ticket'>Tickets</Link>
              <Link href='/ticket/add'>Add Ticket</Link>
              <Link href='/templateTicket'>Template Ticket</Link>
          </AppBar>


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ticket/add' element={<AddTicket />} />
            <Route path='/ticket' element={<Tickets/>}/>
            <Route path='/templateTicket' element={<TemplateTicket/>}/>
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