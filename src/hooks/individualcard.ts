import { useState } from "react";

const useCard = () => {
  const [cardIndex, setCardIndex] = useState<number | null>(null);
  const toggleOpenCard = (id: number) => {
    setCardIndex((prevIndex) => (prevIndex === id ? null : id));
  };
  return { cardIndex, toggleOpenCard };
};

export default useCard;
