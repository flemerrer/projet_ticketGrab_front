import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button, Paper, ImageListItemBar, ImageListItem, ImageList, Box,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Carousel from 'react-material-ui-carousel';

export default function DisplayEvents() {

    const items = [
        {
            name: 'Garorock',
            img: '/Garorock.jpg',
            date: '23 juillet'
        },
        {
            name: 'Motocultor',
            img: '/Motocultor.jpg',
            date: '12 aout'
        },
        {
            name: 'Roi Arthur',
            img: '/Arthur.png',
            date: '28 aout'
        }
    ]

    return (
        <>
            <Box sx={{mt:5}}>
                <Typography variant='h3'>Evenements à la une</Typography>
                <br/>
                <Carousel
                    sx={{
                        width: '100%',
                        height: '100%'
                    }}
                    // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                    // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                    // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}

                    // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                    // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                    // indicatorContainerProps={{style: {margin: "20px"}}}
                    NextIcon={<ArrowForwardIosIcon/>}
                    PrevIcon={<ArrowBackIosIcon/>}
                    navButtonsAlwaysVisible
                >
                    {
                        items.map( (item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </Box>
        </>
    )

}

function Item({item})
{
    return (

        <Paper elevation={2}>

            <img
                src={item.img}
                alt={item.name}
                sx={{
                    maxHeight: 400,
                    maxWidth: 600
                }}
                loading='lazy'
            />

            <Typography variant='h4' sx={{pt: 2}}>{item.name}</Typography>
            <Typography variant='h5' sx={{pb: 2}}>{item.date}</Typography>
        </Paper>

    )
}
