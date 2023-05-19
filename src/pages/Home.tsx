import React from "react";
import { Routes, Route } from "react-router-dom";

import PromoPage from "./PromoPage";
import ProductsPage from "./ProductsPage";
import ProductOnePage from "./ProductOnePage";

const Home = () => {
  return (
    <Routes>
      <Route index path="/" element={<PromoPage />} />
      <Route path={"/category"} element={<ProductsPage />} />
      <Route path={"/category/:slug"} element={<ProductsPage />} />
      <Route path={"/product/:slug"} element={<ProductOnePage />} />
    </Routes>
  );
};

export default Home;
