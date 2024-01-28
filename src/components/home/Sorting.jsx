import React from "react"

const Sorting = ({ setSort }) => {
  return (
    <div className="flex items-center justify-center gap-10 my-4">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-white py-3 px-4 cursor-pointer border border-gray-300 rounded-md"
        name=""
        id=""
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  )
}

export default Sorting
