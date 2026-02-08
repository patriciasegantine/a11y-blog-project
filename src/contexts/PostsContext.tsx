"use client";

import React, {createContext, ReactNode, useContext, useEffect} from "react";
import {Post} from "@/types/post";
import {usePostsList} from "@/hooks/usePostsList";

interface PostsContextType {
    posts: Post[];
    loading: boolean;
    error: string | null;
    getRecentPosts: (limit: number) => Post[];
    getFeaturedPost: () => Post | undefined;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

interface PostsProviderProps {
    children: ReactNode;
}

export function PostsProvider({children}: PostsProviderProps) {
    const {posts, loading, error, fetchPosts} = usePostsList();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const getRecentPosts = (limit: number): Post[] => {
        return posts.slice(0, limit);
    };

    const getFeaturedPost = (): Post | undefined => {
        return posts.find((post) => post.isFeatured === true);
    };

    const value: PostsContextType = {
        posts,
        loading,
        error,
        getRecentPosts,
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
