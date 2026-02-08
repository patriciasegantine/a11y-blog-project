export default function Nav() {
    const navLinks = [
        {href: "/", label: "Home"},
        {href: "#", label: "Articles"},
        {href: "/about", label: "About"},
        {href: "#", label: "Contact"},
    ];

    return (
        <nav
            className="hidden md:flex gap-8"
            aria-label="Main navigation">
            {
                navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md px-3 py-2"
                    >
                        {link.label}
                    </a>
                ))}
        </nav>
    );
}
