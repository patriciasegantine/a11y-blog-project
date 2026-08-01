"use client";

import {motion} from "motion/react";
import CardPost from "@/components/ui/CardPost";
import {Post} from "@/types/post";

export default function AnimatedPostsList({posts}: { posts: Post[] }) {
    return (
        <motion.div
            initial={{opacity: 0, y: 8}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.25, ease: "easeOut"}}
        >
            {posts.map((post) => <CardPost key={post.id} post={post}/>)}
        </motion.div>
    );
}
