import {Grid, Modal, Typography} from "@mui/material";
import * as React from "react";
import Event from "../eventList/Event";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


export default function DisplayTickets() {

    const items = [
        {
            name: 'Garorock',
            type: 'Pass 1 jour',
            date: '23 juillet',
            city : 'Paris'
        },
        {
            name: 'Motocultor',
            type: 'Pass WE',
            date: '12 aout',
            city: 'Renne'
        },
        {
            name: 'Roi Arthur',
            type: 'pass premium',
            date: '28 aout',
            city:'Lyon'
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
                    <Grid item xs={12} sm={6} md={4} key={event.id} sx={{width:'100%'}}>
                        <Event event={event} key={event.name}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )

}