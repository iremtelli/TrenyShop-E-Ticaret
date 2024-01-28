import React from "react"
import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[300px] p-3 mb-5 mx-3 border rounded-md relative overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ml-16"
    >
      <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-gray-400 text-white p-1 m-1">
        {product?.price}
        <span className=""> TL</span>
      </div>
      <img
        alt=""
        className="w-[200px] h-200px object-cover m-auto"
        src={product?.image}
      />
      <div className="text-center px-3 mt-3 text-xl font-bold">
        {product?.title}
      </div>
    </div>
  )
}

export default Product
