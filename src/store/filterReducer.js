const filterReducer = (state, action) => {
  if (action.type === "FILTER_PRODUCT_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "FILTER_PRODUCT") {
    let priceArr = action.payload.map((curElem) => curElem.price);
    let maxPrice = Math.max(...priceArr);
    return {
      ...state,
      all_products: [...action.payload],
      filter_products: [...action.payload],
      isLoading: false,
      filters: { ...state.filters, maxPrice, price: maxPrice },
    };
  }

  if (action.type === "SET_GRID_VIEW") {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === "SET_SORT_VALUE") {
    return {
      ...state,
      sorting_value: action.payload,
    };
  }

  if (action.type === "SET_LIST_VIEW") {
    return {
      ...state,
      grid_view: false,
    };
  }

  if (action.type === "GET_SORT_VALUE") {
    let sortData;
    const { filter_products, sorting_value } = state;
    const tempSortData = [...filter_products];
    const SortFunction = (a, b) => {
      if (sorting_value === "lowest") {
        return a.price - b.price;
      }

      if (sorting_value === "highest") {
        return b.price - a.price;
      }

      if (sorting_value === "a-z") {
        return a.name.localeCompare(b.name);
      }

      if (sorting_value === "z-a") {
        return b.name.localeCompare(a.name);
      }
    };

    sortData = tempSortData.sort(SortFunction);
    return {
      ...state,
      filter_products: sortData,
    };
  }

  if (action.type === "UPDATE_FILTERS_VALUE") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === "UPDATE_FILTER") {
    let tempFilData = [...state.all_products];
    const { text, category, company, color, price } = state.filters;
    if (text) {
      tempFilData = tempFilData.filter((elm) =>
        elm.name.toLowerCase().includes(text)
      );
    }
    if (category) {
      tempFilData = tempFilData.filter((elm) =>
        category === "all" ? elm : elm.category === category
      );
    }

    if (company) {
      tempFilData = tempFilData.filter((elm) =>
        company === "all" ? elm : elm.company === company
      );
    }

    if (color) {
      tempFilData = tempFilData.filter((elm) =>
        color === "all" ? elm : elm.colors.includes(color)
      );
    }

    if (price === 0) {
      tempFilData = tempFilData.filter((curElem) => curElem.price === price);
    } else {
      tempFilData = tempFilData.filter((curElem) => curElem.price <= price);
    }

    return {
      ...state,
      filter_products: tempFilData,
    };
  }

  if (action.type === "CLEAR_FILTER") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: state.filters.maxPrice,
        price: state.filters.maxPrice,
        minPrice: 0,
      },
    };
  }

  return state;
};

export default filterReducer;
