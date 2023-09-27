import TitleImage from "./homepage_components/TitleImage";
import DisplayEvents from "./homepage_components/DisplayEvents";
import SearchBlock from "./homepage_components/SearchBlock";
import DisplayTickets from "./homepage_components/DisplayTickets";
import AboutBlock from "./homepage_components/AboutBlock";
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
