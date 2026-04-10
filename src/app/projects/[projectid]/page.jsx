"use client";

import MdxRenderer from "@/components/mdx/MdxRenderer";
import Navbar from "@/components/ui/nav/Navbar";
import PageContainer from "@/components/ui/page/PageContainer";
import { getArticleById } from "@/content/articles";
import Image from "next/image";
import { use } from "react";
import { useRouter } from "next/navigation";

const ProjectPage = ({ params }) => {
    const router = useRouter();
    const { projectid } = use(params);
    const article = getArticleById(projectid);

    if (!article) {
        return null;
    }

    const role = article.role ?? "Contributor";
    const year = article.year ?? article.date ?? "N/A";

    return (
        <div className="min-h-screen w-screen">
            <Navbar />
            <main className="relative flex w-full justify-center pt-28 pb-20">
                <button
                    type="button"
                    aria-label="Back to home"
                    className="absolute inset-0 z-0 cursor-default"
                    onClick={() => router.push("/")}
                />
                <PageContainer className="relative z-10 space-y-8">
                    <div className="text-slate-300 text-sm uppercase tracking-[0.2em]">
                        projects
                    </div>

                    <section className="space-y-2">
                        <div className="grid grid-cols-3 gap-4 text-sm uppercase tracking-wide text-slate-400">
                            <span>Title</span>
                            <span>Role</span>
                            <span>Year</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-xlfont-semibold">
                            <span>{article.title}</span>
                            <span>{role}</span>
                            <span>{year}</span>
                        </div>
                    </section>

                    {article.thumbnail && (
                        <div className="w-full">
                            <Image
                                src={article.thumbnail}
                                alt={`${article.title} thumbnail`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-auto w-full rounded-sm"
                                priority
                            />
                        </div>
                    )}

                    {article.Component && (
                        <article className="text-lg text-slate leading-relaxed">
                            <MdxRenderer>
                                <article.Component />
                            </MdxRenderer>
                        </article>
                    )}
                </PageContainer>
            </main>
        </div>
    );
};

export default ProjectPage;
