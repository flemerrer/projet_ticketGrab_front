import {Input, InputBase} from "@mui/material";
import {alpha, styled} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

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
    }, []);

    function handleChange(event) {
        // event.preventDefault();
        console.log(event.target.value);
        // setQuery2(event.target.value);
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        display: { xs: 'flex', md: 'flex' },
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        },
    }));

    return(
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Chercher un événement..."
                    // inputProps={{ 'aria-label': 'search' }}
                    value={query2}
                    onChange={handleChange}
                />
            </Search>
        </>
    )
}