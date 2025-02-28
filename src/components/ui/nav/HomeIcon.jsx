import React from "react";
import Img from "./../Img";

const HomeIcon = ({ route, handleClick }) => {
    return (
        <div
            className="absolute top-2 left-2 z-50 pointer-events-auto"
            onClick={() => {
                handleClick("");
            }}
        >
            <span
                className={`relative w-56 h-20 col-center text-4xl z-20 header ${
                    route == ""
                        ? "text-white"
                        : "text-slate hover:text-white"
                } transition duration-800 ease-in-out cursor-pointer`}
            >
                isaac_liu
            </span>

            <Img src="/backtext.svg" alt="Home Icon" className=" w-56 h-20 z-10 -mt-20"/>
        </div>
    );
};

export default HomeIcon;
