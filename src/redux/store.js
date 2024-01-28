import { configureStore } from "@reduxjs/toolkit"
import CategoriesSlice from "./CategoriesSlice"
import productSlice from "./productSlice"
import cartSlice from "./cartSlice"
const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    products: productSlice,
    carts: cartSlice,
  },
})

export default store
