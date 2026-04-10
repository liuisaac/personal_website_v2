"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeIcon from "./HomeIcon";
import Img from "../Img";
import { AnimatePresence, motion } from "framer-motion";
import PageContainer from "../page/PageContainer";
import Link from "next/link";

const tabs = ["github", "linkedin", "email"];
const mobile_tabs = ["_home", "_projects", "_work", "_contact"];
const links = {
  "github" : "https:///github.com/liuisaac", 
  "linkedin" : "https://www.linkedin.com/in/liuisaac05/", 
  "email" : "mailto:liuisaac05@gmail.com"
}

const formatTabName = (tab) => tab.replace("_", "");

const Navbar = () => {
  const location = usePathname();
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const newSegment = location.split("/")[1] || "";
    setActive(newSegment || "home");
  }, [location]);

  const handleNavigation = (path) => {
    if (path === "home") {
      router.push("/");
    } else {
      router.push(links[path]);
    }
    setActive(path);
    setMenu(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full flex flex-row items-start justify-center z-50 bg-gradient-to-b from-black to-transparent  pointer-events-auto pb-12">
        <PageContainer className="flex justify-between items-center h-20">
          {/* Desktop */}
          <div className="w-full hidden lg:flex flex-row items-center justify-between gap-12">
            <HomeIcon route={active} handleClick={handleNavigation} />
            <ul className="flex flex-row gap-12 text-md">
              {tabs.map((tab) => {
                const path = formatTabName(tab);
                const isActive = path === active;
                return (
                  <li
                    key={tab}
                    className={`cursor-pointer ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                    } transition duration-500 ease-in-out`}
                  >
                    <Link href={links[tab]}>
                      {tab}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Mobile */}
          <div className="flex lg:hidden justify-between items-center w-full">
            <HomeIcon route={active} handleClick={handleNavigation} />
            <div
              onClick={() => setMenu((prev) => !prev)}
              className="cursor-pointer"
            >
              <Img src="/icons/hamburger.svg" alt="Menu" className="w-8 h-8" />
            </div>
          </div>
        </PageContainer>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, type: "tween" }}
            className="fixed top-0 right-0 w-2/3 h-full bg-black bg-opacity-70 backdrop-blur-lg z-40 shadow-lg"
          >
            <PageContainer className="flex flex-col mt-24 gap-12 text-3xl">
              <HomeIcon route={active} handleClick={handleNavigation} />
              <ul className="flex flex-col gap-8">
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
                      onClick={() => handleNavigation(path)}
                    >
                      {path}
                    </li>
                  );
                })}
              </ul>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
