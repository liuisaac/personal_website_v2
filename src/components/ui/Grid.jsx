import React from "react";
import Img from "./Img";
import { useRouter } from "next/navigation";
const GridItem = ({ header, href, src, subheader, tech_stack }) => {
    const router = useRouter();
    return (
        <div className="w-full aspect-[calc(4/5)] bg-charcoal rounded-md overflow-hidden hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
            onClick={() => router.replace(`?id=${href}`, { scroll: false })}>
            <Img src={src} className={"w-full h-2/3"} objectFit="cover" />
            <div className="col ml-5">
                <span className="font-bold text-2xl mt-8">{header}</span>
                <span className="mt-2 text-slate">{subheader}</span>
                <p>{tech_stack}</p>
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
                            tech_stack={item.tech_stack}
                        />
                    );
                }, [])}
            </div>
        </div>
    );
};

export default Grid;
