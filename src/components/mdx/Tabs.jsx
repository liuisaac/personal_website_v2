"use client";

import React, { useMemo, useState } from "react";

const Tabs = ({ tabs = [] }) => {
    const normalized = useMemo(
        () =>
            (tabs ?? [])
                .filter(Boolean)
                .map((t) => ({
                    content: t.content ?? null,
                    label: t.label ?? "Tab",
                })),
        [tabs]
    );

    const [active, setActive] = useState(0);
    if (normalized.length === 0) return null;

    return (
        <div className="my-8">
            <div className="flex flex-wrap gap-2">
                {normalized.map((t, i) => {
                    const isActive = i === active;
                    return (
                        <button
                            key={`${t.label}-${i}`}
                            type="button"
                            onClick={() => setActive(i)}
                            className={[
                                "px-3 py-2 rounded-lg border transition-colors",
                                isActive
                                    ? "bg-white/15 border-white/20 text-white"
                                    : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10",
                            ].join(" ")}
                        >
                            {t.label}
                        </button>
                    );
                })}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">
                {normalized[active]?.content}
            </div>
        </div>
    );
};

export default Tabs;

