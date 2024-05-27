import { createContext, useState } from "react";
import {
  ContextProviderType, ShoppingContextType,
  CartItemsType, clientCartItemsProps,
} from "./contextTypes";
import storeItems from "src/constants/shop.json";
export const ShoppingContext = createContext({} as ShoppingContextType);


export const ShoppingContextProvider = ({ children }: ContextProviderType) => {
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);

  // Function 1: Getting the quantity of cart
  function getItemQuantity(id: number) {
    return cartItems.find((x) => x.id === id)?.quantity || 0;
  }

  // Function 2: Adding a cart item
  function increaseCart(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((x) => x.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((x) => {
          if (x.id === id) {
            return { ...x, quantity: x.quantity + 1 };
          } else {
            return x;
          }
        });
      }
    });
  }

  //Function 3: Subtracting a cart item
  function decreaseCart(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((x) => x.id === id)?.quantity === 1) {
        return currItems.filter((x) => x.id !== id);
      } else {
        return currItems.map((x) => {
          if (x.id === id) {
            return { ...x, quantity: x.quantity - 1 };
          } else {
            return x;
          }
        });
      }
    });
  }

  // Function 4: Removing the whole cart items
  function removeCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((x) => x.id !== id);
    });
  }

  // Function 5 Getting the Total Cart Quantity
  const cartQuantity = cartItems.reduce(
    (quantity, x) => x.quantity + quantity,
    0
  );

  // Function 6 Opening the Shopping Cart Sidebar
  const [openCart, setOpenCart] = useState<boolean>(false);
  const toggleCart = () => {
    setOpenCart(!openCart);
  }

  // Calculating the total price of the User's cart
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0)

  // Identifying those items that weer added to the cart
  const clientCartItems = cartItems.map((cart) => {
    const item = storeItems.find((item) => item.id === cart.id);
    if (item == undefined) return null;
    return {
      id: cart.id,
      quantity: cart.quantity,
      name: item.name,
      price: item.price,
    }
  }).filter((item): item is clientCartItemsProps => item !== null)

  // Summarize Functions
  const contextValues = {
    getItemQuantity,
    increaseCart,
    decreaseCart,
    removeCart,
    toggleCart,
    cartItems,
    cartQuantity,
    openCart,
    totalPrice,
    clientCartItems
  };

  return (
    <ShoppingContext.Provider value={contextValues}>
      {children}
    </ShoppingContext.Provider>
  );
}