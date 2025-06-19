import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px[5vw] md:px[7vw] lg:px[9vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
