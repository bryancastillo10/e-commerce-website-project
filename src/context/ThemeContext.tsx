import { createContext, useState } from "react";
import { ContextProviderType, ThemeContextType } from "./contextTypes";
import ThemeToggle from "../components/ThemeToggle";

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({ children }: ContextProviderType) => {
    const [theme, setTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    const contextValues = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={contextValues}>
            <ThemeToggle theme={theme} handleToggle={toggleTheme} />
            <div className={`overflow-x-hidden transition-[background-color] duration-[0.25s] ease-[ease-in-out]
            ${theme ? "bg-[#25171A] text-[#69ddff]" : "bg-[#69ddff] text-[#25171A]"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
