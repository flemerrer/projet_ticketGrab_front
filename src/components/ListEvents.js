import * as React from "react";
import {useState, useEffect, useParams} from "react";
import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";

export default function ListEvents() {

    const [events, setEvents] = useState([]);
    // let {search} = useParams();

    useEffect(() => {
        fetch('http://localhost:8080/api/events/list')
            .then(response => response.json())
            .then(events => {
                setEvents(events);
            });
    }, [] );

    return(
        <>
            <ul>
                {events.map(event =>
                    <li>
                        <Event event={event}/>
                    </li>)}
            </ul>
        </>
    )

}

function Event({event}){

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {event.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {event.date} - {event.city}
                </Typography>
            </CardContent>
        </Card>
    )

}