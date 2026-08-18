import { Footer } from "../components/Footer"
import aboutrobinsharmahero from "../assets/robinsharmaspeaking.jpg"
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const speaking = () => {
  return (
    <div className="pt-30">
      <section className="w-full h-[400px] xl:h-[600px]">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl'>Bring the Rarefied Insight and Energy of a Global Leadership Icon to Your Stage</p>
          <p className='text-white text-[16px] xl:text-2xl'>Great events do more than inform. They transform.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>Robin Sharma delivers a world-class keynote experience that elevates thinking, ignites possibility, and moves organizations to perform at their highest level.</p>
          <div className='flex justify-center items-center gap-2 sm:w-80 bg-white text-lg px-2 py-1 text-black hover:bg-orange-400 transition-colors duration-500 cursor-pointer hover:text-white' onClick=''>Inquire About Availabilitys<div className='flex justify-center items-center'><ArrowForwardIcon sx={{ fontSize: 25 }} /></div></div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default speaking
