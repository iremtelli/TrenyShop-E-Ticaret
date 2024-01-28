import React, { useEffect } from "react"
import { BsSearchHeartFill } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { FaShoppingBasket } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { getCartTotal } from "../../redux/cartSlice"
import { useNavigate } from "react-router-dom"

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { carts } = useSelector((state) => state.carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className="flex items-center gap-10 ">
      <div className="flex items-center border p-3 rounded-full m-3  bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama Yapınız..."
        />
        <BsSearchHeartFill size={28} className="ml-[-5px]" />
      </div>
      <CiHeart size={28} className="ml-[-5px] " />
      <div className="relative flex items-center gap-8">
        <div
          onClick={() => navigate("cart")}
          className="relative ml-auto mr-20"
        >
          <FaShoppingBasket size={28} />

          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {carts?.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarRight
