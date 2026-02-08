"use client";

import {useCallback, useState} from "react";
import {Post} from "@/types/post";

type UsePostByIdState = {
    post: Post | null;
    loading: boolean;
    error: string | null;
    fetchPost: (id: string) => Promise<void>;
};

export function usePostById(): UsePostByIdState {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPost = useCallback(async (id: string) => {
        if (!id) {
            setError("Post id is required");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`/api/posts/${id}`);

            if (!response.ok) {
                const message = response.status === 404 ? "Post not found" : "Failed to fetch post";
                throw new Error(message);
            }

            const data = await response.json();
            setPost(data.data ?? null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
            setPost(null);
        } finally {
            setLoading(false);
        }
    }, []);

    return {post, loading, error, fetchPost};
}

