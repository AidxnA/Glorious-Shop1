import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Iconsymbols = () => {
  return (
    <div className = "flex space-x-5 cursor-pointer ">
      <FaSearch/>
      <FaRegHeart/>
      <FaUserCircle/>
      <IoCartOutline/>
    </div>
  )
}

export default Iconsymbols