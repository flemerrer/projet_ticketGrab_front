import * as React from 'react';
import {useState, useEffect, useParams} from 'react';
import {List, Card, CardActions, CardContent, Typography, Button, ListItem, Grid} from '@mui/material';
import axios from "axios";
import {FilterButton} from "./FilterButton";

export default function EventList() {

    const [events, setEvents] = useState([]);
    // let {search} = useParams();

    const [start, setStart] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/events/list')
            .then(function (response) {
                // en cas de réussite de la requête
                setEvents(response.data)
            })
            .catch(function (error) {
                // en cas d’échec de la requête
                console.log(error);
            })
            .finally(function () {
                // dans tous les cas
            });
    }, []);

    /*    useEffect(() => {
            fetch('http://localhost:8080/api/events/list')
                .then(response => response.json())
                .then(elements => {
                    console.table(elements);
                    setEvents(elements);
                });
        }, [] );*/

    const fetchParam = (param) => {
        fetch('http://localhost:8080/api/events/list?' + param)
            .then(response => response.json())
            .then(elements => {
                console.table(elements);
                setEvents(elements);
            });
    }

    return (
        <>
            <h1>Parcourir les événements</h1>
            <h3>Trouve des concerts près de chez toi</h3>
            <Grid display="flex" justifyContent="center" alignItems="center" sx={{listStyleType: 'none'}}>
                <FilterButton/>
                <FilterButton/>
            </Grid>
            <Grid sx={{listStyleType: 'none'}}>
                <Grid display="flex" justifyContent="center" alignItems="center" sx={{mb: 1.5}}>
                    <Card sx={{flexGrow: 1, maxWidth: 500}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color='text.danger'>
                                Date
                            </Typography>
                            <Typography variant='h5' component='div'>
                                Name
                            </Typography>
                            <Typography sx={{mb: .5}} color='text.secondary'>
                                City
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid display="flex" justifyContent="center" alignItems="center" sx={{mb: 1.5}}>
                    <Card sx={{flexGrow: 1, maxWidth: 500}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color='text.danger'>
                                Date
                            </Typography>
                            <Typography variant='h5' component='div'>
                                Name
                            </Typography>
                            <Typography sx={{mb: .5}} color='text.secondary'>
                                City
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {events.slice(0, start + 5).map(event =>
                    (<Grid display="flex" justifyContent="center" alignItems="center" sx={{mb: 1.5}}>
                        <li><Event event={event}/></li>
                    </Grid>))}
            </Grid>
            <LoadMore/>
        </>
    )

    function Event({event}) {

        return (
            <Card>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color='text.danger'>
                        {event.date}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {event.name}
                    </Typography>
                    <Typography sx={{mb: .5}} color='text.secondary'>
                        {event.city}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    function LoadMore() {
        if (start <= events.length) {
            return (
                <Button onClick={() => setStart(start + 5)}>Montrer plus</Button>
            )

        } else {
            return <></>;
        }
    }

}
