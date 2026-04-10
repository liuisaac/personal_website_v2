import React, { useMemo, useState } from "react";
import Image from "next/image";

const isVideoSrc = (src) => /\.(webm|mp4|mov|m4v)$/i.test(src ?? "");

const normalizeMedia = (src) => {
    const sourceList = Array.isArray(src) ? src : [src];

    return sourceList
        .filter(Boolean)
        .map((item) =>
            typeof item === "string"
                ? { alt: "", src: item, type: isVideoSrc(item) ? "video" : "image" }
                : {
                      alt: item.alt ?? "",
                      src: item.src,
                      type: item.type ?? (isVideoSrc(item.src) ? "video" : "image"),
                  }
        )
        .filter((item) => Boolean(item.src));
};

const GridItem = ({ header, href, onSelect, src, subheader, tech_stack }) => {
    const media = useMemo(() => normalizeMedia(src), [src]);
    const [idx, setIdx] = useState(0);

    if (media.length === 0) return null;
    const active = media[Math.min(idx, media.length - 1)];
    const hasMultipleMedia = media.length > 1;

    const handlePrev = (e) => {
        e.stopPropagation();
        setIdx((i) => (i - 1 + media.length) % media.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setIdx((i) => (i + 1) % media.length);
    };

    return (
        <div
            className="w-full aspect-[calc(5/5)] rounded-sm overflow-hidden cursor-pointer"
            onClick={() => onSelect(href)}
        >
            <div className="relative w-full h-2/3 bg-black/20">
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
                        alt={active.alt || header}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                        priority={false}
                    />
                )}

                {hasMultipleMedia && (
                    <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2">
                        <button
                            type="button"
                            className="px-2 py-1 text-xs bg-black/45 hover:bg-black/60 transition-colors"
                            onClick={handlePrev}
                        >
                            Prev
                        </button>
                        <div className="text-[11px] text-white/90 bg-black/45 px-2 py-1">
                            {idx + 1} / {media.length}
                        </div>
                        <button
                            type="button"
                            className="px-2 py-1 text-xs bg-black/45 hover:bg-black/60 transition-colors"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <div className="col">
                <span className="font-bold text-lg leading-tight tracking-wider mt-2">
                    {header}
                </span>
                {/* {subheader && <span className="mt-2 text-slate xl:text-sm">{subheader}</span>} */}
                <p className="text-[#ACACAC]">{tech_stack}</p>
            </div>
        </div>
    );
};

const Grid = ({ data, gridClassName = "md:mt-56 mt-12 mb-12", onSelect }) => {
    return (
        <div className="w-full col-center">
            <div
                className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-4 ${gridClassName}`}
            >
                {data.map((item, index) => {
                    return (
                        <GridItem
                            key={index}
                            src={item.src}
                            href={item.href}
                            header={item.header}
                            subheader={item.subheader}
                            tech_stack={item.tech_stack}
                            onSelect={onSelect}
                        />
                    );
                }, [])}
            </div>
        </div>
    );
};

export default Grid;
