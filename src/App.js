import { Route, Routes } from "react-router-dom";
import RootElement from "./pages/RootElement";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import SubCategories from "./pages/SubCategories";
import Products from "./pages/Products";
import Product from "./pages/Product";
import React, { Suspense } from "react";
import SearchPage from "./pages/SearchPage";
const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const Page404 = React.lazy(() => import('./pages/Page404'))

function App() {
  return (
    <div >
      <Routes>
        <Route path="*" element={<Suspense fallback="loading..."><Page404 /></Suspense>}></Route>
        <Route path="/" element={<RootElement />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<Suspense fallback="loading..."><AboutUs /></Suspense>}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="categories/:id" element={<SubCategories />}></Route>
          <Route path="Products/:subid" element={<Products />}></Route>
          <Route path="Product/:productid" element={<Product />}></Route>
          <Route path="search/:search" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
