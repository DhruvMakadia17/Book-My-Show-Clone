import React from "react";

//Components
import Navbar from "../Components/Navbar/Navbar.Components";
import HeroCaurosel from "../Components/HeroCaurosel/HeroCaurosel.Components";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCaurosel />
            {props.children}
        </>
    );
};

export default DefaultLayout ;