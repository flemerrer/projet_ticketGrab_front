import * as React from 'react';
import {useState, useEffect, useParams} from 'react';
import {List, Card, CardActions, CardContent, Typography, Button, ListItem, Grid} from '@mui/material';
import axios from "axios";
import {FilterButton} from "./FilterButton";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen} href="/ticket">Acheter un billet</Button>
            {/*<Modal*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="child-modal-title"*/}
            {/*    aria-describedby="child-modal-description"*/}
            {/*>*/}
            {/*    <Box sx={{ ...style, width: 200 }}>*/}
            {/*        <h2 id="child-modal-title">Text in a child modal</h2>*/}
            {/*        <p id="child-modal-description">*/}
            {/*            Lorem ipsum, dolor sit amet consectetur adipisicing elit.*/}
            {/*        </p>*/}
            {/*        <Button onClick={handleClose}>Close Child Modal</Button>*/}
            {/*    </Box>*/}
            {/*</Modal>*/}
        </React.Fragment>
    );
}


export default function EventList() {

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
        // {
        //     name: 'Vieilles Charrues',
        //     city: 'Carhaix',
        //     date: '16 septembre'
        // },
        // {
        //     name: 'Hellfest',
        //     city: 'Clisson',
        //     date: '20 octobre'
        // }
    ]


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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

        let i = 0;

        return (
            <>
                <h1>Parcourir les événements</h1>
                <h3>Trouve des concerts près de chez toi</h3>
                <Grid display="flex" justifyContent="center" alignItems="center" sx={{listStyleType: 'none'}}>
                    <FilterButton/>
                    <FilterButton/>
                </Grid>
                <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                      sx={{listStyleType: 'none'}}>

                    {items.map(event => (<Event event={event}/>))}

                    {events.slice(0, start + 5).map(event => (<Event event={event}/>))}
                </Grid>
                <LoadMore/>
            </>
        )


        function Event({event}) {

            return (
                <Card sx={{width: '60%', mb: 2}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color='text.danger'>
                            {event.date}
                        </Typography>
                        <Typography variant='h5' component='div'>
                            {event.name}
                        </Typography>
                        {/*<Typography sx={{mb: .5}} color='text.secondary'>*/}
                        {/*    {event.city}*/}
                        {/*</Typography>*/}
                        <div>
                            <Button onClick={handleOpen}>Details</Button>
                        <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box sx={{...style, width: 400}}>
                                    <h2 id="parent-modal-title">Les détails de votre évèvement</h2>
                                    <p id="parent-modal-description">
                                        <ul>Organisé par : TOTO and Co</ul>
                                        <ul><CalendarMonthOutlinedIcon/> {event.date}</ul>
                                        <ul><LocationOnOutlinedIcon/> 15 rue des codeurs, {event.city}</ul>
                                    </p>
                                    <ChildModal/>
                                </Box>
                            </Modal>
                        </div>
                    </CardContent>
                </Card>
            )
        }

        function LoadMore() {
            if (start <= events.length) {
                return (
                    <Button onClick={() => setStart(start + 5)} sx={{p: 5}}>Montrer plus</Button>
                )

            } else {
                return <></>;
            }
        }

    }
