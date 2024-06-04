import { CartListProps } from "src/context/contextTypes";
import { useShoppingContext } from "src/context/UseContexts";
import AddedCartItems from "./AddedCartItems";
import { motion } from "framer-motion";
import { CircleX } from "lucide-react";
import { formatCurrency } from "src/utilities";
import { buttonAnimation } from "src/utilities/animation";
import { useNavigate } from "react-router-dom";

const CartList = ({ openCart, toggleCart }: CartListProps) => {
    const navigate = useNavigate();
    const { cartItems, removeCart, totalPrice } = useShoppingContext();

    return (
        <div className={`cartlist-container blue-glass p-8 ${openCart ? "scale-1" : "scale-0"} `}>
            <div className="flex justify-between ">
                <h1 className="font-extrabold text-xl text-white/80">Your Cart Items</h1>
                <div className="cartlist-close-btn" onClick={toggleCart}><CircleX /></div>
            </div>
            <div className="flex flex-col gap-2">
                {cartItems.map((carts) => (
                    <AddedCartItems key={carts.id} {...carts} removeCart={removeCart} />
                ))}
            </div>
            <div className="cartlist-total">
                <h1 className="font-bold">Total</h1>
                <p className="font-light">{formatCurrency(totalPrice)}</p>
            </div>
            <div className="max-w-[200px] text-center mx-auto mt-4">
                <motion.button
                    whileTap={buttonAnimation.whileTap}
                    whileHover={buttonAnimation.whileHover}
                    transition={buttonAnimation.transition}
                    onClick={() => navigate("/checkout")}
                    className="bg-accent mt-4 p-2 rounded-2xl text-sm font-light min-w-fit">
                    Proceed to Checkout
                </motion.button>
            </div>
        </div>
    )
}

export default CartList;
