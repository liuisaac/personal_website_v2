"use client";

import React from "react";
import Overlay from "@/components/home/Overlay";
import { motion } from "framer-motion";

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
