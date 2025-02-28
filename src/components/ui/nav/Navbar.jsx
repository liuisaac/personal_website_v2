"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeIcon from "./HomeIcon";
import { useRouter } from "next/navigation";
import { delay } from "framer-motion";

const tabs = ["_projects", "_work", "_contact"];

const formatTabName = (tab) => tab.replace("_", "");

const Navbar = () => {
    const location = usePathname();
    const [active, setActive] = useState("");
    const router = useRouter();

    useEffect(() => {
        const newSegment = location.split("/")[1];
        setActive(newSegment);
    }, [location]);

    const handleNavigation = (path) => {
        router.push(`/${path}`);
        setActive(path);
    };

    return (
        <nav className="flex flex-col justify-center items-center h-screen w-64 bg-transparent z-50 pointer-events-auto fixed">
            <HomeIcon route={active} handleClick={handleNavigation} />
            <ul className="text-4xl flex flex-col gap-12">
                {tabs.map((tab) => {
                    const path = formatTabName(tab);
                    const isActive = path === active;
                    return (
                        <li
                            key={tab}
                            className={`cursor-pointer ${
                                isActive
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            } transition duration-500 ease-in-out`}
                            onClick={() => {
                                handleNavigation(path);
                            }}
                        >
                            {tab}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
