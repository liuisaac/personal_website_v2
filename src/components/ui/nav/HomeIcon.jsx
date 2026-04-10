import React from "react";
import Img from "./../Img";

const HomeIcon = ({ handleClick, route }) => {
    return (
        <div
            className="top-2 left-2 z-50 pointer-events-auto"
            onClick={() => {
                handleClick("");
            }}
        >
            <Img src="/backtext.svg" alt="Home Icon" className="w-40 h-20 z-10"/>
        </div>
    );
};

export default HomeIcon;
