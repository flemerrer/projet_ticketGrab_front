import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
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
            <body>
            <header>

            </header>
            <div className="App-headerT">
                <h2>Tickets</h2>
                <Container sx={{py: 8}} >
                    <Grid container spacing={4}>

                        { tickets.map((ticket) => (

                                <Grid item key={ticket.id}>
                                    <Card sx={{maxWidth:400}}>
                                        <CardMedia
                                            sx={{height: 250, width: 260}}
                                            image={ticket.img}
                                            title="green iguana"
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

                                            <Stack direction="row" spacing={1}>
                                                <Chip label={ticket.completed ? 'Available' : 'Not Available'} sx={{margin: 4}}
                                                      color={ticket.completed ? 'success' : 'error'}/>
                                            </Stack>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Add to Cart</Button>
                                            <Button size="small" onClick={() => deleteTicket(ticket.id)}>Delete</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Container>

            </div>
            <footer></footer>
            </body>






        </>
    );
}
