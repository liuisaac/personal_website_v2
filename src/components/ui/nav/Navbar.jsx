"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeIcon from "./HomeIcon";
import { useRouter } from "next/navigation";
import Img from "../Img";
import { AnimatePresence, motion } from "framer-motion";

const tabs = ["_projects", "_work", "_contact"];
const mobile_tabs = ["_home", "_projects", "_work", "_contact"];

const formatTabName = (tab) => tab.replace("_", "");

const Navbar = () => {
    const location = usePathname();
    const [active, setActive] = useState("");
    const [menu, setMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const newSegment = location.split("/")[1];
        setActive(newSegment);
    }, [location]);

    useEffect(() => {
        console.log("Menu state:", menu);
    }, [menu]);

    const handleNavigation = (path) => {
        if (path === "home") {
            router.push("/");
            setActive(path);
            setMenu(false);
            return;
        }
        router.push(`/${path}`);
        setActive(path);
        setMenu(false);
    };

    return (
        <>
            <nav className="lg:flex hidden flex-col justify-center items-center h-screen xl:w-64 lg:w-48 bg-transparent z-50 pointer-events-auto fixed">
                <HomeIcon route={active} handleClick={handleNavigation} />
                <ul className="xl:text-4xl lg:text-3xl text-2xl flex flex-col gap-12">
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
            <nav className="lg:hidden w-full flex flex-row justify-end items-center bg-transparent z-50 pointer-events-auto fixed">
                <div
                    onClick={() => {
                        console.log("ran");
                        setMenu(!menu);
                    }}
                >
                    <Img
                        src="/icons/hamburger.svg"
                        alt="Menu"
                        className="w-10 h-10 mt-5 mr-5 cursor-pointer"
                    />
                </div>
                <AnimatePresence>
                    {menu && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, type: "tween" }}
                            className="fixed top-0 right-0 w-2/3 h-full bg-black bg-opacity-70 backdrop-blur-lg z-40 shadow-lg p-6 border-l-2 border-gray-800"
                        >
                            <div className="absolute top-0 mt-24">
                                <HomeIcon
                                    route={active}
                                    handleClick={handleNavigation}
                                />
                            </div>

                            <div className="mt-48 mb-12 w-12 h-[1px] bg-gray-400" />
                            <ul className="xl:text-4xl lg:text-3xl text-3xl flex flex-col gap-12">
                                {mobile_tabs.map((tab) => {
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
