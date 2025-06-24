import type { ReactNode } from "react";
import s from "./Card.module.scss"
import cn from "classnames";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({children, className}:CardProps) => {
    return (
        <div className={cn(s.cardContainer, className)}>
            {children}
        </div>
    )
}

export default Card;