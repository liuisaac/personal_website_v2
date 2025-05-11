"use client";

import Button from "../ui/Button";
import Grid from "../ui/Grid";
import Img from "../ui/Img";
import PageContainer from "../ui/page/PageContainer";
import PageHeader from "../ui/page/PageHeader";
import LaptopScene from "./three/LaptopScene";
import data from "../../constants/projects_grid";
import { useEffect, useState } from "react";

import articles from "../../constants/project_articles";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import FadeWrapper from "../ui/FadeWrapper";

const ButtonWrapper = ({ children, pid, router }) => {
    const handleClick = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("id", pid);
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    return <div onClick={handleClick}>{children}</div>;
};

const Overlay = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        if (!searchParams) return;
        
        try {
            const article = articles.find(
                (article) => article.id === searchParams.get("id")
            );
            if (article) {
                setMarkdownContent(article);
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            if (searchParams.get("id") === null) {
                setMarkdownContent("");
            }
        } catch (error) {
            console.log(error);
        }
    }, [searchParams]);

    return (
        <>
            {markdownContent != "" && (
                <motion.div
                    initial={{ backdropFilter: "blur(0px)" }}
                    animate={{ backdropFilter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="top-0 left-0 dim-screen z-50 col-center"
                    style={{ position: "fixed" }}
                    onClick={() => {
                        router.replace(`projects`, { scroll: false });
                    }}
                >
                    <div
                        style={{ overflowY: "auto" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FadeWrapper>
                            <ProjectModal content={markdownContent} />
                        </FadeWrapper>
                    </div>
                </motion.div>
            )}

            <div className="top-0 relative dim-screen col-center">
                <PageContainer>
                    <div className="w-full col items-start justify-start">
                        <div className="">
                            <LaptopScene />
                        </div>
                        <PageHeader
                            title={"_projects"}
                            description={
                                "an aggregation of my just-for-fun stuff, from hackathons to fully deployed apps"
                            }
                        >
                            <div className="text-3xl text-white w-full col mt-36 gap-2">
                                <div className="row">
                                    <span>featured_projects</span>
                                    <div className="absolute ml-72 -mt-24 rotate-12">
                                        <Img
                                            src={"/icons/excaliarrow.svg"}
                                            className={"w-56 h-56 ml-2"}
                                        />
                                    </div>
                                </div>

                                <span className="text-5xl font-bold">
                                    Mecha Mayhem App
                                </span>
                                <p className="text-slate text-2xl mb-6">
                                    8.2k visitors / y
                                </p>
                                {/* <MarkdownRenderer content={markdownContent} /> */}
                                <ButtonWrapper
                                    router={router}
                                    pid={"mecha-mayhem"}
                                >
                                    <Button
                                        icon={"/icons/external-link.svg"}
                                        primary={"#FF4D4D"}
                                        label={"view_project"}
                                        textStyles={"text-lg tracking-wide"}
                                        href={""}
                                    />
                                </ButtonWrapper>
                            </div>
                        </PageHeader>
                    </div>
                    <Grid data={data} />
                </PageContainer>
            </div>
        </>
    );
};

export default Overlay;
