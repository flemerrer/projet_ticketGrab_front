import * as React from "react";
import {CardContent, Paper, Typography} from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

export default function Event({event}) {

    return (
        <Paper elevation={2}
               sx={{
                   display:"flex",
                   flexDirection:"row",
                   width: '100%',
                   mb: 2,
                   position: 'relative',
                   backgroundColor: '#f2f2f2',
                   justifyContent: 'center'
               }}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color='text.danger'>
                    {event.date}
                </Typography>
                <Typography variant='h5' component='div'>
                    {event.name}
                </Typography>
                <Typography sx={{mb: .5}} color='text.secondary'>
                    {event.city}{event.type}
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