/* eslint-disable react/no-unknown-property */
"use client";

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import ProjectSection from "../projects/ProjectSection";
import Callout from "./Callout";
import Carousel from "./Carousel";
import Tabs from "./Tabs";
import StatGrid from "./StatGrid";
import RepoLink from "./RepoLink";

const H1 = (props) => (
    <h1
        className="mt-8 mb-4 text-3xl font-extrabold tracking-wide"
        {...props}
    />
);

const H2 = (props) => (
    <h2
        className="mt-10 mb-3 text-2xl font-bold tracking-wide"
        {...props}
    />
);

const H3 = (props) => (
    <h3
        className="mt-8 mb-2 text-xl font-semibold tracking-wide"
        {...props}
    />
);

const P = ({ className = "", ...props }) => (
    <p className={`my-4 ${className}`} {...props} />
);

const Ul = ({ className = "", ...props }) => (
    <ul
        className={`list-disc pl-6 my-4 space-y-2 ${className}`}
        {...props}
    />
);

const Ol = ({ className = "", ...props }) => (
    <ol
        className={`list-decimal pl-6 my-4 space-y-2 ${className}`}
        {...props}
    />
);

const Li = ({ className = "", ...props }) => (
    <li className={`marker:text-slate-400 ${className}`} {...props} />
);

const components = {
    Callout,
    Carousel,
    h1: H1,
    h2: H2,
    h3: H3,
    img: (props) => <Image alt={props.alt || ""} width={0} height={0} sizes="100vw" className="w-full h-auto" {...props} />,
    li: Li,
    ol: Ol,
    p: P,
    ProjectSection,
    RepoLink,
    StatGrid,
    Tabs,
    ul: Ul,
};

const MdxRenderer = ({ children }) => {
    return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MdxRenderer;

