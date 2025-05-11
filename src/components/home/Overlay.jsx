import React from "react";
import Img from "../ui/Img";
import Button from "../ui/Button";
import WelcomeMessage from "./WelcomeMessage";
import InternalLink from "../ui/InternalLink";

const Overlay = () => {
    return (
        <div className="2xl:w-[40em] xl:w-[35em] lg:w-[30em] md:w-[25em] w-full md:px-0 px-10 col items-start justify-center z-30 h-screen">
            <div className="row-center">
                <Img src="/pfp.svg" alt="pfp" className=" 2xl:w-24 xl:w-16 md:w-16 w-14 aspect-square z-10" />
                <div className="col justify-center items-start ml-4">
                    <h1 className="2xl:text-5xl xl:text-3xl md:text-3xl text-3xl header z-20">isaac_liu</h1>
                    <span className="2xl:text-3xl xl:text-xl md:text-xl text-xl text-slate">
                        /aIzək/ • he/him
                    </span>
                </div>
            </div>

            <div className="col 2xl:text-2xl xl:text-lg lg:text-md 2xl:gap-8 gap-2 md:my-8 my-16">
                <WelcomeMessage />

                <p>i&apos;ll save you some trouble and just cut to the chase:</p>

                <ul>
                    <li>• 2nd year computer science student 🆘</li>
                    <li>• Junior Developer @ UBC Biztech 🤖</li>
                    <li>• SDE @ Mecha Mayhem 🚀</li>
                    <li>• Undergrad TA @ UBC 📖</li>
                    <li>• Actively looking for opportunities in SWE 💯</li>
                </ul>

                <p>
                    at my core, im a tinkerer — driven by curiosity, a sense of
                    ownership, and taking initiative. it&apos;s just fun to ideate
                    solutions to my own problems, build them out, and push the
                    limits my comfort zone in the process.
                </p>
            </div>

            <Button
                icon="/icons/connect.svg"
                primary="#172147"
                label="connect_with_me"
                textStyles="text-lg tracking-wide"
                href="/contact"
            />

            <span className="row mt-8 2xl:text-xl xl:text-lg">
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
            </span>
        </div>
    );
};

export default Overlay;
