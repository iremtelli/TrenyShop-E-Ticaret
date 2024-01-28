import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { VscAccount } from "react-icons/vsc"

const Footer = () => {
  return (
    <div className="bg-gray-100 p-4 mt-auto footer ">
      <div className="flex items-center justify-center">
        <div className="text-lg mt-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 p-3 rounded-md">
          <FaLinkedin size={30} />
        </div>
        <div className="text-lg mt-2 ml-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 p-3 rounded-md">
          <FaGithub size={30} />
        </div>
        <div className="text-lg mt-2 ml-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 p-3 rounded-md">
          <VscAccount size={30} />
        </div>
      </div>
    </div>
  )
}

export default Footer
