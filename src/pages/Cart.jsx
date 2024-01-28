import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartTotal } from "../redux/cartSlice"

import CartComp from "../components/cart/CartComp"

const Cart = () => {
  const dispatch = useDispatch()

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts)

  console.log(carts, totalAmount, itemCount, "carts")

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, carts])

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center md:items-end text-2xl mt-4">
            Toplam Tutar:
            <span className="font-bold text-2xl md:ml-4 sm:ml-2">
              {totalAmount} TL
            </span>
          </div>
        </div>
      ) : (
        <div>Sepetiniz Boş...</div>
      )}
    </div>
  )
}

export default Cart
