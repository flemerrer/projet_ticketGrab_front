import TitleImage from "./homepage/TitleImage";
import DisplayEvents from "./homepage/DisplayEvents";
import SearchBlock from "./homepage/SearchBlock";
import DisplayTickets from "./homepage/DisplayTickets";
import AboutBlock from "./homepage/AboutBlock";
import Box from "@mui/material/Box";

export default function HomePage() {

    return (
        <>
            <TitleImage />

            <DisplayEvents />

            <SearchBlock/>

            <DisplayTickets />

            <AboutBlock />
        </>
    )

}
