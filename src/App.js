import { Route, Routes } from "react-router-dom";
import RootElement from "./pages/RootElement";
import HomePage from "./pages/HomePage";
// import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SubCategories from "./pages/SubCategories";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Page404 from "./pages/Page404"
import React, { Suspense } from "react";
const AboutUs = React.lazy(()=>import('./pages/AboutUs'))

function App() {
  return (
    <div >
      <Routes>
        <Route path="*" element={<Page404/>}></Route>
        <Route path="/" element={<RootElement />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<Suspense fallback="loading..."><AboutUs/></Suspense>}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="categories/:id" element={<SubCategories />}></Route>
          <Route path="Products/:subid" element={<Products/>}></Route>
          <Route path="Product/:Product" element={<Product/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
