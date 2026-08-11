// import { Link } from 'react-router-dom'

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <div className="flex flex-col">
                <Link to="/" className="flex font-bold justify-center text-black-500 p-4 tracking-[5.5px] [word-spacing:0em]">
                    ROBIN SHARMA
                </Link>
                <div className="flex justify-center">
                    <div className="h-0.5 bg-gray-300 w-[90%]"></div>
                </div>
                <div className="flex justify-center items-center text-black-500 font-normal leading-[1.2]">
                    <Link to="/about" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">ABOUT ROBIN</Link>
                    <Link to="/speaking" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">SPEAKING</Link>
                    <Link to="/podcast" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">PODCAST</Link>
                    <Link to="/blog" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">BLOG</Link>
                    <Link to="/books" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">BOOKS</Link>
                    <Link to="/courses" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">COURSES</Link>
                    <Link to="/contact" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">CONTACT</Link>
                    <Link to="/login" className="px-[30px] py-[20px] transition-colors duration-500 hover:text-orange-300">LOGIN FOR MEMBERS</Link>
                </div>
            </div>
    </nav>
  )
}