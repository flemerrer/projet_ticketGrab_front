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

export default function Tickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/tickets')
            .then(response => response.data)
            .then(tickets => setTickets(tickets))
    }, []);

    function deleteTicket(ticketId) {
        axios.delete(`http://localhost:4000/tickets/${ticketId}`)
            .then(response => {
                setTickets(tickets.filter(t => t.id !== ticketId));
            });
    }

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
                                            <Button size="small"  variant="outlined" startIcon={<DeleteIcon/>} color="error" onClick={() => deleteTicket(ticket.id)}>Delete</Button>
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
