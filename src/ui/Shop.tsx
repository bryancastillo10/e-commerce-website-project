import { ShoppingCart } from "lucide-react";
import storeItems from "src/constants/shop.json";
import { ShopCards } from "../components/";
import { CartList } from "../components/subcomponent";
import { useShoppingContext } from "src/context/UseContexts";
import { easeOut, motion } from "framer-motion";

const Shop = () => {
  const { cartQuantity, openCart, toggleCart } = useShoppingContext();

  return (
    <motion.section
      id="shop-items"
      className="pt-6 md:pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeOut }}
    >
      <div className="section-container query-container relative md:px-8">
        <div className="relative">
          <p className="section-subtitle sm:text-center md:text-left">
            Gadget Sales
          </p>
          <h1 className="section-header max-w-[200px] sm:max-w-full sm:text-center md:text-left leading-none mb-4 ">
            Avail Now at Affordable Price
          </h1>
          <CartList openCart={openCart} toggleCart={toggleCart} />
        </div>
        {cartQuantity > 0 && (
          <div className="cart-button" onClick={toggleCart}>
            <ShoppingCart />
            <div className="cart-quantity-style">{cartQuantity}</div>
          </div>
        )}
      </div>
      <div className="shop-item-cards xs:max-w-[84%] lg:max-w-[77%]">
        {storeItems.map((items) => (
          <div key={items.id}>
            <ShopCards {...items} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Shop;
