import {usePathname} from "next/navigation";
import {NavigationLabel, NavigationPath, NavLink} from "@/types/navigation";

export function useNavigation() {
    const pathname = usePathname();

    const navLinks: NavLink[] = [
        {href: NavigationPath.HOME, label: NavigationLabel.HOME},
        {href: NavigationPath.POSTS, label: NavigationLabel.POSTS},
        {href: NavigationPath.ABOUT, label: NavigationLabel.ABOUT},
        {href: NavigationPath.CONTACT, label: NavigationLabel.CONTACT},
    ];

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return {navLinks, isActive, pathname};
}

