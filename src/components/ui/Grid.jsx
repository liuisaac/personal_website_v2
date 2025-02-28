import React from "react";
import Img from "./Img";

const GridItem = ({ src, href, header, subheader }) => {
    return (
        <div className="w-full aspect-[calc(4/5)] bg-charcoal rounded-md overflow-hidden hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
            <Img src={src} className={"w-full h-2/3"} objectFit="cover" />
            <div className="col ml-5">
                <span className="font-bold text-xl mt-5">{header}</span>
                <span>{subheader}</span>
            </div>
        </div>
    );
};

const Grid = ({ data }) => {
    return (
        <div className="w-full col-center">
            <div className="w-full grid grid-cols-3 gap-4 mt-56 mb-12">
                {data.map((item, index) => {
                    return (
                        <GridItem
                            key={index}
                            src={item.src}
                            href={item.href}
                            header={item.header}
                            subheader={item.subheader}
                        />
                    );
                }, [])}
            </div>
        </div>
    );
};

export default Grid;
