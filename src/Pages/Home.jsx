import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </>
  );
};

export default Home;
