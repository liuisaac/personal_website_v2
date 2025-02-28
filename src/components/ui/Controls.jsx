import React from "react";
import Navbar from "./nav/Navbar";
import GravitySwitch from "./GravitySwitch";

const Controls = ({ gravity, toggleGravity }) => {
    return (
        <>
            <Navbar />
            <GravitySwitch gravity={gravity} toggleGravity={toggleGravity} />
        </>
    );
};

export default Controls;
