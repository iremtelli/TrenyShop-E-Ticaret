import React from "react"
import SliderComp from "../components/home/SliderComp"
import Sorting from "../components/home/Sorting"
import Categories from "../components/home/Categories"
import Products from "../components/home/Products"
import { useState } from "react"

const Home = () => {
  const [category, setCategory] = useState("")
  const [sort, setSort] = useState("")
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Categories setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home
