"use client";

import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Post} from "@/types/post";

interface PostsContextType {
    posts: Post[];
    loading: boolean;
    error: string | null;
    getRecentPosts: (limit: number) => Post[];
    getPostById: (id: string) => Post | undefined;
    getFeaturedPost: () => Post | undefined;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

interface PostsProviderProps {
    children: ReactNode;
}

export function PostsProvider({children}: PostsProviderProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/posts');

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data.data || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const getRecentPosts = (limit: number): Post[] => {
        return posts.slice(0, limit);
    };

    const getPostById = (id: string): Post | undefined => {
        return posts.find((post) => post.id === id);
    };

    const getFeaturedPost = (): Post | undefined => {
        return posts.find((post) => post.isFeatured === true);
    };

    const value: PostsContextType = {
        posts,
        loading,
        error,
        getRecentPosts,
        getPostById,
        getFeaturedPost,
    };

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
}

export function usePosts(): PostsContextType {
    const context = useContext(PostsContext);
    if (context === undefined) {
        throw new Error("usePosts must be used within a PostsProvider");
    }
    return context;
}

