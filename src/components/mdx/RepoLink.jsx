import React from "react";

const ExternalLinkIcon = (props) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M14 5h5v5m0-5L10 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const RepoLink = ({
    children = "View on GitHub",
    className = "",
    href,
    ...props
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sky-400 underline underline-offset-4 font-semibold hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-sm ${className}`}
            {...props}
        >
            {children}
            <ExternalLinkIcon className="h-4 w-4" />
            <span className="sr-only">(opens in a new tab)</span>
        </a>
    );
};

export default RepoLink;

