import {NextResponse} from "next/server";
import {db} from "@/app/data/postsDatabase";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_request: Request, context: RouteContext) {
    try {
        const {id} = await context.params;
        const post = db.getPostById(id);

        if (!post) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Post not found",
                },
                {status: 404}
            );
        }

        return NextResponse.json({
            success: true,
            data: post,
        });
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch post",
            },
            {status: 500}
        );
    }
}

