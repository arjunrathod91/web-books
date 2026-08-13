import '../App.css'
import starbuck from "../assets/starbucks.png"
import nasa from "../assets/nasa.png"
import panasonic from "../assets/panasonic.png"
import cocacola from "../assets/cocacola.png"
import microsoft from "../assets/microsoft.png"
import nike from "../assets/nike.png"
import robinsharmapodcast from "../assets/robinsharmapodcast.webp"
import robinsharmabigposter from "../assets/robinsharmabigposter.jpg"
import robinsharmabook from "../assets/robinsharmabook.webp"
import { Footer } from '../components/Footer'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import robinHeroVideo from "../assets/robinherovideo.mp4";
import { useState } from 'react'
import emailjs from "@emailjs/browser";

const Home = () => {
    const [email,setEmail] = useState('');

    const handleSubscribe = async () => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent:", response.status, response.text);
  } catch (error) {
    console.error("Email failed:", error);
  }
};
    return (
        <div className="pt-30">
            <section className="h-[300px] relative w-full md:h-[600px] aspect-video">
                <video className="absolute w-full h-full md:h-full inset-0 object-cover" autoPlay muted loop playsInline>
                    <source src={robinHeroVideo} />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className=" absolute inset-0 flex flex-col pt-15 xl:pt-20 md:pt-40 md:gap-10">
                    <div className="relative w-full h-[60px] xl:h-[100px] overflow-hidden font-medium">

                        <p className="absolute w-full text-white text-center text-3xl xl:text-7xl animate-[moveDown_6s_ease-in-out_infinite]">
                            IMPACT THE WORLD
                        </p>

                        <p className="absolute w-full text-white text-center text-3xl xl:text-7xl animate-[moveDown_6s_ease-in-out_infinite] [animation-delay:2s] [animation-fill-mode:backwards]">
                            LEAD THE FIELD
                        </p>

                        <p className="absolute w-full text-white text-center text-3xl xl:text-7xl animate-[moveDown_6s_ease-in-out_infinite] [animation-delay:4s] [animation-fill-mode:backwards]">
                            INSPIRE YOUTH
                        </p>

                    </div>
                    <p className="text-center px-10 xl:px-80 text-white font-light">Robin Sharma has spent three decades helping the world's top leaders, founders, and visionaries achieve extraordinary results. His life's mission is clear: to help human beings lead brilliantly at work and live their personal lives beautifully.</p>
                </div>
            </section>
            {/* <section className="w-full bg-blue-100 h-[600px] flex flex-col">
                <div className=''>
                    <img className="w-40 h-auto" src={starbuck} alt="Logo" />
                </div>
            </section> */}
            <section className=" flex flex-col gap-10">
                <div className="">
                    <p className='text-center pt-10 md:pt-20 text-2xl text-black font-medium px-10 xl:px-80 '>Trusted Advisor to Fortune 100 Executives, Championship Athletes, and Titans of Industry</p>

                </div>
                <div className="w-full grayscale brightness-125">
                    <div className='w-full xl:px-40 pb-10'>
                        <div className="w-full flex xl:py-10 overflow-hidden">
                            <div className="w-full flex justify-center gap-5 p-2 animate-[slideleft_8s_ease-in-out_infinite]">
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-[120px] w-[120px]" src={cocacola} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-[120px] w-[120px]" src={cocacola} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-[120px] w-[120px]" src={cocacola} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-[120px] w-[120px]" src={cocacola} />
                                </div>
                                
                            </div>
                            {/* <div className="w-full flex justify-center gap-5 p-2 animate-[slideleft_8s_ease-in-out_infinite]">
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-[120px] w-[120px]" src={cocacola} />
                                </div>
                            </div> */}
                            {/* <div className="w-full flex justify-center gap-5 p-2 animate-[slideleft_8s_ease-in-out_infinite]">
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[120px] w-[120px] xl:h-[150px] xl:w-[150px] shrink-0">
                                    <img className="h-[120px] w-[120px]" src={cocacola} />
                                </div>
                            </div>  */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col flex-col-reverse lg:flex-row bg-gray-100 lg:gap-20 ">
                <div className="w-full lg:w-[50%] flex flex-col gap-3 pl-5 xl:pl-40 pb-10 pr-5 sm:py-10">
                    <p className='font-medium text-black text-4xl lg:text-5xl xl:pt-10'>The Daily Mastery Podcast</p>
                    <p className='text-xl font-medium text-gray-600'>Your daily operating system for excellence.</p>
                    <p className=' text-black xl:pr-30 text-xl pb-3'>Join millions of listeners worldwide who start their day with wisdom distilled from decades of mentoring elite performers, plus mental models and productivity tactics you can implement immediately.</p>
                    <div className='flex justify-center items-center gap-2 w-50 bg-black text-lg px-2 py-1 text-white hover:bg-orange-400 transition-colors duration-500 cursor-pointer'>LISTEN NOW <div className='flex justify-center items-center'><ArrowForwardIcon sx={{ fontSize: 25 }} /></div></div>
                    {/* <Button variant="contained" className='w-30'>
                        LISTEN NOW
                    </Button> */}
                </div>
                <div className="flex justify-center items-center">
                    <img className="h-[400px] w-[350px] p-10 lg:p-1" src={robinsharmapodcast} />
                </div>
            </section>

            <section className="w-full h-full flex flex-col xl:flex-row justify-center items-center gap-5 xl:gap-20">
                <div className="bg-green-500 w-full xl:w-[50%]">
                    <img className="h-full w-full" src={robinsharmabigposter} />
                </div>
                <div className="w-full xl:w-[50%] flex flex-col gap-5 xl:pr-20 p-5">
                    <p className='text-4xl text-black '>ROBIN SHARMA</p>
                    <p className='font-bold text-xl text-gray-500 '>Leadership Expert · Bestselling Author · Humanitarian</p>
                    <p className='text-black text-lg'>For over 30 years, Robin Sharma has advised Fortune 100 CEOs, billionaire entrepreneurs, championship athletes, and even royalty on the principles of elite performance and purposeful leadership. His books, including The Monk Who Sold His Ferrari and The 5AM Club, have sold more than 25 million copies in 96 countries.</p>

                    <p className='text-black text-xl'>Robin's work extends beyond professional achievement. Through The Robin Sharma Foundation for Children, he supports children affected by leprosy worldwide. A portion of every copy of The 5AM Club sold goes directly to this cause. When you win, they win.</p>

                </div>
            </section>

            <section className='flex flex-col justify-center items-center gap-5 py-20 px-5'>
                <p className='text-3xl xl:text-6xl text-black '>#1 Bestselling Author</p>
                <p className='text-gray-500 text-xl xl:text-2xl font-bold pt-5'>Over 25 Million Books Sold In 96+ Nations</p>
                <div className='flex justify-center items-center gap-2 w-50 bg-black text-lg px-2 py-1 text-white hover:bg-orange-400 transition-colors duration-500 cursor-pointer'>
                    ALL BOOKS<div className='flex justify-center items-center'><ArrowForwardIcon sx={{ fontSize: 25 }} /></div></div>
                <div className='h-[350px] w-[350px] xl:h-[500px] xl:w-[500px]'>
                    <img className='h-full w-full' src={robinsharmabook} />
                </div>
            </section>
            <section className='flex flex-col sm:justify-center sm:items-center gap-5 py-10 xl:py-20 bg-gray-100 p-5'>
                <p className='text-xl sm:text-3xl sm:text-center text-black px-5'>Personal Mentorship from Robin Sharma, Direct to Your Inbox</p>
                <p className='text-1xl text-black text-light px-5 sm:text-center xl:px-60'>Gain access to Robin’s powerful insights to lead brilliantly, perform at your peak, and create lasting impact – all shared to support your highest work and best life.</p>
                <div className='flex flex-col gap-2 sm:flex-row sm:gap-0 pt-10 px-5'>
                    {/* <div className='bg-white w-[200px] h-[10px]'>
                        <input placeholder='EMAIL ADDRESS' className="" />
                    </div> */}
                    <input placeholder='EMAIL ADDRESS' className="pl-1 py-0.5 w-full sm:w-50 pl-3 py-0.5 text-black border border-gray-500 bg-white outline-none" type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <div className='flex justify-center items-center gap-2 sm:w-60 bg-black text-lg px-2 py-1 text-white hover:bg-orange-400 transition-colors duration-500 cursor-pointer' onClick={handleSubscribe}>YES, SUBSCRIBE NOW <div className='flex justify-center items-center'><ArrowForwardIcon sx={{ fontSize: 25 }} /></div></div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Home