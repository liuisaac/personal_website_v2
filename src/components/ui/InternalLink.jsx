"use client"
import { useRouter } from "next/navigation";
import React from "react";

const InternalLink = ({ children, href }) => {
    const router = useRouter();
    const handleNavigation = (path) => {
        router.push(`/${path}`);
    };
    return <div onClick={() => {handleNavigation(href)}}>{children}</div>;
};

export default InternalLink;
