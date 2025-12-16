import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

const ProjectSection = ({ body, href, src, subtitle }) => {
    return (
        <div className=" my-8">
            {subtitle && (
                <header className="text-4xl font-semibold">{subtitle}</header>
            )}
            {body && (
                <div className="text-xl text-slate mt-4">
                    <ReactMarkdown>
                        {body.replace(/\n{2,}/g, "\n\n")}
                    </ReactMarkdown>
                </div>
            )}
            {src && (
                <div className="my-2">
                    <Image
                        src={src}
                        alt="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
            )}
            {href && <h2>{href}</h2>}
        </div>
    );
};

export default ProjectSection;
