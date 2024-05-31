import { useBillingContext, useShoppingContext } from "src/context/UseContexts";
import { Link } from "react-router-dom";
import { AddedCartItems, BillingInfo } from "../components";
import { ArrowBigLeft, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import { buttonAnimation } from "src/utilities/animation";
import { Modal } from "src/components";
import { purchaseTitle, purchaseContent } from "src/utilities";

const CheckOut = () => {
    const { clientCartItems, removeCart } = useShoppingContext();
    const { openModal, toggleModal } = useBillingContext();
    return (
        <section id="checkout" className="pt-6 md:pt-10">
            <div className="section-container query-container relative md:px-8">
                <div className="relative flex justify-between items-center">
                    <div className="">
                        <p className="section-subtitle">Checkout Page</p>
                        <h1 className="section-header max-w-[200px] md:max-w-full">Your Purchase List</h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <Link to="/shop">
                            <motion.button
                                whileTap={buttonAnimation.whileTap}
                                whileHover={buttonAnimation.whileHover}
                                transition={buttonAnimation.transition}
                                className="rounded-full bg-secondary p-2">
                                <ArrowBigLeft />
                            </motion.button>
                        </Link>
                        <h1 className="text-sm text-center md:text-left">Back to Shop</h1>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col justify-center max-w-[85%] lg:max-w-[60%] mx-auto rounded-2xl border-2
                form-glass">
                {clientCartItems
                    .map((cart) => (
                        <AddedCartItems key={cart.id} {...cart} removeCart={removeCart} />
                    ))}
            </div>
            <div className="section-container query-container relative md:px-8">
                <p className="section-subtitle">Billing Information</p>
                <h1 className="section-header max-w-[300px] md:max-w-full">Purchase</h1>
            </div>
            <div className="form-container form-glass max-w-[90%] md:max-w-[80%] mx-auto">
                <h1 className="form-title">Billing Form</h1>
                <BillingInfo />
                {openModal && <Modal
                    header={purchaseTitle}
                    content={purchaseContent}
                    icon={PartyPopper}
                    openModal={openModal}
                    toggleModal={toggleModal} />}
            </div>
        </section>
    )
}

export default CheckOut;
