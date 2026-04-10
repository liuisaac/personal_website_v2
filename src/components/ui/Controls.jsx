import React from "react";
import Navbar from "./nav/Navbar";
import GravitySwitch from "./GravitySwitch";
import FunIcon from "./nav/FunButton";

const Controls = ({ gravity, toggleGravity }) => {
    return (
        <>
            <Navbar />
            <GravitySwitch gravity={gravity} toggleGravity={toggleGravity} />
            <FunIcon />
        </>
    );
};

export default Controls;
