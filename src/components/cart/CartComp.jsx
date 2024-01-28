import React from "react"
import { removeFromCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"
import { FaTrashCan } from "react-icons/fa6"

const CartComp = ({ cart }) => {
  const dispatch = useDispatch()

  return (
    <div className="my-6 mx-auto max-w-5xl border rounded-md overflow-hidden shadow-md">
      <div className="flex items-center justify-between p-7 m-4  gap-5">
        <img
          className="w-15 h-20 object-cover"
          src={cart?.image}
          alt={cart?.title}
        />
        <div className="flex-1 ml-4">
          <div className="text-lg font-bold">{cart?.title}</div>
          <div className="text-sm text-gray-500">{cart?.description}</div>
        </div>
        <div className="text-md font-bold">
          {cart?.price} TL ({cart?.quantity})
        </div>
        <div
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="w-8 h-8 text-orange-500 cursor-pointer flex items-center justify-center"
        >
          <FaTrashCan />
        </div>
      </div>
    </div>
  )
}

export default CartComp
