import {Box, Card, CardContent, Grid, Paper, Typography} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function DisplayTickets() {

    const items = [
        {
            name: 'Garorock',
            type: 'Pass 1 jour',
            date: '23 juillet'
        },
        {
            name: 'Motocultor',
            type: 'Pass WE',
            date: '12 aout'
        },
        {
            name: 'Roi Arthur',
            type: 'pass premium',
            date: '28 aout'
        }
    ]

    return (
        <>
            <Box sx={{mt:8}}>
                <Typography variant='h3'>Tickets pour ce WE</Typography>
                <br/>
                <Grid display="flex" flexDirection="column" alignItems="center" >
                    <Grid display="flex" flexDirection="column" alignItems="center" xs={12} sm={12} md={6}
                          sx={{listStyleType: 'none', width: '100%'}}>
                        {items.map(event => (<Event event={event}/>))}

                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

function Event({event}) {

    return (
        <Paper elevation={2} display="flex" flexDirection="row"
               sx={{
                   width: '100%',
                   mb: 2,
                   position: 'relative'
        }}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color='text.danger'>
                    {event.type}
                </Typography>
                <Typography variant='h5' component='div'>
                    {event.name}
                </Typography>
                <Typography sx={{mb: .5}} color='text.secondary'>
                    {event.date}
                </Typography>
            </CardContent>
            <ConfirmationNumberIcon sx={{
                position: 'absolute',
                top:'40%',
                right:'10%',
                color: '#0288d1'
            }}/>
        </Paper>
    )
}