import * as React from 'react';
import {useState, useEffect, useParams} from 'react';
import {Button, Grid, Typography} from '@mui/material';
import axios from "axios";
import {FilterButton} from "./FilterButton";
import {DatePicker} from "./DatePicker";
import {useLocation, useNavigate} from 'react-router-dom'
import Event from "./Event";
import Box from "@mui/material/Box";

export default function EventList() {

    const navigate = useNavigate();

    // let location = useLocation();
    //
    // React.useEffect(() => {
    //     console.log(location.pathname);
    // }, [location]);

    const [cityFilter, setCityFilter] = useState('');

    const [citiesList, setCitiesList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/events/cities`)
            .then(function (response) {
                setCitiesList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const queryParameters = new URLSearchParams(window.location.search)
    const search = queryParameters.get("search");
    const [events, setEvents] = useState([]);
    const [start, setStart] = useState(0);

    const items = [
        {
            name: 'Garorock',
            city: 'Marmande',
            date: '23 juillet',
            location: '12 rue belle france'
        },
        {
            name: 'Motocultor',
            city: 'Saint Nolff',
            date: '12 aout',
            location: '142 rue des ateliers'
        },
        {
            name: 'Roi Arthur',
            city: 'Breal sous Montfort',
            date: '28 aout',
            location: '14 rue De Gaulles'
        },
        {
            name: 'Vieilles Charrues',
            city: 'Carhaix',
            date: '16 septembre',
            location: '142 rue de lilas'
        },
        {
            name: 'Hellfest',
            city: 'Clisson',
            date: '20 octobre',
            location: '7 rue des banquets'
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

    useEffect(() => {
        if (cityFilter !== '') {
            axios.get(`http://localhost:8080/api/events/list?city=${cityFilter}`)
                .then(function (response) {
                    setEvents(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [cityFilter]);

    function changeFilter(city) {
        setCityFilter(city);
        navigate(`/events?city=${city}`)
    }

    return (
        <>
            <Typography variant='h3' sx={{mt: 8}}>Parcourir les événements</Typography>

            <Grid container sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center"
            }}>

                <Grid item key={'filterButtons'} sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    m: 3,
                }}>

                    <FilterButton changeFilter={changeFilter} citiesList={citiesList}/>

                    <DatePicker/>

                </Grid>

                <Grid item xs={12} sm={6} md={4} key={'eventList'} sx={{width: '100%'}}>

                    {events.slice(0, start + 5).map(event => (<Event event={event} key={event.id}/>))}

                    {/*{items.map(event => (<Event event={event} key={event.name}/>))}*/}

                </Grid>

                <LoadMore/>

            </Grid>
        </>
    )

    function LoadMore() {
        if (start <= events.length) {

            return (<Button onClick={() => setStart(start + 5)} sx={{p: 5}}>Montrer plus</Button>)

        } else {
            return <Box sx={{height: '5vh'}}></Box>;
        }
    }
}