import {Box, Button, Container, TextField} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";

export default function AddTicket() {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('name'))

        let newTicket = {
            'name': data.get('name'),
            'event': data.get('event'),
            'img': data.get('img'),
        };

        axios.post('http://localhost:4000/tickets', newTicket)
            .then(response => navigate('/'))

    }

    return (<>
        <body>
        <header>

        </header>
        <div className="App-headerAT">
            <h2>Add Tickets</h2>
        <Container maxWidth="xs">
            <Box component='form' onSubmit={handleSubmit} noValidate
                 sx={{ p: 5, border: '5px solid', width :300, height: 300, backgroundColor: 'white'}}>
                <div><TextField id="txtName" required name="name" label="Ticket Name" type="text" margin="dense" fullWidth="true"></TextField></div>

                <div><TextField id="txtName" required name="event" label="Event Name" type="text" margin="dense" fullWidth="true"></TextField></div>

                <div> <TextField id="txtName" required name="img" label="Img link" type="link" margin="dense" fullWidth="true"></TextField></div>

                <div> <TextField id="txtName" required name="price" label="Price  (€)" type="number" margin="dense" fullWidth="true"></TextField></div>

                <div><Button type="submit" size="small" variant="contained"> Add  </Button></div>
            </Box>

        </Container>

        </div>
        <footer></footer>
        </body>

    </>);
}
