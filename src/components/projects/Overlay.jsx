"use client";

import Button from "../ui/Button";
import Grid from "../ui/Grid";
import Img from "../ui/Img";
import PageContainer from "../ui/page/PageContainer";
import PageHeader from "../ui/page/PageHeader";
import data from "../../constants/projects_grid";
import { useProjectModal } from "./useProjectModal";
import LaptopScene from "./three/LaptopScene";

const Overlay = () => {
    const { modal, openArticle } = useProjectModal("/projects");

    return (
        <>
            {modal}

            <div className="top-0 relative dim-screen col-center">
                <PageContainer>
                    <div className="w-full col items-start justify-start">
                        <div className="md:flex hidden">
                            <LaptopScene />
                        </div>
                        <PageHeader
                            title={"_projects"}
                            description={
                                "an aggregation of my just-for-fun stuff, from hackathons to fully deployed apps"
                            }
                        ></PageHeader>
                        <div className="lg:text-3xl text-2xl text-white w-full col mt-36 gap-2 md:!flex !hidden">
                            <div className="row">
                                <span>featured_projects</span>
                                <div className="absolute ml-72 -mt-24 rotate-12">
                                    <Img
                                        src={"/icons/excaliarrow.svg"}
                                        className={
                                            "xl:w-56 w-36 xl:mt-0 mt-12 aspect-square xl:ml-2"
                                        }
                                    />
                                </div>
                            </div>

                            <span className="lg:text-5xl text-4xl font-bold">
                                Mecha Mayhem App
                            </span>
                            <p className="text-slate lg:text-2xl text-xl mb-6">
                                8.2k visitors / y
                            </p>
                            {/* <MarkdownRenderer content={markdownContent} /> */}
                            <div onClick={() => openArticle("mecha-mayhem")}>
                                <Button
                                    icon={"/icons/external-link.svg"}
                                    primary={"#FF4D4D"}
                                    label={"view_project"}
                                    textStyles={"text-lg tracking-wide"}
                                    href={""}
                                />
                            </div>
                        </div>
                    </div>
                    <Grid
                        data={data}
                        gridClassName="md:mt-56 mt-12 mb-12"
                        onSelect={openArticle}
                    />
                </PageContainer>
            </div>
        </>
    );
};

export default Overlay;
