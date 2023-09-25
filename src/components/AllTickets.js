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



export default function AllTickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/tickets/all')
            .then(response => response.json())
            .then(tickets => setTickets(tickets));
    }, []);

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