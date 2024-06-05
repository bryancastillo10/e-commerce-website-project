import { Minus, Plus } from "lucide-react";
import { QuantityButtonProps } from "src/constants/shoptype";

const QuantityButton = ({ id, quantity, addCartEvent, subCartEvent, removeCart }: QuantityButtonProps) => {
    const signBtnStyle = "duration-500 ease-in rounded-full shadow-md p-1 hover:bg-primary hover:text-white/80";
    return (
        <div className="flex flex-col items-center text-white mx-auto min-w-fit lg:mt-6 pb-4">
            <div className="flex items-center gap-4 md:gap-2 my-2">
                <button onClick={() => subCartEvent(id)}>
                    <Minus size={26} className={`${signBtnStyle} bg-danger`} /></button>
                <p className="text-center text-sm">
                    <span>{quantity} &nbsp;</span>
                    in cart
                </p>
                <button onClick={() => addCartEvent(id)}>
                    <Plus size={26} className={`${signBtnStyle} bg-emerald-400`} /></button>
            </div>
            <div className="">
                <button className="bg-danger px-2 py-1 rounded-2xl shadow-md duration-500 ease-in hover:bg-primary
                tracking-wide" onClick={() => removeCart(id)}>Remove</button>
            </div>
        </div>
    )
}

export default QuantityButton;
