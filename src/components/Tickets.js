import React, {useEffect, useState} from "react";

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
            <body className="App-headerT">
                <h4>Tickets disponibles</h4>

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
                                            <Typography gutterBottom variant="h5" component="div">
                                                {ticket.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {ticket.event}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant="contained">Add to Cart</Button>
                                            <Button size="small"  variant="outlined" color="error" onClick={() => deleteTicket(ticket.id)}>Delete</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Container>

            <footer></footer>
            </body>
        </>
    );
}
