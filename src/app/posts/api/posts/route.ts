import {NextResponse} from "next/server";
import {db} from "@/lib/data/postsDatabase";

/**
 * API Route maintained for future client-side features
 * (e.g., dynamic search, filters, pagination)
 */

export const revalidate = 60;

export async function GET() {
    try {
        const posts = db.getAllPosts()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map(({...post}) => post);

        return NextResponse.json(
            {
                success: true,
                data: posts,
                total: posts.length,
            },
            {
                headers: {
                    "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
                },
            }
        );
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                error: err || `Failed to fetch posts`,
            },
            {status: 500}
        );
    }
}

