import {NextResponse} from "next/server";
import {posts} from "@/app/api/data/posts";

export async function GET() {
    try {
        return NextResponse.json({
            success: true,
            data: posts,
            total: posts.length,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch posts",
            },
            {status: 500}
        );
    }
}

