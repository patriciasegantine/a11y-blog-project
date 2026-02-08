import {Category} from "@/types/category";

export function useCategories() {
    const categories = Object.values(Category);

    return {
        categories,
        loading: false,
        error: null
    };
}

