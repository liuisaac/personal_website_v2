"use client";

import Button from "../ui/Button";
import Grid from "../ui/Grid";
import Img from "../ui/Img";
import PageContainer from "../ui/page/PageContainer";
import PageHeader from "../ui/page/PageHeader";
import data from "../../constants/projects_grid";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { getArticleById } from "../../content/articles";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import FadeWrapper from "../ui/FadeWrapper";
import LaptopScene from "./three/LaptopScene";

const Overlay = () => {
    const router = useRouter();

    // Read article from the current URL (safe for SSR)
    const articleFromUrl = useCallback(() => {
        if (typeof window === "undefined") return null;
        const id = new URLSearchParams(window.location.search).get("id");
        return id ? getArticleById(id) ?? null : null;
    }, []);

    // Initialise from URL so direct navigation (/projects?id=X) works immediately
    const [activeArticle, setActiveArticle] = useState(articleFromUrl);

    // Open a project modal: update state + push the id into the URL
    const openArticle = useCallback(
        (id) => {
            const article = getArticleById(id);
            if (!article) return;
            setActiveArticle(article);
            document.body.style.overflow = "hidden";
            router.replace(`/projects?id=${id}`, { scroll: false });
        },
        [router]
    );

    // Close the modal: clear state + strip the id from the URL
    const closeModal = useCallback(() => {
        setActiveArticle(null);
        document.body.style.overflow = "";
        router.replace("/projects", { scroll: false });
    }, [router]);

    // Lock scroll on initial load if we opened with an id
    useEffect(() => {
        if (activeArticle) {
            document.body.style.overflow = "hidden";
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Sync state when the user presses browser back / forward
    useEffect(() => {
        const handlePopState = () => {
            const article = articleFromUrl();
            if (article) {
                setActiveArticle(article);
                document.body.style.overflow = "hidden";
            } else {
                setActiveArticle(null);
                document.body.style.overflow = "";
            }
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [articleFromUrl]);

    // Portal the modal to document.body so it escapes the FadeWrapper's
    // opacity-animation stacking context (opacity < 1 turns the parent into
    // a containing-block for position:fixed children, breaking the overlay).
    const modal = activeArticle
        ? createPortal(
              <motion.div
                  initial={{ backdropFilter: "blur(0px)" }}
                  animate={{ backdropFilter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="top-0 left-0 w-screen h-screen z-[100] col-center"
                  style={{ position: "fixed" }}
                  onClick={closeModal}
              >
                  <div
                      className="max-h-screen"
                      style={{ overflowY: "auto" }}
                      onClick={(e) => e.stopPropagation()}
                  >
                      <FadeWrapper>
                          <ProjectModal
                              content={activeArticle}
                              onNavigate={openArticle}
                              onClose={closeModal}
                          />
                      </FadeWrapper>
                  </div>
              </motion.div>,
              document.body
          )
        : null;

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
                    <Grid data={data} onSelect={openArticle} />
                </PageContainer>
            </div>
        </>
    );
};

export default Overlay;
