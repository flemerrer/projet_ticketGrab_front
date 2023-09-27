import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import FestivalIcon from '@mui/icons-material/Festival';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function SearchBlock() {

    const navigate = useNavigate();

    const [query, setQuery] = useState('');

    useEffect(() => {
        const listener = event => {
            if (query !== '') {
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                    navigate(`/events?search=${query}`)
                    setQuery('');
                }
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [query]);

    function handleChange(event) {
        console.log(event.target.value);
        setQuery(event.target.value);
    }

    function goTo(props) {
        navigate(`/${props}`)
    }

    return (
        <>
            <Typography variant='h3' sx={{m: 8}}>Rechercher un événement</Typography>

            <Grid container sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center"
            }}>

                <Grid item key={'searchBar'} sx={{width: '100%', mb: 5, justifyContent:'center'}}>

                    <TextField id="searchEvent"
                               label="Rechercher par nom, lieu, artiste"
                               variant="outlined"
                               value={query}
                               onChange={handleChange}
                               sx={{width: '50%'}}
                               key={1}
                    />

                </Grid>

                    <Box key={'searchButtons'}>

                        <Button variant="contained" startIcon={<FestivalIcon/>}
                                sx={{m: 1, backgroundColor: 'info.main'}} onClick={() => goTo('events')}>
                            Tous les événements
                        </Button>

                        <Button variant="contained" startIcon={<EventIcon/>}
                                sx={{m: 1, backgroundColor: 'warning.main'}}>
                            Ce Week End
                        </Button>

                        <Button variant="contained" startIcon={<LocationOnIcon/>}
                                sx={{m: 1, backgroundColor: 'secondary.main'}}>
                            Lister les lieux
                        </Button>

                    </Box>

            </Grid>
        </>
    )

}