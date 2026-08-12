// import { Link } from 'react-router-dom'

import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav>
            {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
            <div className="bg-white flex flex-col fixed top-0 left-0 w-full z-50">
                <Link to="/" className="flex font-bold justify-center text-black-500 p-4 tracking-[5.5px] [word-spacing:0em]">
                    ROBIN SHARMA
                </Link>
                <div className="flex justify-center">
                    <div className="h-0.5 bg-gray-300 w-[90%]"></div>
                </div>
                <div className="hidden xl:flex justify-center items-center text-black-500 font-normal leading-[1.2]">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>ABOUT ROBIN</NavLink>
                    <NavLink to="/speaking" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>SPEAKING</NavLink>
                    <NavLink to="/podcast" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>PODCAST</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>BLOG</NavLink>
                    <NavLink to="/books" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>BOOKS</NavLink>
                    <NavLink to="/courses" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>COURSES</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>CONTACT</NavLink>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[20px]" : "text-black-500 px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-400"}>LOGIN FOR MEMBERS</NavLink>
                </div>
                <div className="xl:hidden text-center py-3 transition-opacity duration-200 active:opacity-70" onClick={() => setShowNav(!showNav)}>{showNav ? <CloseIcon /> : <MenuIcon />}</div>
                <div className={`xl:hidden w-full bg-white flex flex-col text-center overflow-hidden transition-[max-height] duration-300 ease-in-out ${showNav ? 'max-h-[500px]' : 'max-h-0'
                    }`}>

                    {/* <Link to="/about" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">ABOUT ROBIN</Link>
                    <Link to="/speaking" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">SPEAKING</Link>
                    <Link to="/podcast" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">PODCAST</Link>
                    <Link to="/blog" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">BLOG</Link>
                    <Link to="/books" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">BOOKS</Link>
                    <Link to="/courses" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">COURSES</Link>
                    <Link to="/contact" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">CONTACT</Link>
                    <Link to="/login" onClick={() => setShowNav(!showNav)} className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">LOGIN FOR MEMBERS</Link> */}
                    <NavLink to="/about" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>ABOUT ROBIN</NavLink>
                    <NavLink to="/speaking" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>SPEAKING</NavLink>
                    <NavLink to="/podcast" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>PODCAST</NavLink>
                    <NavLink to="/blog" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>BLOG</NavLink>
                    <NavLink to="/books" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>BOOKS</NavLink>
                    <NavLink to="/courses" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>COURSES</NavLink>
                    <NavLink to="/contact" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>CONTACT</NavLink>
                    <NavLink to="/login" onClick={() => setShowNav(!showNav)} className={({ isActive }) => isActive ? "text-orange-300 px-[30px] py-[10px]" : "text-black-500 px-[30px] py-[10px] transition-colors duration-500 hover:text-orange-400"}>LOGIN FOR MEMBERS</NavLink>
                </div>

            </div>
        </nav>
    )
}