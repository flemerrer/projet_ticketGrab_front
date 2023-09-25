import {NavLink} from "react-router-dom";
import Signout from "../Signout";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Ticket Grab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        This is not Ticket Swap (but its pretty close)
                    </Typography>
                    <Copyright />
                </Container>
                <div className="btn-group">
                    <NavLink to="/listusers" className="btn btn-outline-dark bg-light">  Bouton Liste users  </NavLink>
                    <NavLink to="/signin" className="btn btn-outline-dark bg-light">  Se connecter  </NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark bg-light">  Créer un compte  </NavLink>
                    <Signout/>
                </div>
            </Box>
        </>
    );
}