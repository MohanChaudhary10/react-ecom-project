export const cartReducer = (state, action) => {
  if (action.type === "LOAD_CART_PRODUCT") {
    let { id, amount, color, product } = action.payload;

    let exitingProduct = state.cart.find((item) => item.id === id + color);

    if (exitingProduct) {
      let updateData = state.cart.map((elm) => {
        if (elm.id === id + color) {
          if (elm.amount + amount > elm.max) {
            return { ...elm, amount: elm.max };
          } else {
            return { ...elm, amount: elm.amount + amount };
          }
        } else {
          return elm;
        }
      });

      return {
        ...state,
        cart: updateData,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_CART_PRODUCT") {
    let updateCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type === "CLEAR_CART_PRODUCT") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "INC_CART_PRODUCT") {
    let updatedAmtData = state.cart.map((elm) => {
      if (elm.id === action.payload) {
        if (elm.amount + 1 > elm.max) {
          return { ...elm, amount: elm.max };
        } else {
          return { ...elm, amount: elm.amount + 1 };
        }
      } else {
        return elm;
      }
    });
    return {
      ...state,
      cart: updatedAmtData,
    };
  }

  if (action.type === "DES_CART_PRODUCT") {
    let updatedAmtData = state.cart.map((elm) => {
      if (elm.id === action.payload) {
        if (elm.amount - 1 < 1) {
          return { ...elm, amount: 1 };
        } else {
          return { ...elm, amount: elm.amount - 1 };
        }
      } else {
        return elm;
      }
    });
    return {
      ...state,
      cart: updatedAmtData,
    };
  }

  if (action.type === "SET_TOTAL_ITEM") {
    let totalItem = state.cart.reduce((accu, elm) => {
      let { amount } = elm;
      return (accu = accu + amount);
    }, 0);
    return {
      ...state,
      total_item: totalItem,
    };
  }
  if (action.type === "SET_ITEM_PRICE") {
    let totalPrice = state.cart.reduce((accu, elm) => {
      let { price, amount } = elm;
      return (accu = accu + amount * price);
    }, 0);
    return {
      ...state,
      total_price: totalPrice,
    };
  }

  return state;
};
