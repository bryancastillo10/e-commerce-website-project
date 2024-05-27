import { Variants } from "framer-motion";

type GridSquareVariants = Variants;


interface TransitionValues {
    bounceDamping: number;
    bounceStiffness: number;
}

interface TapHoverValues {
    [key: string]: string | number;
}

interface TapHoverTransitionValues {
    whileTap?: TapHoverValues;
    whileHover?: TapHoverValues;
    transition?: TransitionValues;
}

export const gridSquareVariants: GridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const buttonAnimation: TapHoverTransitionValues = {
    whileTap: { scale: 0.9, rotate: "-8deg" },
    whileHover: { scale: 1.1, backgroundColor: "#117733" },
    transition: { bounceDamping: 10, bounceStiffness: 600 }
}

export const pathVariants: Variants = {
    initial: {
        strokeDasharray: "100%",
        strokeDashoffset: "100%"
    },
    writing: {
        strokeDashoffset: "-250%",
        transition: { duration: 5, ease: "easeIn", repeat: Infinity, repeatType: "loop" }
    }
}