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
        console.log({

            ticketName: data.get('ticketName'),
            img: data.get('img'),
            price: data.get('price'),
            onSale: data.get('onSale'),
            inSold: data.get('isSold'),

            eventName : data.get('eventName'),
            location : data.get('location'),
            city:data.get('city'),
            date: data.get('date'),
            website : data.get('website'),

        })
        let newTicket = {
            ticketName: data.get('name'),
            img: data.get('img'),
            price: data.get('price'),
            onSale: data.get('onSale'),
            inSold: data.get('isSold')
        };

        let newEvent = {
            eventName : data.get('eventName'),
            location : data.get('location'),
            city:data.get('city'),
            date: data.get('date'),
            website : data.get('website'),

        };

        axios.post('http://localhost:8080/api/tickets/add', newTicket)
            .then(function (response) {
                return response.data;
                navigate("/ticket");
        })

        axios.post('http://localhost:8080/api/events/add', newEvent)
            .then(function (response) {
                return response.data;
                navigate("/ticket");
            })
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
                     sx={{p: 5, border: '4px solid', width: 400, backgroundColor: 'floralwhite'}}>

                    <h3 className="addticket_event">Ajouter un évènement.</h3>

                    <div><TextField id="txtName" required name="name" label="Nom de l'évènement" type="text" margin="dense"
                                    fullWidth="true"></TextField></div>
                    <div><TextField id="txtName" required name="location" label="Lieu" type="text" margin="dense"
                                    fullWidth="true"></TextField></div>
                    <div><TextField id="txtName" required name="city" label="Ville" type="text" margin="dense"
                                    fullWidth="true"></TextField></div>
                    <div><TextField id="txtName" required name="date"  type="date" margin="dense"
                                    fullWidth="true"></TextField></div>
                    <div><TextField id="txtName"  name="site Web" label="Site Web" type="text" margin="dense"
                                    fullWidth="true"></TextField></div>

                    <h3 className="addticket_event">Ajouter un ticket.</h3>

                    <div><TextField id="txtName" required name="name" label="Infos" type="text" margin="dense"
                                    fullWidth="true"></TextField></div>
                    {/*<div><TextField id="txtName" required name="place" label="Nbre de place" type="number"*/}
                    {/*                margin="dense" fullWidth="true"></TextField></div>*/}

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