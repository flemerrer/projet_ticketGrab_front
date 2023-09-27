import * as React from 'react';
import {useState, useEffect, useParams} from 'react';
import {Button, Grid, Typography} from '@mui/material';
import axios from "axios";
import {FilterButton} from "./FilterButton";
import {DatePicker} from "./DatePicker";

import Event from "./Event";
import Box from "@mui/material/Box";

export default function EventList() {

    const queryParameters = new URLSearchParams(window.location.search)
    const search = queryParameters.get("search")

    const [events, setEvents] = useState([]);
    // let {search} = useParams();

    const [start, setStart] = useState(0);

    const items = [
        {
            name: 'Garorock',
            city: 'Marmande',
            date: '23 juillet'
        },
        {
            name: 'Motocultor',
            city: 'Saint Nolff',
            date: '12 aout'
        },
        {
            name: 'Roi Arthur',
            city: 'Breal sous Montfort',
            date: '28 aout'
        },
        {
            name: 'Vieilles Charrues',
            city: 'Carhaix',
            date: '16 septembre'
        },
        {
            name: 'Hellfest',
            city: 'Clisson',
            date: '20 octobre'
        }
    ]

    useEffect(() => {
        if (search !== null) {
            axios.get(`http://localhost:8080/api/events/list?search=${search}`)
                .then(function (response) {
                    setEvents(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            axios.get(`http://localhost:8080/api/events/list`)
                .then(function (response) {
                    setEvents(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, []);

    const fetchParam = (param) => {
        fetch('http://localhost:8080/api/events/list?' + param)
            .then(response => response.json())
            .then(elements => {
                console.table(elements);
                setEvents(elements);
            });
    }

    let i = 0;

    return (
        <>
            <Typography variant='h3' sx={{mt:8}}>Parcourir les événements</Typography>
            <Grid container sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    m:3
                }}>
                    <FilterButton/>
                    <DatePicker/>
                    {/*<FilterByCity/>*/}
                    {/*<FilterByDate/>*/}
                </Box>
                <Grid item xs={12} sm={8} md={6} key={'eventList'} sx={{width:'100%'}}>

                    {events.slice(0, start + 5).map(event => (<Event event={event}/>))}

                    {/*{items.map(event => (<Event event={event} key={event.name}/>))}*/}

                </Grid>
                <LoadMore/>
            </Grid>
        </>
    )

    function LoadMore() {
        if (start <= events.length) {
            return (
                <Button onClick={() => setStart(start + 5)} sx={{p:5}}>Montrer plus</Button>
            )

        } else {
            return <></>;
        }
    }

}
