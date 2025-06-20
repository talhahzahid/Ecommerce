import React, { useContext, useEffect, useState } from "react";
import caretright from "../assets/caret-right.svg";
import Title from "../Components/Title";
import shopContext from "../Context/shop";
import ProductItem from "../Components/ProductItem";
const Collection = () => {
  const { products } = useContext(shopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // const [subCategory, setSubCategory] = useState([]);
  const toogleCategory = (e) => {
    const value = e.target.value;
    console.log(value);

    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      console.log(category, "s");
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProducts(productCopy);
  };

  useEffect(() => {
    applyFilter();
    console.log(category);
  }, [category]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* filter option */}
        <div className="min-w-60">
          <p
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            className="my-2 text-xl cursor-pointer flex items-center gap-2"
          >
            FILTERS
            <img
              className={`${showFilter ? "rotate-90" : ""} h-3 sm:hidden`}
              src={caretright}
              alt=""
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="font-medium my-2">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Men"}
                  onChange={toogleCategory}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                  onChange={toogleCategory}
                />{" "}
                Woman
              </p>
            </div>
          </div>
          {/* Type Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="font-medium my-2">TYPE</p>
            <div className="flex flex-col gap-2 text-sm">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Topwear"} />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Bottomwear"} />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Winterwear"} />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* subCatogory Filter */}
        <div className="flex-1">
          <div className="flex justify-between sm:text-2xl text-base mb-4">
            <Title text1={"All"} text2={"COLLECTION"} />
            <select className="text-sm border-2 border-gray-300 px-2">
              <option value="">Relevent</option>
              <option value="">Low to High</option>
              <option value="">High to Low</option>
            </select>
          </div>
          {/* render a product */}
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 gap-y-6">
            {filterProducts.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
