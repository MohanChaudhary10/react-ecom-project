import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProdvider } from "./store/prodcutContext";
import { FilterProvier } from "./store/filterContext";
import { CartProvider } from "./store/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProdvider>
    <FilterProvier>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvier>
  </AppProdvider>
);

reportWebVitals();
