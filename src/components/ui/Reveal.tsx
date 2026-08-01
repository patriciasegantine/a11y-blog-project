"use client";

import {motion} from "motion/react";
import type {ReactNode} from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export default function Reveal({children, delay = 0, className}: RevealProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: "easeOut", delay}}
            className={className}
        >
            {children}
        </motion.div>
    );
}
