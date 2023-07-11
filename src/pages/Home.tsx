import React from "react";
import { Routes, Route } from "react-router-dom";

import PromoPage from "@/pages/PromoPage";
import ProductsPage from "@/pages/ProductsPage";
import ProductOnePage from "@/pages/ProductOnePage";

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
