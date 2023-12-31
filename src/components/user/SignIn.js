import '../../App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListUsers from "./ListUsers";
import axios from "axios";
import {redirect, useNavigate} from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        let loginData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        localStorage.setItem('email', data.get('email'));

        axios.post('http://localhost:8080/auth/login', loginData)
            .then(function (response) {
                return response.data;
            })
            .then(function (token) {
                localStorage.setItem('token',token);
                console.log(localStorage);
                navigate("/userprofile");
            })
    .catch(function (error) {
                console.log(error);
            });
    };

    const compteParDefaut = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        // });
        //
        // let loginData = {
        //     email: data.get('email'),
        // };
        // localStorage.setItem('email', data.get('email'));

        axios.post('http://localhost:8080/auth/nologin')
            .then(function (response) {
                return response.data;
            })
            .then(function (token) {
                localStorage.setItem('token',token);
                console.log(localStorage);
                navigate("/userprofile");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
                    {/*    <LockOutlinedIcon />*/}
                    {/*</Avatar>*/}
                    <Typography component="h1" variant="h5">
                        Connexion
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adresse email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/*<FormControlLabel*/}
                        {/*    control={<Checkbox value="remember" color="primary" />}*/}
                        {/*    label="Remember me"*/}
                        {/*/>*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Connexion
                        </Button>
                        <Grid container>
                            {/*<Grid item xs>*/}
                            {/*    <Link href="#" variant="body2">*/}
                            {/*        Forgot password?*/}
                            {/*    </Link>*/}
                            {/*</Grid>*/}
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Vous n'avez pas de compte? Inscrivez-vous ici!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    {/*<Box component="form" onSubmit={compteParDefaut} noValidate sx={{ mt: 1 }}>*/}
                    {/*    <Button*/}
                    {/*        type="submit"*/}
                    {/*        fullWidth*/}
                    {/*        variant="contained"*/}
                    {/*        sx={{ mt: 3, mb: 2 }}*/}
                    {/*    >*/}
                    {/*        Connexion en visiteur*/}
                    {/*    </Button>*/}
                    {/*</Box>*/}
                </Box>
            </Container>
        </ThemeProvider>
    );
}