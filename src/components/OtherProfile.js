import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, Container, Grid, TextField, Typography} from "@mui/material";

export default function OtherProfile() {
    const [firstname, setFirstname] =useState(null);
    const [user, setUser] = useState([]);

    const firstnameChangeHandler= (event) => {
        fetch(`http://localhost:8080/api/otheruser/${firstname}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you are using Bearer token authentication
            }
        })
            .then(response => response.json())
            .then(user => {
                setUser(user);
                console.table(user);
                // Handle the response data here
            })
            .catch(error => {
                console.error(error);
                // Handle errors here
            })
    }

    return (
        <div>
            <h1>Prénom de l'Utilisateur recherché:</h1>
            <Container>
                <Box component="form" onSubmit={firstnameChangeHandler} noValidate>
                    <TextField
                        id="txtName"
                        required
                        name="description"
                        label="description"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Button type="submit">Add</Button>
                </Box>
            </Container>
            <Container sx={{py: 8}} textAlign="center">
                <h2>Profils recherchés</h2>
                <Grid container spacing={4}>
                    {user.map((u) => (
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
                                    L'utilisateur a vendu {u.soldTicketsNumber} tiquets!
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