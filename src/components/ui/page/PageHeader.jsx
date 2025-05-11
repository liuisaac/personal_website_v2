import React from "react";

const PageHeader = ({ children, description, title }) => {
    return (
        <div className="top-0 z-20 md:w-[40em] mt-36">
            <h1 className="header 2xl:text-9xl xl:text-7xl lg:text-6xl md:text-6xl text-6xl mb-5">{title}</h1>
            <span className="xl:text-3xl md:text-2xl text-xl text-slate w-full mt-10">
                {description}
            </span>
            {children}
        </div>
    );
};

export default PageHeader;
