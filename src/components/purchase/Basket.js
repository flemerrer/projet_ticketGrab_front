import '../../App.css';
import useState from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";
import axios from "axios";
import * as React from "react";

export default function Basket() {

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        let email = localStorage.getItem('email');
        //si compte admin existe utiliser celui-ci?
        if (email == null){
            email = "z";
        }
        console.log(email);
        fetch(`http://localhost:8080/api/baskets/basket/${email}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(res => res.json())
            .then(basket=>
                setBasket(basket))
            .catch(error => {
            console.error(error);
            // Handle errors here
        })
        console.log(basket);
    }, []);
    const createBasket = (event) => {
        event.preventDefault();
       let email = localStorage.getItem('email');

       //si compte admin existe utiliser celui-ci?
       if (email == null){
           email = "z";
       }
       console.log(email);
        axios.post(`http://localhost:8080/api/baskets/add/${email}`)
            // .then(function (response) {
            //     return response.data;
            // })
            .then(basket  => setBasket(basket))
            .then(function (basket) {
                localStorage.setItem('basket',basket);
                console.log(localStorage);})
            .catch(error => console.error(error));

    };

    return (
        <Container sx={{py: 8}}>
            <h2>Votre Panier</h2>
            <Grid container spacing={4}>
                        <Grid item key={basket.id}>
                            <Card sx={{maxWidth: 345}}>
                                <CardContent>
                                    <Typography variant="body 1" component="div">
                                        Panier {basket.id}
                                    </Typography>
                                    <Typography variant="body4" color="text.secondary">
                                    Tickets en cours d'achat : {basket.tickets}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
            </Grid>
            <Box component="form" onSubmit={createBasket} noValidate sx={{ mt: 1 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Créer Panier
                </Button>
            </Box>
        </Container>

    );
}