import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { cartReducer } from "./cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  const parsedData = JSON.parse(cartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocalStorage(),
  total_item: "",
  total_price: 0,
  shipping_fee: 5000,
};

export const CartProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (id, amount, color, product) => {
    dispatch({
      type: "LOAD_CART_PRODUCT",
      payload: { id, amount, color, product },
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_CART_PRODUCT",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART_PRODUCT" });
  };

  const setDecrease = (id) => {
    dispatch({ type: "DES_CART_PRODUCT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "INC_CART_PRODUCT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEM" });
    dispatch({ type: "SET_ITEM_PRICE" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
