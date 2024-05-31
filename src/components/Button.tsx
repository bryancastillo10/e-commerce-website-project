import { ReactNode } from "react";

interface ButtonProps{
    type: string;
    children: ReactNode;
}

const Button = ({type,children}:ButtonProps) => {
  return (
      <button className={`rounded-full ${type ? "bg-primary":"bg-secondary"}`}
      >
          {children}
    </button>
  )
}

export default Button;
