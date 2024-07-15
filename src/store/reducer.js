export const reducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "PRODUCT_UPDATE") {
    const featureProduct = action.payload.filter(
      (elm) => elm.featured === true
    );
    return {
      ...state,
      products: action.payload,
      isLoading: false,
      featureProducts: featureProduct,
    };
  }

  if (action.type === "SET_ERROR") {
    return { ...state, isError: true, isLoading: false };
  }

  if (action.type === "SET_SINGLEPRODUCTLOADING") {
    return { ...state, isSingleProductLoading: true };
  }

  if (action.type === "SINGLEPRODUCT_UPDATE") {
    return {
      ...state,
      SinglePro: action.payload,
      isSingleProductLoading: false,
    };
  }

  return state;
};
