import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1)
    }
  }

  const addBasket = () => {
    if (productDetail) {
      dispatch(
        addToCart({
          id: productDetail.id,
          title: productDetail.title,
          image: productDetail.image,
          price: productDetail.price,
          quantity: quantity,
        })
      )
      notify()
    }
  }
  const notify = () =>
    toast.success("Ürün başarıyla sepete eklendi!", {
      className: "bg-green-500 text-white",
      position: "top-center",
    })

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold ">{productDetail?.title}</div>
        <div className="my-2 text-2xl ">{productDetail?.description}</div>
        <div className="my-2 text-lg text-gray-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-lg text-gray-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-3xl text-orange-500 font-bold ">
          {productDetail?.price}
          <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="cursor-pointer text-4xl">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="cursor-pointer text-4xl">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border my-4 w-[200px] text-2xl rounded-md bg-orange-400 text-white cursor-pointer h-16 flex items-center justify-center"
        >
          Sepete Ekle
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default DetailComp
