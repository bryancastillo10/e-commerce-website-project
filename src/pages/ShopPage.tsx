import { Shop, Sales } from "../ui";
import { pageTransition } from "src/utilities";
import "../styles/shopPage.css";

const ShopPage = () => {
  return (
    <>
      <Shop />
      <Sales />
    </>
  );
};

export default pageTransition(ShopPage);
