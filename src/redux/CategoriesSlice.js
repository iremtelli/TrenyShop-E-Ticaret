import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  categories: [],
  selectedCategory: 0,
}

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      )
      if (!response.ok) {
        throw new Error("Failed to fetch categories")
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching categories:", error.message)
      throw error
    }
  }
)

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  },
})
export const { setCategory } = categorySlice.actions
export default categorySlice.reducer
