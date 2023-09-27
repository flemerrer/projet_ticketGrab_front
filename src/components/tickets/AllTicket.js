import React, {useEffect, useState} from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid, IconButton,
    Stack,
    Typography
} from "@mui/material";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';


export default function AllTicket() {

    const tickets = [
        {
            "name": "BERCY ZOOM",
            "event": "TOTO LAST SHOW",
            "img": "https://images.unsplash.com/photo-1655723122539-6f4288ed14c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": "120",
            "id": 1
        },
        {
            "name": "CITY LIVE",
            "event": "BONGO LIVE",
            "img": "https://plus.unsplash.com/premium_photo-1695200708808-a0744dd42d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": "25",
            "id": 2
        },
        {
            "name": "NIJU",
            "event": "YES YES TIME",
            "img": "https://images.unsplash.com/photo-1643914543607-7f755947dd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            "price": "35",
            "id": 3
        },
        {
            "name": "BOOBA & K-RIXE",
            "event": "Roisy CDG",
            "img": "https://images.unsplash.com/photo-1664661167811-50344036d2db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            "price": "1200",
            "id": 4
        },
        {
            "name": "jhmiuhi",
            "event": "bkijhmuhù",
            "img": "https://images.unsplash.com/photo-1643914543607-7f755947dd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            "price": "189498",
            "id": 5
        },
        {
            "name": "çot_oè_rè_tçèç",
            "event": "çtçtçtç",
            "img": "https://images.unsplash.com/photo-1655723122539-6f4288ed14c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": "10",
            "id": 6
        }
    ]



    // const [tickets] = useState([]);
    //
    // useEffect(() => {
    //     axios.get('http://localhost:4000/tickets')
    //         .then(response => response.data)
    //         .then(tickets => setTickets(tickets))
    // }, []);
    //
    // function deleteTicket(ticketId) {
    //     axios.delete(`http://localhost:4000/tickets/${ticketId}`)
    //         .then(response => {
    //             setTickets(tickets.filter(t => t.id !== ticketId));
    //         });
    // }
    //
    return (
        <>
            <Container sx={{py: 8}} >
                <Grid container spacing={4}>
                    { tickets.map((ticket) => (

                            <Grid item key={ticket.id}>
                                <Card sx={{maxWidth:260}}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        sx={{height: 250, width: 260}}
                                        image={ticket.img}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {ticket.id}
                                        </Typography>
                                        <Typography gutterBottom variant="h7" component="div">
                                            {ticket.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div" color="darkblue">
                                            {ticket.event}
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div" color="red">
                                            {ticket.price} €
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton color="primary" aria-label="add to shopping cart">
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </>
    );
}