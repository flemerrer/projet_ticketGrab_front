import {Input, InputBase} from "@mui/material";
import {alpha, styled} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Searchbar(){

    const navigate = useNavigate();

    const [query2, setQuery2] = useState('');

    useEffect(() => {
        const listener = event => {
            if (query2 !== ''){
                // console.log('this');
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                    navigate(`/events?search=${query2}`)
                    setQuery2('');
                }
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [query2]);

    function handleChange(event) {
        event.preventDefault();
        console.log(event.target.value);
        setQuery2(event.target.value);
    }

    return(
        <>
            <Box sx={{
                display: { xs: 'flex', md: 'flex' },
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                flexGrow: 1,
                borderRadius: '500px',
                '&:hover': {
                    backgroundColor:'white',
                },
                '&:focus': {
                    backgroundColor:'white',
                },
                marginLeft: 0,
            }}>
                <SearchIcon sx={{pl:2, pr:2}} />
                <TextField id="standard-basic"
                           variant="standard"
                           placeholder="Chercher un événement..."
                           value={query2}
                           onChange={handleChange}
                           InputProps={{
                               disableUnderline: true,
                           }}
                />
            </Box>
        </>
    )
}