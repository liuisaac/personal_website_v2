"use client";

import FadeWrapper from "@/components/ui/FadeWrapper";
import { getArticleById } from "@/content/articles";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ProjectModal from "./ProjectModal";

function listUrl(routeBase, id) {
    if (routeBase === "/") {
        return id ? `/?id=${encodeURIComponent(id)}` : "/";
    }
    return id ? `/projects?id=${encodeURIComponent(id)}` : "/projects";
}

/**
 * @param {"/" | "/projects"} routeBase URL prefix for ?id= sync (home vs projects page)
 */
export function useProjectModal(routeBase = "/projects") {
    const router = useRouter();

    const articleFromUrl = useCallback(() => {
        if (typeof window === "undefined") return null;
        const urlId = new URLSearchParams(window.location.search).get("id");
        return urlId ? (getArticleById(urlId) ?? null) : null;
    }, []);

    const [activeArticle, setActiveArticle] = useState(null);

    useEffect(() => {
        const article = articleFromUrl();
        if (article) {
            setActiveArticle(article);
            document.body.style.overflow = "hidden";
        }
    }, [articleFromUrl]);

    const openArticle = useCallback(
        (id) => {
            const article = getArticleById(id);
            if (!article) return;
            setActiveArticle(article);
            document.body.style.overflow = "hidden";
            router.replace(listUrl(routeBase, id), { scroll: false });
        },
        [router, routeBase]
    );

    const closeModal = useCallback(() => {
        setActiveArticle(null);
        document.body.style.overflow = "";
        router.replace(listUrl(routeBase, null), { scroll: false });
    }, [router, routeBase]);

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

    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const modal =
        activeArticle && typeof document !== "undefined"
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

    return { closeModal, modal, openArticle };
}
