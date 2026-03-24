"use client";

import React from "react";

const variantStyles = {
    danger: "border-rose-400/30 bg-rose-500/10 text-rose-50",
    info: "border-sky-400/30 bg-sky-500/10 text-sky-50",
    success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-50",
    warn: "border-amber-400/30 bg-amber-500/10 text-amber-50",
};

const Callout = ({ children, title, type = "info" }) => {
    const styles = variantStyles[type] ?? variantStyles.info;
    return (
        <div className={`my-6 rounded-xl border p-5 ${styles}`}>
            {title && <div className="text-lg font-semibold mb-2">{title}</div>}
            <div className="leading-relaxed">{children}</div>
        </div>
    );
};

export default Callout;

