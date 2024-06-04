import { ShoppingCart } from "lucide-react";
import storeItems from "src/constants/shop.json";
import { ShopCards } from "../components/";
import { CartList } from "../components/subcomponent";
import { useShoppingContext } from "src/context/UseContexts";


const Shop = () => {
    const { cartQuantity, openCart, toggleCart } = useShoppingContext();

    return (
        <section id="shop-items" className="pt-6 md:pt-10">
            <div className="section-container query-container relative md:px-8">
                <div className="relative">
                    <p className="section-subtitle">Gadget Sales</p>
                    <h1 className="section-header max-w-[200px] md:max-w-full leading-none mb-4">
                        Avail Now at Affordable Price
                    </h1>
                    <CartList openCart={openCart} toggleCart={toggleCart} />
                </div>
                {cartQuantity > 0 && (<div className="cart-button" onClick={toggleCart}>
                    <ShoppingCart />
                    <div className="cart-quantity-style">{cartQuantity}</div>
                </div>)}
            </div>
            <div className="shop-item-cards xs:max-w-[84%] lg:max-w-[77%]">
                {storeItems.map((items) => (
                    <div key={items.id}>
                        <ShopCards {...items} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Shop;
