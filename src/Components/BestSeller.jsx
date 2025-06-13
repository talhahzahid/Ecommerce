import React, { useContext, useEffect, useState } from "react";
import shopContext from "../Context/shop";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  //   console.log(products);
  const [BestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    console.log("Products:", products);
    const bestProducts = products.filter((item) => item.bestseller);
    console.log("Filtered Best Sellers:", bestProducts);
    setBestSellers(bestProducts);
  }, [products]);
  console.log(BestSellers);
  return (
    <>
      <div className="my-10 text-center">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="text-gray-700 m-auto w-3/4 text-xs md:text-base sm:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      {/* rendering products */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 m-auto w-3/4 gap-4  gap-y-3">
        {BestSellers.map((item, index) => {
          return (
            <ProductItem
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default BestSeller;
