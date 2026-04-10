import React from "react";
import Img from "./../Img";

const FunIcon = ({ handleClick = () => {} }) => {
    return (
        <div
            className="absolute bottom-0 left-0 z-50 pointer-events-auto w-full bg-gradient-to-t from-black/70 to-transparent"
            onClick={() => {
                handleClick("");
            }}
        >
            <Img src="/funtext.svg" alt="how'd you build this?" className="ml-20 w-48 h-20 z-10"/>
        </div>
    );
};

export default FunIcon;
