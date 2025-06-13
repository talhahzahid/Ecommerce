import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shopContext from "../Context/shop";

const ProductItem = ({ name, price, id, image }) => {
  const { currency } = useContext(shopContext);
  return (
    <>
      <Link className="cursor-pointer text-gray-500" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-40 h-60 rounded hover:scale-110 transition ease-in-out"
          />
        </div>
        <p className="text-gray-700 font-medium pt-3 pb-1">{name}</p>
        <p className="font-medium">
          {currency}
          {price}
        </p>
      </Link>
    </>
  );
};

export default ProductItem;
