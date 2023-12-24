import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import CategorySlice from "./CategorySlice";
import SubCategorySlice from "./SubCategorySlice";
import MostPopularSlice from "./MostPopularSlice";
import ProductSlice from "./ProductSlice";
import ContactSlice from "./ContactSlice";
import SearchSlice from "./SearchSlice";
import WindowSlice from "./WindowSlice";
import CommentSlice from "./CommentSlice";
const store = configureStore({
       reducer: {
              HomeSlice,
              CategorySlice,
              SubCategorySlice,
              MostPopularSlice,
              ProductSlice,
              ContactSlice,
              SearchSlice,
              WindowSlice,
              CommentSlice
       }
})
export default store;