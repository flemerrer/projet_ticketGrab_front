import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
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
import axios from "axios";

export default function UserProfile() {
    const [user, setUser] = useState([]);
    const [password, setPassword] = useState([]);
    useEffect(() => {
        const email = localStorage.getItem('email');
        console.log(email);
        fetch(`http://localhost:8080/api/user/${email}`, {
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
    }, []);

    const changePassword = (event) => {
        const email = localStorage.getItem('email');
        console.log(email + password);
        fetch(`http://localhost:8080/api/updatepassword/${email}/${password}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you are using Bearer token authentication
            }
        })
            .then(response => console.log(response))
            .catch(error => {
                console.error('Error:', error);
                // Handle errors here
            });
    };
    const deleteAccount= (event) => {
        const email = localStorage.getItem('email');
        console.log(email + password);
        fetch(`http://localhost:8080/deleteuser`, email, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you are using Bearer token authentication
            }
        })
            .then(response => console.log(response))
            .catch(error => {
                console.error('Error:', error);
                // Handle errors here
            });
    };

    return (
        <Container sx={{py: 8}}>
            <h2>Vos Informations personelles</h2>
            <Grid container spacing={4}>
                        <Grid item key={user.id}>
                            <Card sx={{maxWidth: 345}}>
                                {/*<CardMedia*/}
                                {/*    sx={{height: 140}}*/}
                                {/*    image={u.image}*/}
                                {/*    title="image"*/}
                                {/*/>*/}
                                <CardContent>
                                    <Typography variant="body 1" component="div">
                                        Utilisateur {user.id}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Prénom:  {user.firstName}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary">
                                        Nom: {user.lastName}
                                    </Typography><br/>
                                    <Typography variant="body3" color="text.secondary">
                                        Email: {user.email}
                                    </Typography><br/>
                                    <Typography variant="body4" color="text.secondary">
                                        Vous avez vendu {user.soldTicketsNumber} tiquets!
                                    </Typography><br/>
                                    <Typography variant="body4" color="text.secondary">
                                        Changer de mot de passe :
                                        <TextField
                                            id="txtName"
                                            required
                                            name="mdp"
                                            label="Password"
                                            type="text"
                                            value={password} // Liez la valeur du champ à l'état "password"
                                            onChange={(e) => setPassword(e.target.value)} // Mettez à jour l'état lorsqu'il y a un changement
                                        />
                                            <Button type="submit" key={user.id} onClick={(event) => changePassword(event)}>Add</Button>
                                    </Typography>
                                    <Typography variant="body4" color="text.secondary">
                                        Supprimez votre compte :
                                        <Button type="submit" key={user.id} onClick={(event) => deleteAccount(event)}>Add</Button>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
            </Grid>
        </Container>
    );
    }