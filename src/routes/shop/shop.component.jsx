import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Categorey from "../category/category.component";

import "./shop.style.scss";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Categorey />} />
    </Routes>
  );
};

export default Shop;
