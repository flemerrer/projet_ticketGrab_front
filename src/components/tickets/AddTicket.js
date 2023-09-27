import {Box, Button, Container, TextField} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";
import './Tickets.css'

export default function AddTicket() {

    const navigate = useNavigate();

    const handleSubmit=(event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({

            infos: data.get('infos'),
            imagelink: data.get('imagelink'),
            price: data.get('price'),
            onSale: data.get('onSale'),
            inSold: data.get('isSold'),

        });
        let newTicket = {
            infos: data.get('infos'),
            imagelink: data.get('imagelink'),
            price: data.get('price'),
            onSale: data.get('onSale'),
            inSold: data.get('isSold')
        };

        console.log(newTicket);

        axios.post('http://localhost:8080/api/tickets/add', newTicket)
            .then(response =>console.log(response))
            .catch(error => console.error(error));

        return navigate("/allticket");
    };

    return (
        <>
            <div className="addticket">
                <h1>
                    Veuillez remplir ce formulaire pour mettre un ticket en vente.
                </h1>
            </div>
            <Container maxWidth="xs">
                <Box component='form' onSubmit={handleSubmit} noValidate
                     sx={{p: 5, border: '4px solid', width: 300, height: 300, backgroundColor: 'floralwhite'}}>

                    <h1 className="addticket_event">Ajouter un ticket.</h1>

                    <div><TextField id="txtName" required name="infos" label="Description (+ Nbre de places)" type="text" margin="dense"
                                    fullWidth="true"></TextField></div>
                    <div><TextField id="txtName" required name="img" label="img link" type="link" margin="dense"
                                    fullWidth="true"></TextField></div>
                    <div><TextField id="txtName" required name="price" label="Price  (€)" type="number"
                                    margin="dense" fullWidth="true"></TextField></div>
                    <div className="addticket"><Button type="submit" size="small" variant="outlined"> Mettre en vente</Button></div>
                </Box>
            </Container>
        </>
    );
}