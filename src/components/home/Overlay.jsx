import React from "react";
import Img from "../ui/Img";
import Button from "../ui/Button";
import WelcomeMessage from "./WelcomeMessage";
import InternalLink from "../ui/InternalLink";
import Link from "next/link";

const Overlay = () => {
    return (
        <div className="2xl:w-[40em] xl:w-[35em] lg:w-[32em] md:w-[30em] w-full md:px-0 px-10 col items-start justify-center z-30 sm:h-screen sm:pt-0">
            <div className="row-center">
                <Img src="/pfp.svg" alt="pfp" className=" 2xl:w-12 xl:w-16 md:w-16 w-14 aspect-square z-10" />
                <div className="col justify-center items-start ml-4">
                    <h1 className="2xl:text-2xl xl:text-3xl md:text-3xl text-3xl header z-20">isaac_liu</h1>
                    <span className="2xl:text-xl xl:text-xl md:text-xl hidden sm:flex text-slate">
                        Vancouver, BC • Software Engineer
                    </span>
                    <span className="text-sm sm:hidden text-slate flex flex-col">
                        <p>Software Engineer</p>
                        <p>Vancouver, BC</p>
                    </span>
                </div>
            </div>

            <div className="col 2xl:text-lg xl:text-md lg:text-md 2xl:gap-4 gap-2 md:my-8 my-8 w-full">
                <WelcomeMessage />

                {/* <p>i&apos;ll save you some trouble and just cut to the chase:</p> */}
                {/* <p>here&apos;s the long and short of it:</p> */}
                <p>i like to tinker and build stuff sometimes</p>
                <div className="flex flex-col text-slate">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <span className="font-semibold uppercase tracking-[0.25em] text-md text-slate-400">
                            about me
                        </span>
                    </div>
                    <ul className="text-white">
                        <li>• 3rd year computer science student 🆘</li>
                        <li>• Developer @ <Link href="/projects/biztech">UBC Biztech 🤖</Link></li>
                        <li>• Engineering and Event Control @ <Link href="/projects/mecha-mayhem">Mecha Mayhem 🚀</Link></li>
                        {/* <li>• Building ChalkMD, an open-sourced Obsidian port in Go 📝</li> */}
                    </ul>
                </div>

                <div className="flex flex-col text-slate">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <span className="font-semibold uppercase tracking-[0.25em] text-md text-slate-400">
                            work
                        </span>
                    </div>

                    <div className="flex flex-col divide-y divide-slate/50">
                        <div className="flex flex-row items-center justify-between pb-2 text-white">
                            <span>Forward Deployed Software Engineer Intern @ Palantir</span>
                            <span className="hidden sm:flex text-sm text-slate/70">Summer 2026</span>
                        </div>
                        <div className="flex flex-row items-center justify-between py-2 text-white">
                            <span>Software Engineer Intern @ SAP</span>
                            <span className="hidden sm:flex text-sm text-slate/70">Jan 2025 – Aug 2025</span>
                        </div>
                        <div className="flex flex-row items-center justify-between py-2 text-white">
                            <span>Software Engineer Intern @ CBX Partners</span>
                            <span className="hidden sm:flex text-sm text-slate/70">Oct 2023 – Apr 2024</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Button
                icon="/icons/connect.svg"
                primary="#172147"
                label="connect_with_me"
                textStyles="text-lg tracking-wide"
                href="/contact"
            />

            <span className="row mt-8 2xl:text-lg xl:text-md">
                or, check out some of my
                <InternalLink href="projects">
                    <div className="text-[#4493F8] row-center ml-2 cursor-pointer">
                        <p>projects</p>
                        <Img
                            src="/icons/external-link.svg"
                            className="w-4 h-4 ml-1"
                        />
                    </div>
                </InternalLink>
            </span> */}
        </div>
    );
};

export default Overlay;
