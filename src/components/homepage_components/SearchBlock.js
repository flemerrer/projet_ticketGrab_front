import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import FestivalIcon from '@mui/icons-material/Festival';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SearchBlock() {

    return (
        <>
            <Box sx={{mt:8}}>
                <Paper elevation={0} sx={{mt: 5}}>
                    <Typography variant='h3'>Rechercher un événement</Typography>
                    <TextField id="searchEvent" label="Rechercher par nom, date, lieu" variant="outlined" sx={{width: '60%', m:5}} />
                    <Box display="flex"  sx={{
                        alignContent: 'center',
                        justifyContent: 'center',
                    }}>
                        <Button variant="contained" startIcon={<FestivalIcon />} sx={{m: 1, backgroundColor: 'info.main'}}>Tous les événements</Button>
                        <Button variant="contained" startIcon={<EventIcon />} sx={{m: 1, backgroundColor: 'warning.main'}}>Ce Week End</Button>
                        <Button variant="contained" startIcon={<LocationOnIcon />} sx={{m: 1, backgroundColor: 'secondary.main'}}>Lister les lieux</Button>
                    </Box>
                </Paper>
            </Box>
        </>
    )

}