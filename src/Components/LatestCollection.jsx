import React, { useContext } from "react";
import user from "../../src/Context/shop";
import Title from "./Title";
const LatestCollection = () => {
  const { products, name } = useContext(user);
  console.log(products, name);
  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"Latest"} text2={"Collection"} />
        </div>
      </div>
    </>
  );
};

export default LatestCollection;
