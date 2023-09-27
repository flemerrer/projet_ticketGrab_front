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

    // useEffect(() => {
    //     fetch('http://localhost:8080/api/baskets/${basket.id}', {
    //         headers:{
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         },
    //     })
    //         // .then(res => console.table(res))
    //         .then(res => res.json())
    //         // .then(res => console.table(res))
    //         .then(basket=>
    //             setBasket(basket));
    //     // console.table(users);
    // }, []);
    const createBasket = (event) => {
        event.preventDefault();
       let email = localStorage.getItem('email');

       if (email == null){
           email = "z";
       }
       console.log(email);
        axios.post('http://localhost:8080/api/baskets/add/${email}')
            // .then(function (response) {
            //     return response.data;
            // })
            .then(basket  => console.log(basket))
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
                                    Tiquet en cours d'achat : {basket.tickets}
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