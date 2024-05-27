import { ShopCardsProps } from "src/constants/shoptype";
import { formatCurrency } from "src/utilities";
import { QuantityButton } from "src/components/child";
import { useShoppingContext } from "src/context/UseContexts";

const ShopCards = ({ id, name, price, imgPath }: ShopCardsProps) => {
    // Contexts
    const { getItemQuantity, increaseCart,
        decreaseCart, removeCart } = useShoppingContext();
    const quantity = getItemQuantity(id);

    return (
        <div className="border-white/50 shadow-md border-2 rounded-2xl  py-4 blue-glass">
            <img className="rounded-2xl"
                src={imgPath} alt={imgPath} />
            <div className="flex md:flex-col  justify-center w-[200px] md:max-w-full  mx-auto">
                <div className="flex flex-col justify-center items-center text-white mt-2">
                    <h1 className="font-bold text-lg">{name}</h1>
                    <p className="font-light text-sm">{formatCurrency(price)}</p>
                </div>
                {quantity === 0 ?
                    <div className="max-w-[75%] md mx-auto">
                        <button onClick={() => increaseCart(id)}
                            className="btn-design-2">Add to Cart
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
