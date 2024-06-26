import { createContext } from "react";
import { ContextProviderType, ThemeContextType } from "./contextTypes";
import ThemeToggle from "../components/ThemeToggle";
import { useLocalStorage } from "src/hooks";

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({ children }: ContextProviderType) => {
  const [theme, setTheme] = useLocalStorage<boolean>("theme-mode", false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const contextValues = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValues}>
      <ThemeToggle theme={theme} handleToggle={toggleTheme} />
      <div
        className={`overflow-x-hidden transition-[background-color] duration-[0.25s] ease-[ease-in-out]
            ${
              theme ? "bg-neutral text-secondary" : "bg-secondary text-primary"
            }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
