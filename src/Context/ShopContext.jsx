import React from "react";
import { products } from "../assets/product";
import ShopContext from "../../src/Context/shop";

const ShopContextProvider = (props) => {
  const value = {
    products,
    name: "ECOMMERCER",
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
