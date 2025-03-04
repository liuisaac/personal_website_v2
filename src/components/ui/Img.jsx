import Image from "next/image";
import React from "react";

const Img = ({ alt, className, objectFit = "contain", src }) => {
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
