import { ShopCardsProps } from "src/constants/shoptype";
import { formatCurrency } from "src/utilities";
import {QuantityButton} from "./subcomponent";
import { useShoppingContext } from "src/context/UseContexts";

const ShopCards = ({ id, name, price, imgPath }: ShopCardsProps) => {
    // Contexts
    const { getItemQuantity, increaseCart,
        decreaseCart, removeCart } = useShoppingContext();
    const quantity = getItemQuantity(id);

    return (
        <div className="shadow-md lg:max-w-[85%] rounded-2xl min-h-[280px] lg:min-h-[300px] xl:min-h-[320px] 2xl:min-h-[350px] blue-glass">
            <img className="rounded-tl-2xl rounded-tr-2xl border-slate-400 border-2"
                src={imgPath} alt={imgPath} />
            <div className="flex md:flex-col gap-12 md:gap-6 lg:gap-0 mt-2 md:mt-0 justify-evenly md:justify-center items-center w-[200px] md:max-w-full  mx-auto">
                <div className="flex flex-col justify-center items-center text-secondary mt-2">
                    <h1 className="font-bold text-lg">{name}</h1>
                    <p className="font-light text-sm 2xl:text-base">{formatCurrency(price)}</p>
                </div>
                {quantity === 0 ?
                    <div className="flex-grow min-w-fit">
                        <button onClick={() => increaseCart(id)}
                            className="bg-accent px-4 py-2 rounded-2xl text-sm text-secondary  lg:mt-8">Add to Cart
                        </button>
                    </div> :
                    <QuantityButton
                        id={id}
                        quantity={quantity}
                        addCartEvent={increaseCart}
                        subCartEvent={decreaseCart}
                        removeCart={removeCart}
                    />
                }
            </div>
        </div>
    )
}

export default ShopCards;
