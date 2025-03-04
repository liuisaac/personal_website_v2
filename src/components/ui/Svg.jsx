import React from "react";

const Img = ({ alt, className, color, src }) => {
    return (
        <figure
            className={`relative ${className} transition-colors duration-300 ease-in-out`}
            style={{
                backgroundColor: color,
                maskImage: `url(${src})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                transition: "background-color 0.3s ease-in-out",
                WebkitMaskImage: `url(${src})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
            }}
        />
    );
};

export default Img;
