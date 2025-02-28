import Image from "next/image";
import React from "react";

const Img = ({ src, className, alt, objectFit = "contain" }) => {
    return (
        <figure className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                objectFit={objectFit}
                fill
            />
        </figure>
    );
};

export default Img;
