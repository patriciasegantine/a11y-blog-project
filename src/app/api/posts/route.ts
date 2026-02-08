import {NextResponse} from "next/server";
import {db} from "@/app/data/postsDatabase";

export async function GET() {
    try {
        const posts = db.getAllPosts()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map(({content, ...post}) => post);

        return NextResponse.json({
            success: true,
            data: posts,
            total: posts.length,
        });
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch posts",
            },
            {status: 500}
        );
    }
}

