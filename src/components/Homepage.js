import TitleImage from "./homepage_components/TitleImage";
import DisplayEvents from "./homepage_components/DisplayEvents";
import SearchBlock from "./homepage_components/SearchBlock";
import DisplayTickets from "./homepage_components/DisplayTickets";
import AboutBlock from "./homepage_components/AboutBlock";
import {Divider, Grid} from "@mui/material";

export default function HomePage() {

    return (
        <>
            <TitleImage />
            <br />
            <Grid container sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <Grid item xs={12} sm={12} md={8} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <DisplayEvents />
                    <br />
                    <SearchBlock/>
                    <br />
                    <DisplayTickets />
                    <br />
                </Grid>
            </Grid>
            <AboutBlock />
        </>
    )

}
