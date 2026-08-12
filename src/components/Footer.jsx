import starbuck from "../assets/starbucks.png"
import nike from "../assets/nike.png"
import microsoft from "../assets/microsoft.png"
import nasa from "../assets/nasa.png"
import panasonic from "../assets/panasonic.png"
import cocacola from "../assets/cocacola.png"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col md:flex-row w-full h-full pt-5 md:pt-10  '>
                <div className='w-full md:w-[60%] md:text-start h-full px-5 md:pl-20 flex flex-col gap-5'>
                    <p className='text-[25px] text-black text-[20px]'>Trusted by the World's Most Respected Organizations</p>
                    <p>Robin Sharma is a globally respected humanitarian who, for over a quarter of a century, has been devoted to helping human beings realize their native gifts. One of the top leadership and personal mastery experts in the world, he advises organizations such as Nike, FedEx,  Microsoft, Expedia, Unilever, GE, HP, Starbucks, Zara, and PwC. His #1 international bestsellers, including The 5AM Club, The Wealth Money Can’t Buy, The Monk Who Sold His Ferrari, and The Leader Who Had No Title, have sold millions of copies in more than ninety-two languages and dialects, making him</p>
                    <div className='w-full flex justify-between items-center md:justify-start h-[50px] grayscale brightness-125'>
                        <div className="w-[50px] h-[40px]">
                            <img className="w-full h-full" src={starbuck} />
                        </div>
                        <div className="w-[50px] h-[40px]">
                            <img className="w-full h-full" src={nike} />
                        </div>
                        <div className="w-[50px] h-[40px]">
                            <img className="w-full h-full" src={nasa} />
                        </div>
                        <div className="w-[50px] h-[40px]">
                            <img className="w-full h-full" src={microsoft} />
                        </div>
                        <div className="w-[50px] h-[40px]">
                            <img className="w-full h-full" src={panasonic} />
                        </div>
                        <div className="w-[50px] h-[40px]">
                            <img className="w-full h-full" src={cocacola} />
                        </div>
                    </div>
                    <div className="w-full justify-center items-center md:justify-start h-[50px] flex gap-5">
                        <p className="text-xl text-black"> FOLLOW ROBIN :</p>
                        <div className="flex gap-2">
                            <div className="hover:text-black"><FacebookIcon/></div>
                            <div className="hover:text-black"><InstagramIcon/></div>
                            <div className="hover:text-black"><YouTubeIcon/></div>
                        </div>
                    </div>
                </div>
                <div className='w-full justify-center md:w-[40%] h-full flex p-5 mdpl-20 '>
                    <div className="flex flex-col">
                        <Link to="/about" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">ABOUT ROBIN</Link>
                        <Link to="/speaking" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">SPEAKING</Link>
                        <Link to="/podcast" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">PODCAST</Link>
                        <Link to="/blog" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">BLOG</Link>
                        <Link to="/books" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">BOOKS</Link>
                        <Link to="/courses" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">COURSES</Link>
                        <Link to="/contact" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">CONTACT</Link>
                        <Link to="/login" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">LOGIN FOR MEMBERS</Link>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/login" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">LOGIN FOR MEMBERS</Link>
                        <Link to="" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">TERMS AND CONDITIONS</Link>
                        <Link to="" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">RETURN POLICY</Link>
                         <Link to="" className="px-[10px] py-[5px] transition-colors duration-500 hover:text-orange-300">PRIVACY POLICY</Link>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center justify-center text-center py-4'>
                <div className="w-full h-0.5 bg-gray-400 mb-5"></div>
                <p>©2026-2027 Virtuoso Learning Limited Ltd. All rights reserved.
                </p>
                <p>Website Build by Redfern Media</p>
            </div>
        </div>
    )
}
