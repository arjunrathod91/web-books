import { Footer } from "../components/Footer"
import aboutrobinsharmahero from "../assets/robinsharmablog.jpg"

export default function blog() {
  return (
    <div className="pt-30">
      <section className="w-full h-[400px] xl:h-[600px]">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl'>Daily Wisdom for Your Rise</p>
          <p className='text-white text-[16px] xl:text-2xl'>Robin Sharma’s blog is one of the most widely read digital resources on personal mastery and leadership in the world.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>Join over 100 million readers worldwide who apply these insights to elevate their work and their lives.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
