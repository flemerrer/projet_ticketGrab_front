import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import Searchbar from "./SearchBar";
import {useNavigate} from "react-router-dom";

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (props) => {
        setAnchorElUser(null);
        navigate(`/${props}`)
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <PublishedWithChangesOutlinedIcon onClick={() => navigate('')} sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate('')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontStyle: 'oblique',
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Ticket Grab
                    </Typography>

                    <Searchbar />

                    {/*Nav menu*/}

                    <Box sx={{ml:2, display: { xs: 'none', lg: 'flex' }, justifyContent: 'flex-end'}}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Mes tickets
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Mes annonces
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Vendre un ticket
                        </Button>
                    </Box>

                    {/*Boxed Menu*/}

                    <Box sx={{display: { xs: 'flex', lg: 'none' }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Mes tickets</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Mes annonces</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Vendre un ticket</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, ml: 2 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Sylvain" src="./Sylvain.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            <MenuItem onClick={() => handleCloseUserMenu('signin')}>
                                <Typography textAlign="center">Se connecter</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleCloseUserMenu('register')}>
                                <Typography textAlign="center">Créer un Compte</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleCloseUserMenu('userprofile')}>
                                <Typography textAlign="center">Mon profil</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleCloseUserMenu('otherprofile')}>
                                <Typography textAlign="center">Chercher un utilisateur</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => handleCloseUserMenu('signout')}>
                                <Typography textAlign="center">Déconnexion</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;