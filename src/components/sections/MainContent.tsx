import {feature} from "@/data/posts";
import FeaturedPost from "@/components/ui/FeaturedPost";

export default function MainContent() {

    return (
        <div className="space-y-8">
            <FeaturedPost feature={feature}/>
        </div>
    );
}
