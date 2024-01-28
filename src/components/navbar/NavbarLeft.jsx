import React from "react"
import { GiBeachBag } from "react-icons/gi"

export default function NavbarLeft() {
  return (
    <div className="flex items-center  text-orange-500  ">
      <GiBeachBag size={28} className="mr-2" />
      <div className="font-extrabold text-lg md:text-xl">TRENDYSHOP</div>
    </div>
  )
}
