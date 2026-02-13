export enum NavigationPath {
    HOME = "/",
    POSTS = "/posts",
    ABOUT = "/about",
    CONTACT = "/contact",
}

export enum NavigationLabel {
    HOME = "Home",
    POSTS = "Posts",
    ABOUT = "About",
    CONTACT = "Contact",
}

export interface NavLink {
    href: NavigationPath;
    label: NavigationLabel;
}

