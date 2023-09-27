import {Box, Grid, Paper, Typography} from "@mui/material";

export default function AboutBlock() {

    return (
        <>
            <Paper
                sx={{
                    position: 'relative'
                    ,
                    backgroundColor: 'grey.800'
                    ,
                    color: '#fff'
                    ,
                    backgroundSize: 'cover'
                    ,
                    backgroundRepeat: 'no-repeat'
                    ,
                    backgroundPosition: 'center'
                    ,
                    backgroundImage: `url(platines.jpg)`
                    ,
                    mt:8
                }

                }
            >
                {/* Increase the priority of the hero background image */
                }
                {
                    <img style={{display: 'none'}} src="background.jpg" alt="Change your WE plans in a few clics"/>
                }
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={12} key={'aboutContainer'} sx={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box key={'aboutImage'}
                            sx={{
                                position: 'relative',
                                p: {xs: 4, sm:8, md: 12, lg: 16, xl:20},
                            }}
                        >
                            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                                Ticket Grab : revente de tickets sécurisée
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )

}