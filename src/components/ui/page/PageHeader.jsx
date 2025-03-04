import React from "react";

const PageHeader = ({ children, description, title }) => {
    return (
        <div className="top-0 z-20 w-[40em] mt-36">
            <h1 className="header text-9xl mb-5">{title}</h1>
            <span className="text-3xl text-slate w-full mt-10">
                {description}
            </span>
            {children}
        </div>
    );
};

export default PageHeader;
