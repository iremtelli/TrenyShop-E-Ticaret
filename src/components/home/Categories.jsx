import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../redux/CategoriesSlice"

const Categories = ({ setCategory }) => {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className="w-1/4 bg-gray-100 p-9 max-h-screen gap-4">
      <div className="border-b pb-1 text-xl font-bold mb-4">KATEGORİ</div>
      <div className="flex flex-col">
        {categories?.map((category, i) => (
          <div
            onClick={() => setCategory(category)}
            className="text-lg mt-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 p-3 rounded-md text-gray-600"
            key={i}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
