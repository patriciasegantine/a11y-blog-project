import type {ReactNode} from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export default function Reveal({children, delay = 0, className = ""}: RevealProps) {
    return (
        <div className={`reveal ${className}`} style={{animationDelay: `${delay}s`}}>
            {children}
        </div>
    );
}
