"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Img from "../ui/Img";

const ExperienceMarker = () => {
    return (
        <figure className="z-10 w-4 aspect-square border-[4px] border-white bg-black rotate-45" />
    );
};

const TimelineMarker = ({ containerRef, scrollY }) => {
    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setInnerHeight(window.innerHeight);
        }
    }, []);
    
    const y = useSpring(0, {
        damping: 20,
        mass: 0.5,
        stiffness: 100,
    });

    const scale = useSpring(1, {
        damping: 15,
        stiffness: 200,
    });

    const getContainerTop = () => {
        if (!containerRef?.current) return innerHeight - 64;
        return (
            containerRef.current.getBoundingClientRect().top + scrollY
        );
    };

    let targetPosition = scrollY + innerHeight - getContainerTop() - 64;

    useEffect(() => {
        targetPosition = scrollY + innerHeight - getContainerTop() - 64;
        y.set(targetPosition);
    }, [containerRef]);

    y.set(targetPosition);

    const currentY = y.get();
    const diff = Math.abs(targetPosition - currentY);
    scale.set(diff > 50 ? 1.2 : 1);

    return (
        <>
            <motion.figure
                className="absolute w-4 aspect-square border-[3px] border-white bg-[linear-gradient(135deg,_black_50%,_white_50%)] z-10"
                style={{
                    rotate: 45,
                    scale,
                    top: y,
                }}
            />
            <motion.figure
                className="top-0 absolute w-[2px] bg-white col items-center justify-start"
                style={{ height: y }}
            />
        </>
    );
};

const Markers = () => {
    return (
        <>
            <div className="left-0 row items-start justify-center min-h-96">
                <ExperienceMarker />
            </div>
        </>
    );
};

const CompanyIcon = ({ src }) => {
    return (
        <div className="w-56 h-48 overflow-hidden col-center">
            <Img
                src={src}
                alt="Company Logo"
                className="w-48 aspect-video -mt-16"
            />
        </div>
    );
};

const Description = ({ brief, date, description, location, title }) => {
    return (
        <div className="ml-24">
            <header className="font-bold text-4xl">{title}</header>
            <div className="row gap-5 text-slate font-semibold text-xl">
                <span className="row-center gap-1">
                    <Img src="/timeline/pin.svg" className="w-6 h-6" />
                    {location}
                </span>
                <span className="row-center gap-1">
                    <Img src="/timeline/cal.svg" className="w-6 h-6" />
                    {date}
                </span>
            </div>
            <div className="text-xl mt-5 font-sans gap-2 col">
                <p>{brief}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Timeline = ({ data }) => {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="mt-24">
            <div className="absolute">
                {data.map((item, index) => {
                    return (
                        <div className="mb-48 row">
                            <CompanyIcon key={index} src={item.src} />
                            <Description
                                title={item.title}
                                location={item.location}
                                date={item.date}
                                brief={item.brief}
                                description={item.description}
                            />
                        </div>
                    );
                })}
            </div>

            <div
                className="w-5 col items-center justify-start ml-64 relative"
                ref={containerRef}
            >
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Markers
                                src={item.src}
                                title={item.title}
                                location={item.location}
                                date={item.date}
                                brief={item.brief}
                                description={item.description}
                            />
                        </div>
                    );
                }, [])}
                <TimelineMarker scrollY={scrollY} containerRef={containerRef} />
            </div>
        </div>
    );
};

export default Timeline;
