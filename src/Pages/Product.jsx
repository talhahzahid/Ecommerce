import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopContext from "../Context/shop";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(shopContext);
  const [productData, setProductData] = useState("");
  const [image, setImage] = useState("");
  const fetchProductData = () => {
    products.map((item) => {
      if (item.id === Number(productId)) {
        setProductData(item);
        setImage(item.image);
        console.log(item);
        return null;
      }
    });
  };
  // console.log(productData.image)
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-2 transition-opacity">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%]">
            {productData?.image?.map((item, index) => {
              console.log(item); // logs on render
              return (
                <img
                  key={index}
                  src={item}
                  alt=""
                  onClick={() => setImage(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
