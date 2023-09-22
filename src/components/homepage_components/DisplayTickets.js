import {Card, CardContent, Grid, Paper, Typography} from "@mui/material";
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
            <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{listStyleType: 'none'}}>

                {items.map(event => (<Event event={event}/>))}

            </Grid>
        </>
    )

}

function Event({event}) {

    return (
        <Paper elevation={2} display="flex" flexDirection="row" sx={{width: '60%', mb: 2}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color='text.danger'>
                    {event.name}
                </Typography>
                <Typography variant='h5' component='div'>
                    {event.type}
                </Typography>
                <Typography sx={{mb: .5}} color='text.secondary'>
                    {event.date}
                </Typography>
            </CardContent>
            <ConfirmationNumberIcon />
        </Paper>
    )
}