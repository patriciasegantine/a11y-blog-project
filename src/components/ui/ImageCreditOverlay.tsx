type ImageCreditOverlayProps = {
    author?: string;
    source?: string;
};

export default function ImageCreditOverlay({author, source}: ImageCreditOverlayProps) {
    if (!author) return null;

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <p className="text-xs text-white/70">
                By {author}
                {source && <> from {source}</>}
            </p>
        </div>
    );
}

