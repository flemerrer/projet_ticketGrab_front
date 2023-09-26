import '../App.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    Stack, TextField,
    Typography
} from "@mui/material";

export default function Basket() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/baskets/all', {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            // .then(res => console.table(res))
            .then(res => res.json())
            // .then(res => console.table(res))
            .then(tickets=>
                setTickets(tickets));
        // console.table(users);
    }, []);

    return (
        <Container sx={{py: 8}}>
            <h2>Liste des utilisateurs</h2>
            <Grid container spacing={4}>
                {tickets.map((t) => (
                        <Grid item key={u.id}>
                            <Card sx={{maxWidth: 345}}>
                                <CardContent>
                                    <Typography variant="body 1" component="div">
                                        Panier {t.id}
                                    </Typography>
                                    <Typography variant="body4" color="text.secondary">
                                    Tiquet en cours d'achat : {t.tickets}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    );
}