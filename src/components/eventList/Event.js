import * as React from "react";
import {CardContent, Modal, Paper, Typography} from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


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
            <Button onClick={handleOpen} href="/allticket" color="success" variant="contained">Acheter un billet</Button>
            <Button onClick={handleOpen} href="/addticket" variant="outlined">Vendre un billet</Button>
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

export default function Event({event}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Paper elevation={2}
               sx={{
                   display:"flex",
                   flexDirection:"row",
                   width: '100%',
                   mb: 2,
                   position: 'relative',
                   backgroundColor: '#f2f2f2',
                   '&:hover': {
                       backgroundColor: 'white',
                   },
                   justifyContent: 'center'
               }}>

            <CardContent>

                <Typography sx={{fontSize: 14}} color='text.danger'>{event.date}</Typography>

                {/*<Typography variant='h5' component='div'>{event.name}</Typography>*/}

                <Typography variant='h5' component='div'>{event.location}</Typography>

                <Typography sx={{mb: .5}} color='text.secondary'>{event.type}</Typography>
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
                                <ul>{event.name}</ul>
                                <ul><CalendarMonthOutlinedIcon/> {event.date}</ul>
                                <ul><LocationOnOutlinedIcon/>{event.location}{event.city}</ul>
                            </p>
                            <ChildModal/>
                        </Box>
                    </Modal>
                </div>

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