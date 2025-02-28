import React from "react";

const Img = ({ src, className, alt, color }) => {
    return (
        <figure
            className={`relative ${className} transition-colors duration-300 ease-in-out`}
            style={{
                backgroundColor: color,
                transition: "background-color 0.3s ease-in-out",
                WebkitMaskImage: `url(${src})`,
                maskImage: `url(${src})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
            }}
        />
    );
};

export default Img;
