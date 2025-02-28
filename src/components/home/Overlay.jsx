import React from "react";
import Img from "../ui/Img";
import Button from "../ui/Button";
import WelcomeMessage from "./WelcomeMessage";

const Overlay = () => {
    return (
        <div className="w-[40em] col items-start justify-center z-30">
            <div className="row-center">
                <Img src="/pfp.svg" alt="pfp" className=" w-24 h-24 z-10" />
                <div className="col justify-center items-start ml-4">
                    <h1 className="text-5xl header z-20">
                        isaac_liu
                    </h1>
                    <span className="text-3xl text-slate">
                        /aIzək/ • he/him
                    </span>
                </div>
            </div>

            <div className="col text-2xl gap-8 my-8">
                <WelcomeMessage />

                <p>i’ll save you some trouble and just cut to the chase:</p>

                <ul>
                    <li>• 2nd year computer science student 🆘</li>
                    <li>• Junior Developer @ UBC Biztech 🤖</li>
                    <li>• SDE @ Mecha Mayhem 🚀</li>
                    <li>• Undergrad TA @ UBC 📖</li>
                    <li>• Actively looking for opportunities in SWE 💯</li>
                </ul>

                <p>
                    at my core, im a tinkerer — driven by curiosity, a sense of
                    ownership, and taking initiative. it's just fun to ideate solutions to my own problems, build them out, and push the limits my comfort zone
                    in the process.
                </p>
            </div>

            <Button
                icon="/icons/connect.svg"
                primary="#172147"
                label="connect_with_me"
                textStyles="text-lg tracking-wide"
                href="/contact"
            />

            <span className="row mt-8 text-xl">
                or, check out some of my 
                <div className="text-[#4493F8] row-center ml-2 cursor-pointer">
                    <p>projects</p>
                    <Img src="/icons/external-link.svg" className="w-4 h-4 ml-1" />
                </div>
            </span>
        </div>
    );
};

export default Overlay;
