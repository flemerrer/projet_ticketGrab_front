import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid, IconButton,
    Typography
} from "@mui/material";

export default function AllTicket() {

    const tickets = [
        {
            "name": "place premium",
            "event": "TOTO LAST SHOW - BERCY ZOOM",
            "img": "https://images.unsplash.com/photo-1655723122539-6f4288ed14c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": "120",
            "id": 1
        },
        {
            "name": "1 place standard",
            "event": "CITY LIVE - BONGO LIVE",
            "img": "https://plus.unsplash.com/premium_photo-1695200708808-a0744dd42d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": "25",
            "id": 2
        },
        {
            "name": "place fosse",
            "event": "NIJU - YES YES TIME",
            "img": "https://images.unsplash.com/photo-1643914543607-7f755947dd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            "price": "75",
            "id": 3
        },
        {
            "name": "place assise",
            "event": "BOOBA & K-RIXE",
            "img": "https://images.unsplash.com/photo-1664661167811-50344036d2db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            "price": "120",
            "id": 4
        },
        {
            "name": "Pass 4 jours",
            "event": "Hellfest",
            "img": "https://images.unsplash.com/photo-1643914543607-7f755947dd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            "price": "325",
            "id": 5
        },
        {
            "name": "Pass Jour 1",
            "event": "Garorock",
            "img": "https://images.unsplash.com/photo-1655723122539-6f4288ed14c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            "price": "45",
            "id": 6
        }
    ]



    //const [tickets, setTicket] = useState([]);

    // useEffect(() => {
    //
    //     axios.get('http://localhost:8080/api/tickets/all')
    //         .then(function (response) {
    //             setTickets(response.data)
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    //
    // }, []);

    // function deleteTicket(ticketId) {
    //     axios.delete(`http://localhost:4000/tickets/${ticketId}`)
    //         .then(response => {
    //             setTickets(tickets.filter(t => t.id !== ticketId));
    //         });
    // }

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