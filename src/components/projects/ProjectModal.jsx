/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import Img from "../ui/Img";
import Image from "next/image";
import { articles } from "../../content/articles";
import MdxRenderer from "../mdx/MdxRenderer";

const ProjectModal = ({ content, onClose, onNavigate }) => {
    const currentIndex = articles.findIndex((article) => article.id === content.id);
    const hasArticles = articles.length > 0;
    const safeCurrentIndex = currentIndex >= 0 ? currentIndex : 0;
    const previousArticle = hasArticles
        ? articles[
              (safeCurrentIndex - 1 + articles.length) % articles.length
          ]
        : null;
    const nextArticle = hasArticles
        ? articles[(safeCurrentIndex + 1) % articles.length]
        : null;

    const goToArticle = (article) => {
        if (!article) return;
        onNavigate(article.id);
    };

    return (
        <>
            <div className="2xl:w-[60em] xl:w-[50em] lg:w-[40em] w-[80vw] bg-charcoal my-16 rounded-xl col p-16">
                <div
                    className="row gap-2 text-slate cursor-pointer"
                    onClick={onClose}
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

                {content.Component && (
                    <div className="mt-8 text-xl text-slate">
                        <MdxRenderer>
                            <content.Component />
                        </MdxRenderer>
                    </div>
                )}
            </div>

            <div className="fixed right-6 bottom-6 z-[70] hidden md:flex select-none">
                <div className="bg-white text-black rounded-xl p-4 w-[16rem] shadow-xl">
                    <div className="row items-center justify-between mb-4">
                        <span className="text-2xl">next_project</span>
                        <div className="row gap-2">
                            <button
                                type="button"
                                onClick={() => goToArticle(previousArticle)}
                                className="hover:opacity-70 transition-opacity"
                                aria-label="View previous project"
                            >
                                <ArrowLeftIcon size={16} />
                            </button>
                            <button
                                type="button"
                                onClick={() => goToArticle(nextArticle)}
                                className="hover:opacity-70 transition-opacity"
                                aria-label="View next project"
                            >
                                <ArrowRightIcon size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="text-2xl leading-tight">
                        {nextArticle ? nextArticle.title : ""}
                    </div>
                    <div className="text-sm text-gray-400 mt-3">
                        prev: {previousArticle ? previousArticle.title : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
