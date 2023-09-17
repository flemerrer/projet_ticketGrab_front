import * as React from 'react';
import {useState, useEffect, useParams} from 'react';
import {List, Card, CardActions, CardContent, Typography, Button, ListItem, Grid} from '@mui/material';
// import axios from "axios";

export default function EventList() {

    const [events, setEvents] = useState([]);
    // let {search} = useParams();

    const [start, setStart] = useState(0);

    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/events/list')
    //         .then(function (response) {
    //             // en cas de réussite de la requête
    //             setEvents(response.data)
    //         })
    //         .catch(function (error) {
    //             // en cas d’échec de la requête
    //             console.log(error);
    //         })
    //         .finally(function () {
    //             // dans tous les cas
    //         });
    // }, [] );

    useEffect(() => {
        fetch('http://localhost:8080/api/events/list')
            .then(response => response.json())
            .then(elements => {
                console.table(elements);
                setEvents(elements);
            });
    }, [] );

    const fetchParam = (param) => {
        fetch('http://localhost:8080/api/events/list?' + param)
            .then(response => response.json())
            .then(elements => {
                console.table(elements);
                setEvents(elements);
            });
    }

    return(
        <>
            <h1>Parcourir les événements</h1>
            <h3>Trouve des concerts près de chez toi</h3>
            <FilterButton />
            <Grid sx={{listStyleType: 'none'}}>
                {events.slice(0, start+5).map(event =>
                    (<Grid display="flex" justifyContent="center" alignItems="center" sx={{mb: 1.5}}>
                        <li><Event event={event}/></li>
                    </Grid>))}
            </Grid>

            <Button onClick={() => setStart(start+5)}>Montrer plus</Button>

        </>
    )

}

function Event({event}){

    return (
        <Card sx={{ minWidth: 500, maxWidth: 800}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.danger'>
                    {event.date}
                </Typography>
                <Typography variant='h5' component='div'>
                    {event.name}
                </Typography>
                <Typography sx={{ mb: .5 }} color='text.secondary'>
                    {event.city}
                </Typography>
            </CardContent>
        </Card>
    )

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));

    export default function FilterButton() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        const click = (param) => {
            handleClose;
            fetchParam(param);
    }

        return (
            <div>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    // endIcon={<KeyboardArrowDownIcon />}
                >
                    Options
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={click(param)} disableRipple>
                        Entry 1
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Entry 2
                    </MenuItem>
                    {/*<Divider sx={{ my: 0.5 }} />*/}
                    <MenuItem onClick={handleClose} disableRipple>
                        Entry 3
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Entry 4
                    </MenuItem>
                </StyledMenu>
            </div>
        );
    }