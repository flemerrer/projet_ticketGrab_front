import '../../App.css';
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

export default function ListUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/opi/allusers', {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            // .then(res => console.table(res))
            .then(res => res.json())
            // .then(res => console.table(res))
            .then(users=>
                setUsers(users));
        // console.table(users);
    }, []);

    return (
        <Container sx={{py: 8}}>
            <h2>Liste des utilisateurs</h2>
            <Grid container spacing={4}>
                {users.map((u) => (
                        <Grid item key={u.id}>
                            <Card sx={{maxWidth: 345}}>
                                {/*<CardMedia*/}
                                {/*    sx={{height: 140}}*/}
                                {/*    image={u.image}*/}
                                {/*    title="image"*/}
                                {/*/>*/}
                                <CardContent>
                                    <Typography variant="body 1" component="div">
                                        Utilisateur {u.id}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Prénom : {u.firstName}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary">
                                        Nom : {u.lastName}
                                    </Typography><br/>
                                    <Typography variant="body4" color="text.secondary">
                                        A vendu {u.soldTicketsNumber} tickets!
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