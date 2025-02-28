"use client";

import Overlay from "@/components/projects/Overlay";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Overlay />
        </motion.div>
    );
};

export default page;
