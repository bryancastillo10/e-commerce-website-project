import { ReactNode } from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";

interface ButtonProps {
  type: string;
  children: ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <motion.button
      whileTap={buttonAnimation.whileTap}
      whileHover={buttonAnimation.whileHover}
      transition={buttonAnimation.transition}
      className={`rounded-2xl font-bold px-4 py-2 tracking-wide w-[150px]
       ${type === "call" ? "bg-accent text-white ":""}`}
    >
      {children}
    </motion.button>
  )
}

export default Button;
