import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";

interface ButtonProps {
  type: string;
  link: string;
  children: ReactNode;
}

const Button = ({ link,type, children }: ButtonProps) => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate(link);
  }
  
  return (
    <motion.button
      whileTap={buttonAnimation.whileTap}
      whileHover={buttonAnimation.whileHover}
      transition={buttonAnimation.transition}
      onClick={handleNavigate}
      className={`rounded-2xl font-bold px-4 py-2 tracking-wide w-[150px]
       ${type === "call" ? "bg-accent text-white ":""}`}
    >
      {children}
    </motion.button>
  )
}

export default Button;
