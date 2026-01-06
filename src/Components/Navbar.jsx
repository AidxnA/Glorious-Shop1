import React from 'react'
import Logo from './Logo'
import Iconsymbols from './Iconsymbols'


const navLinks = [
    {id : 1,text : 'Shop', link: 'shop'},
    {id : 2,text : 'Build', link: 'build'},
    {id : 3,text : 'Sale', link: 'sale'},
    {id : 4,text : 'Explore', link: 'explore'},
    {id : 5,text : 'Software', link: 'software'},
    {id : 6,text : 'Support', link: 'support'},

    ]
const Navbar = () => {
  return (
    <div className =  " absolute top-0 z-50 fixed w-full flex justify-between bg-white p-4 text-black border-b shadow-xl ">
        <div className = "flex space-x-5 ">{navLinks.map((link,index)=>(
            <p className= "hover:font-semibold cursor-pointer" 
            key={index}>{link.text}</p>
        ))}
        </div> {/*This is for my Nav links */}
        <div ><Logo/></div> {/*This is for my Logo */}
        <div><Iconsymbols/></div> {/*This is for my Icon actions */}

    </div>
  )
}

export default Navbar