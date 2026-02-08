export enum NavigationPath {
    HOME = "/",
    ARTICLES = "/articles",
    ABOUT = "/about",
    CONTACT = "/contact",
}

export enum NavigationLabel {
    HOME = "Home",
    ARTICLES = "Articles",
    ABOUT = "About",
    CONTACT = "Contact",
}

export interface NavLink {
    href: NavigationPath;
    label: NavigationLabel;
}

