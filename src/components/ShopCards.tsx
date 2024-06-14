import { ShopCardsProps } from "src/constants/shoptype";
import { formatCurrency } from "src/utilities";
import { QuantityButton } from "./subcomponent";
import { useShoppingContext } from "src/context/UseContexts";

const ShopCards = ({ id, name, price, imgPath }: ShopCardsProps) => {
  // Contexts
  const { getItemQuantity, increaseCart, decreaseCart, removeCart } =
    useShoppingContext();
  const quantity = getItemQuantity(id);

  return (
    <div className="shadow-md lg:max-w-[85%] sm:max-w-[450px] sm:h-[400px] h-[330px] lg:h-[290px] xl:h-[344px] 2xl:h-[400px] mx-auto rounded-2xl blue-glass">
      <img
        className="rounded-tl-2xl rounded-tr-2xl border-slate-400 border-2"
        src={imgPath}
        alt={imgPath}
      />
      <div
        className="flex md:flex-col gap-12 md:gap-6 lg:gap-0 mt-2 md:mt-0 justify-evenly md:justify-center 
        items-center w-[200px] md:max-w-full  mx-auto"
      >
        <div className="flex flex-col justify-center items-center text-secondary mt-2">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="font-light text-sm 2xl:text-base">
            {formatCurrency(price)}
          </p>
        </div>
        {quantity === 0 ? (
          <div className="flex-grow min-w-fit">
            <button
              onClick={() => increaseCart(id)}
              className="bg-accent px-4 py-2 rounded-2xl text-sm text-secondary duration-700 ease-in-out md:mt-4 lg:mt-8 hover:bg-primary"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <QuantityButton
            id={id}
            quantity={quantity}
            addCartEvent={increaseCart}
            subCartEvent={decreaseCart}
            removeCart={removeCart}
          />
        )}
      </div>
    </div>
  );
};

export default ShopCards;
