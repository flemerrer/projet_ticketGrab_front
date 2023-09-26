import {Paper, Box, Grid, Typography} from "@mui/material";

export default function TitleImage(){

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
                    backgroundPosition: 'top'
                    ,
                    backgroundImage: `url(party2.jpg)`
                    ,
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
                    <Grid item md={12} key={'titleContainer'} sx={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box
                            key={'titleImage'}
                            sx={{
                                position: 'relative',
                                p: {xs: 4, sm:8, md: 12, lg: 16, xl:20},
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Changez vos plans du week-end en quelques clics
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}