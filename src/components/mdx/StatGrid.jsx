"use client";

import React from "react";

const StatGrid = ({ stats = [] }) => {
    if (!stats || stats.length === 0) return null;
    return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            {stats.map((s, idx) => (
                <div
                    key={`${s.label}-${idx}`}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                    <div className="text-sm text-slate-300">{s.label}</div>
                    <div className="text-2xl font-semibold text-white mt-1">
                        {s.value}
                    </div>
                    {s.hint && (
                        <div className="text-sm text-slate-400 mt-2">{s.hint}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StatGrid;

