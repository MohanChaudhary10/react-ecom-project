import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useGlobalState } from "./prodcutContext";
import filterReducer from "./filterReducer";

const inisital_state = {
  all_products: [],
  filter_products: [],
  isLoading: false,
  grid_view: true,
  sorting_value: "a-z",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterContext = createContext();

export const FilterProvier = ({ children }) => {
  const { products } = useGlobalState();

  const [state, dispatch] = useReducer(filterReducer, inisital_state);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  const sorting = (e) => {
    dispatch({ type: "SET_SORT_VALUE", payload: e.target.value });
  };

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCT_LOADING" });
    dispatch({ type: "FILTER_PRODUCT", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER" });
    dispatch({ type: "GET_SORT_VALUE" });
  }, [products, state.sorting_value, state.filters]);

  return (
    <FilterContext.Provider
      clearFilters
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
