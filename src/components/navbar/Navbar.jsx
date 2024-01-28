import React from "react"
import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"

export default function Navbar() {
  return (
    <div className=" flex items-center justify-between my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}
