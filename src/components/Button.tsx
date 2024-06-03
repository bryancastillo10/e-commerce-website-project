import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { useQuotesContext } from "src/context/UseContexts";

interface ButtonProps {
  type: "call" | "services" | "quotes";
  link: string | (() => void);
  children: ReactNode;
}

const Button = ({ link, type, children }: ButtonProps) => {
  const { handleFetch } = useQuotesContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "call" || type === "services") {
      navigate(link as string);
    } else if (type === "quotes") {
      link as () => void;
      handleFetch();
    }
  };

  return (
    <motion.button
      whileTap={buttonAnimation.whileTap}
      whileHover={buttonAnimation.whileHover}
      transition={buttonAnimation.transition}
      onClick={handleClick}
      className={`rounded-2xl font-bold px-4 py-2 tracking-wide w-[150px] 
       ${
         type === "call"
           ? "bg-accent text-secondary"
           : type === "services"
           ? "bg-neutral-green text-secondary w-[200px]"
           : type === "quotes"
           ? "bg-neutral-green text-secondary w-[50px]"
           : ""
       }`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
