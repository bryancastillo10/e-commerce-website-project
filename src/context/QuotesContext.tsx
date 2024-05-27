import { useState, useEffect, createContext } from "react";
import { ContextProviderType } from "./contextTypes";
import { QuoteContextType, ContentAuthorType } from "./contextTypes";

export const QuoteContext = createContext({} as QuoteContextType);


export const QuoteGenContextProvider = ({ children }: ContextProviderType) => {
  const [contentAuthor, setContentAuthor] = useState([]);
  const [tagLine, setTagLine] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [allowFetch, setAllowFetch] = useState(true);

  useEffect(() => {
    // API Fetching and Array Manipulation
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        const data = await response.json();
        const dataQuotes = data.map(({ content, author }: ContentAuthorType) => ({
          content,
          author,
        }));
        setContentAuthor(dataQuotes);
        const dataTag = data.map(({ tags }: { tags: string }) => tags);
        setTagLine(dataTag);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    // Trigger when button is pressed
    if (allowFetch) {
      fetchData();
      setIsLoading(false);
    }
  }, [allowFetch]);

  const handleFetch = () => {
    setAllowFetch(!allowFetch);
  };

  const contextValues = { isLoading, contentAuthor, tagLine, allowFetch, handleFetch };
  return (
    <QuoteContext.Provider value={contextValues}>
      {children}
    </QuoteContext.Provider>
  );
};