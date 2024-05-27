import { AddedCartItemsProps } from "src/context/contextTypes";
import { SquareX } from "lucide-react";
import storeItems from "src/constants/shop.json";
import { formatCurrency } from "src/utilities";

const AddedCartItems = ({ id, quantity, removeCart }: AddedCartItemsProps) => {
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null;

    return (
        <div className="flex justify-between lg:justify-evenly items-center gap-2">
            <div className="p-2">
                <div className="cart-subdetails section-subtitle">
                    <div className="cart-name flex items-center gap-2">
                        <h1>{item.name}</h1>
                        <p className="text-[1rem]">{formatCurrency(item.price)}
                            {quantity > 1 && (
                                <span className="text-xs"> x{quantity}</span>
                            )}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                    {formatCurrency(item.price * quantity)}
                    <div onClick={() => removeCart(item.id)}
                        className="text-danger p-1 hover:text-accent duration-100">
                        <SquareX />
                    </div>
                </div>
            </div>
            <div className="my-1 max-w-[200px]">
                <img className="w-[200px] h-[150px] object-contain"
                    src={item.imgPath} alt="cart-items"
                />
            </div>
        </div>
    )
}

export default AddedCartItems;
