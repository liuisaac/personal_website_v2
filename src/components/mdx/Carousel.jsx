"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

const isVideoSrc = (src) => /\.(webm|mp4|mov|m4v)$/i.test(src ?? "");

const Carousel = ({ aspect = "16/9", caption = true, images = [] }) => {
    const normalized = useMemo(
        () =>
            (images ?? [])
                .filter(Boolean)
                .map((img) =>
                    typeof img === "string"
                        ? { alt: "", src: img, type: isVideoSrc(img) ? "video" : "image" }
                        : {
                              alt: img.alt ?? "",
                              label: img.label,
                              src: img.src,
                              type: img.type ?? (isVideoSrc(img.src) ? "video" : "image"),
                          }
                )
                .filter((img) => Boolean(img.src)),
        [images]
    );

    const [idx, setIdx] = useState(0);
    if (normalized.length === 0) return null;
    const active = normalized[Math.min(idx, normalized.length - 1)];

    return (
        <div className="my-8">
            <div className="rounded-xl border border-white/10 bg-black/20 overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: aspect }}>
                    {active.type === "video" ? (
                        <video
                            key={active.src}
                            className="absolute inset-0 h-full w-full object-cover"
                            src={active.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />
                    ) : (
                        <Image
                            src={active.src}
                            alt={active.alt}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority={false}
                        />
                    )}
                </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                        onClick={() =>
                            setIdx((i) => (i - 1 + normalized.length) % normalized.length)
                        }
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                        onClick={() => setIdx((i) => (i + 1) % normalized.length)}
                    >
                        Next
                    </button>
                    <div className="text-sm text-slate-300">
                        {idx + 1} / {normalized.length}
                    </div>
                </div>

                {caption && (active.label || active.alt) && (
                    <div className="text-sm text-slate-300 text-right">
                        {active.label || active.alt}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carousel;

