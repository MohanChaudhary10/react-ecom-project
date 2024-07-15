import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const API = "https://api.pujakaitem.com/api/products";

const inisital_state = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleProductLoading: false,
  SinglePro: {},
};

export const AppContext = createContext();

export const AppProdvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inisital_state);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({
        type: "PRODUCT_UPDATE",
        payload: products,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLEPRODUCTLOADING" });
    try {
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({
        type: "SINGLEPRODUCT_UPDATE",
        payload: SingleProduct,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};
