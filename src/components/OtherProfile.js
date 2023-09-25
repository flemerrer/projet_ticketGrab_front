import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, Container, Grid, TextField, Typography} from "@mui/material";

export default function OtherProfile() {
    const [firstname, setFirstname] =useState(null);
    const [users, setUsers] = useState([]);

    const firstnameChangeHandler= (event) => {
        // setFirstname(event.target.value);
        event.preventDefault();
        console.log(firstname);
        fetch(`http://localhost:8080/opi/otheruser/${firstname}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you are using Bearer token authentication
            }
        })
            .then(response => response.json())
            .then(users => {
                setUsers(users);
                console.table(users);
                // Handle the response data here
            })
            .catch(error => {
                console.error(error);
                // Handle errors here
            })
    }

    return (
        <div>
            <h1>Prénom de l'utilisateur recherché:</h1>
            <Container>
                <Box component="form" onSubmit={firstnameChangeHandler} noValidate>
                    <TextField
                        id="txtName"
                        required
                        name="firstname"
                        label="Prénom..."
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Button type="submit">Recherche</Button>
                </Box>
            </Container>
            <Container sx={{py: 8}} textAlign="center">
                <h2>Profils recherchés</h2>
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
                                    Prénom: {u.firstName}
                                </Typography>
                                <Typography variant="body3" color="text.secondary">
                                    Nom: {u.lastName}
                                </Typography><br/>
                                <Typography variant="body3" color="text.secondary">
                                    Email: {u.email}
                                </Typography><br/>
                                <Typography variant="body4" color="text.secondary">
                                    L'utilisateur a vendu {u.soldTicketsNumber} tickets!
                                </Typography><br/>
                            </CardContent>
                        </Card>
                    </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </div>
    );
}