import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import CategorySlice from "./CategorySlice";
import SubCategorySlice from "./SubCategorySlice";
import MostPopularSlice from "./MostPopularSlice";
import ProductSlice from "./ProductSlice";
import ContactSlice from "./ContactSlice";
import SearchSlice from "./SearchSlice";
const store = configureStore({
       reducer: {
              HomeSlice,
              CategorySlice,
              SubCategorySlice,
              MostPopularSlice,
              ProductSlice,
              ContactSlice,
              SearchSlice
       }
})
export default store;