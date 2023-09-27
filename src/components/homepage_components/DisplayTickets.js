import {Grid, Typography} from "@mui/material";
import * as React from "react";
import Event from "../EventList/Event";

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
            <Typography sx={{m:8}} key={'ticketTitle'} variant='h3'>Tickets pour ce WE</Typography>
            <Grid container spacing={{}}
                  sx={{
                      listStyleType: 'none',
                      display:"flex",
                      flexDirection:"column",
                      alignContent:"center"
                  }}>
                {items.map(event => (
                    <Grid item xs={12} sm={8} md={6} key={event.id} sx={{width:'100%'}}>
                        <Event event={event} key={event.name}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )

}