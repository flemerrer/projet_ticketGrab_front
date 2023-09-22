import {Box, Button, Container, TextField} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";
import './Tickets.css'

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
            'price': data.get('price'),
        };

        axios.post('http://localhost:4000/tickets', newTicket)
            .then(response => navigate('/ticket'))

    }

    return (
        <>

                <div className="addticket">
                    <h3>
                        Veuillez remplir ce formulaire pour mettre un ticket en vente.
                    </h3>
                </div>

                <Container maxWidth="xs">
                    <Box component='form' onSubmit={handleSubmit} noValidate
                         sx={{p: 5, border: '4px solid', width: 300, height:400, backgroundColor: 'floralwhite'}}>
                        <div><TextField id="txtName" required name="name" label="Ticket Name" type="text" margin="dense"
                                        fullWidth="true"></TextField></div>

                        <div><TextField id="txtName" required name="event" label="Event Name" type="text" margin="dense"
                                        fullWidth="true"></TextField></div>

                        <div><TextField id="txtName" required name="price" label="Price  (€)" type="number"
                                        margin="dense" fullWidth="true"></TextField></div>

                        <div><TextField id="txtName" required name="img" label="img link" type="link" margin="dense"
                                        fullWidth="true"></TextField></div>

                        <div className="addticket"><Button type="submit" size="small" variant="outlined"> Mettre en vente</Button></div>
                    </Box>

                </Container>


        </>
    );
}
