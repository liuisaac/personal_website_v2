"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Svg from "./Svg";

const Button = ({ href, icon, label, primary, textStyles }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const handleNavigation = (path) => {
        router.push(`${path}`);
    };

    return (
        <div
            className="w-56 h-12 row-center hover:cursor-pointer"
            style={{
                backgroundColor: isHovered ? "#FFFFFF" : primary,
                color: isHovered ? "#000000" : "#FFFFFF",
                transition:
                    "background-color 0.2s ease-in-out, color 0.3s ease-in-out",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleNavigation(href)}
        >
            <Svg src={icon} className="w-7 h-7 mr-2" color={isHovered ? "#000000" : "#FFFFFF"} />
            <span className={`text-center ${textStyles}`}>{label}</span>
        </div>
    );
};

export default Button;
