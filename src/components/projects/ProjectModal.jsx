import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Img from "../ui/Img";
import Image from "next/image";
import ProjectSection from "./ProjectSection";

const ProjectModal = ({ content }) => {
    const router = useRouter();
    useEffect(() => {
        console.log(content);
    }, []);
    return (
        <div className="2xl:w-[70em] xl:w-[50em] lg:w-[40em] w-[80vw] bg-charcoal my-16 rounded-xl col p-16">
            <div
                className="row gap-2 text-slate cursor-pointer"
                onClick={() => router.replace(`projects`, { scroll: false })}
            >
                <ArrowLeftIcon className="" />
                <span className="text-xl text-center">back_to_projects</span>
            </div>
            <header className="font-semibold text-9xl mt-2">
                {content.title}
            </header>
            <div className="row font-sans my-4 text-slate">
                <Img src="/timeline/cal.svg" className="w-6 h-6 mr-2" />
                <span className="mr-5">{content.date}</span>
                <Img src="/timeline/stack.svg" className="w-6 h-6 mr-2" />
                <span>{content.tech_stack}</span>
            </div>
            <div className="my-2">
                <Image
                    src={content.thumbnail}
                    alt="Thumbnail"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>

            {content.body.map((section, index) => (
                <div key={index}>
                    <ProjectSection subtitle={section.subtitle} body={section.body} src={section.src} href={section.href} />
                </div>
            ))}
        </div>
    );
};

export default ProjectModal;
