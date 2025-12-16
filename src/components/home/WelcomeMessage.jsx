"use client"

import { useEffect, useState } from "react";

const WelcomeMessage = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const visits = localStorage.getItem("isaacpliu_visitCount");
        const newCount = visits ? parseInt(visits, 10) + 1 : 1;

        localStorage.setItem("isaacpliu_visitCount", newCount);
        setVisitCount(newCount);
    }, []);

    const message = (() => {
        switch (true) {
            case visitCount <= 2:
                return "hey! glad you stopped by :)";
            case visitCount <= 4:
                return "woah, you're back! glad to have you :)";
            case visitCount <= 6:
                return "welcome back! :)";
            case visitCount <= 8:
                return "yo :)";
            default:
                return "yo :)";
        }
    })();

    return <p>{message}</p>;
};

export default WelcomeMessage;
