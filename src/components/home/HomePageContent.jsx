"use client";

import Overlay from "@/components/home/Overlay";
import Grid from "@/components/ui/Grid";
import PageContainer from "@/components/ui/page/PageContainer";
import data from "@/constants/projects_grid";
import React from "react";
import { useRouter } from "next/navigation";

const HomePageContent = () => {
    const router = useRouter();

    const openArticle = (projectId) => {
        if (!projectId) return;
        router.push(`/projects/${encodeURIComponent(projectId)}`);
    };

    return (
        <>
            <div className="flex w-screen flex-col">
                <section className="flex min-h-screen w-screen shrink-0 items-center justify-center">
                    <Overlay />
                </section>
                <section className="flex w-screen justify-center pb-24 -mt-20">
                    <PageContainer>
                        <Grid
                            data={data}
                            gridClassName="mt-6 mb-12 md:mt-12"
                            onSelect={openArticle}
                        />
                    </PageContainer>
                </section>
            </div>
        </>
    );
};

export default HomePageContent;
