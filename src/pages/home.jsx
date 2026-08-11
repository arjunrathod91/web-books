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

const Home = () => {
    return (
        <div className="">
            <section className="relative w-full h-[600px] aspect-video">
                <video className="absolute w-full h-[600px] inset-0 object-cover" autoPlay muted loop playsInline>
                    <source src="../assets/robinHome-cut.mp4" type="video/mp4" />
                </video>
                <div className=" absolute inset-0 flex flex-col pt-40 items-center gap-10">
                    <div className="relative w-full h-[100px] overflow-hidden">

                        <p className="absolute w-full text-white text-center text-7xl animate-[moveDown_6s_ease-in-out_infinite]">
                            IMPACT THE WORLD
                        </p>

                        <p className="absolute w-full text-white text-center text-7xl animate-[moveDown_6s_ease-in-out_infinite] [animation-delay:2s] [animation-fill-mode:backwards]">
                            LEAD THE FIELD
                        </p>

                        <p className="absolute w-full text-white text-center text-7xl animate-[moveDown_6s_ease-in-out_infinite] [animation-delay:4s] [animation-fill-mode:backwards]">
                            INSPIRE YOUTH
                        </p>

                    </div>
                    <p className="text-center px-80 text-white font-light">Robin Sharma has spent three decades helping the world's top leaders, founders, and visionaries achieve extraordinary results. His life's mission is clear: to help human beings lead brilliantly at work and live their personal lives beautifully.</p>
                </div>
            </section>
            {/* <section className="w-full bg-blue-100 h-[600px] flex flex-col">
                <div className=''>
                    <img className="w-40 h-auto" src={starbuck} alt="Logo" />
                </div>
            </section> */}
            <section className=" flex flex-col">
                <div className="">
                    <p className='text-center pt-20 text-2xl text-black font-medium px-80 '>Trusted Advisor to Fortune 100 Executives, Championship Athletes, and Titans of Industry</p>

                </div>
                <div className="w-full">
                    <div className='w-full px-40'>
                        <div className="w-full flex py-10 overflow-hidden">
                            <div className="w-full flex justify-center gap-5 p-2 animate-[slideleft_8s_ease-in-out_infinite]">
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={cocacola} />
                                </div>
                            </div>
                            <div className="w-full flex justify-center gap-5 p-2 animate-[slideleft_8s_ease-in-out_infinite]">
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={cocacola} />
                                </div>
                            </div>
                            <div className="w-full flex justify-center gap-5 p-2 animate-[slideleft_8s_ease-in-out_infinite]">
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={starbuck} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nike} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={nasa} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={microsoft} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={panasonic} />
                                </div>
                                <div className="h-[150px] w-[150px] shrink-0">
                                    <img className="h-full w-full" src={cocacola} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-[500px] flex bg-gray-100 gap-20">
                <div className=" w-[50%] flex flex-col gap-3 pl-40">
                    <p className='font-medium text-black text-5xl pt-10'>The Daily Mastery Podcast</p>
                    <p className='text-xl font-medium text-gray-600'>Your daily operating system for excellence.</p>
                    <p className=' text-black pr-30 text-xl pb-3'>Join millions of listeners worldwide who start their day with wisdom distilled from decades of mentoring elite performers, plus mental models and productivity tactics you can implement immediately.</p>
                    <div className='flex justify-center items-center gap-2 w-50 bg-black text-lg px-2 py-1 text-white hover:bg-orange-400 transition-colors duration-500'>LISTEN NOW <div className='flex justify-center items-center'><ArrowForwardIcon sx={{fontSize:25 }}/></div></div>
                    {/* <Button variant="contained" className='w-30'>
                        LISTEN NOW
                    </Button> */}
                </div>
                <div className="flex justify-center items-center">
                    <img className="h-[400px] w-[350px]" src={robinsharmapodcast} />
                </div>
            </section>

            <section className="w-full h-full flex justify-center items-center gap-20">
                <div className="bg-green-500 w-[50%]">
                    <img className="h-full w-full" src={robinsharmabigposter} />
                </div>
                <div className="w-[50%] flex flex-col gap-5 pr-20">
                    <p className='text-4xl text-black '>ROBIN SHARMA</p>
                    <p className='font-bold text-xl text-gray-500 '>Leadership Expert · Bestselling Author · Humanitarian</p>
                    <p className='text-black text-lg'>For over 30 years, Robin Sharma has advised Fortune 100 CEOs, billionaire entrepreneurs, championship athletes, and even royalty on the principles of elite performance and purposeful leadership. His books, including The Monk Who Sold His Ferrari and The 5AM Club, have sold more than 25 million copies in 96 countries.</p>

                    <p className='text-black text-xl'>Robin's work extends beyond professional achievement. Through The Robin Sharma Foundation for Children, he supports children affected by leprosy worldwide. A portion of every copy of The 5AM Club sold goes directly to this cause. When you win, they win.</p>

                </div>
            </section>

            <section className='flex flex-col justify-center items-center gap-5 py-20'>
                <p className='text-6xl text-black '>#1 Bestselling Author</p>
                <p className='text-gray-500 text-2xl font-bold pt-5'>Over 25 Million Books Sold In 96+ Nations</p>
                <div className='flex justify-center items-center gap-2 w-50 bg-black text-lg px-2 py-1 text-white hover:bg-orange-400 transition-colors duration-500'>ALL BOOKS<div className='flex justify-center items-center'><ArrowForwardIcon sx={{fontSize:25 }}/></div></div>
                <div className='h-[500px] w-[800px]'>
                    <img className='h-full w-full' src={robinsharmabook} />
                </div>
            </section>
            <section className=' flex flex-col justify-center items-center gap-5 py-20 bg-gray-100'>
                <p className='text-3xl text-black'>Personal Mentorship from Robin Sharma, Direct to Your Inbox</p>
                <p className='text-1xl text-black text-light text-center px-60'>Gain access to Robin’s powerful insights to lead brilliantly, perform at your peak, and create lasting impact – all shared to support your highest work and best life.</p>
                <div className='flex pt-10'>
                    {/* <div className='bg-white w-[200px] h-[10px]'>
                        <input placeholder='EMAIL ADDRESS' className="" />
                    </div> */}
                    <input placeholder='EMAIL ADDRESS' className="w-50 pl-3 py-0.5 text-black border border-gray-500 bg-white" />
                    <div className='flex justify-center items-center gap-2 w-60 bg-black text-lg px-2 py-1 text-white hover:bg-orange-400 transition-colors duration-500'>YES, SUBSCRIBE NOW <div className='flex justify-center items-center'><ArrowForwardIcon sx={{fontSize:25 }}/></div></div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Home