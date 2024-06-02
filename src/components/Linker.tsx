import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

interface LinkerProps{
    to: string;
    children: ReactNode;
}

const Linker = ({ to,children }: LinkerProps) => {
    const active = "p-1 rounded-xl duration-600 ease-out hover:text-accent hover:bg-sky-200";
    
    return (
    <NavLink to={to} className={({isActive})=> ` ${isActive} ? ${active} : ""`}>
          {children}
    </NavLink>
  )
}

export default Linker;
