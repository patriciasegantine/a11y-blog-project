import CardPost from "@/components/ui/CardPost";
import {Post} from "@/types/post";

export default function AnimatedPostsList({posts}: { posts: Post[] }) {
    return (
        <div className="reveal">
            {posts.map((post) => <CardPost key={post.id} post={post}/>)}
        </div>
    );
}
