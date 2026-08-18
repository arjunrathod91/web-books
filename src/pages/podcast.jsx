import { Footer } from "../components/Footer"
import aboutrobinsharmahero from "../assets/robinsharmapodcast.jpg"


function podcast() {
  return (
    <div className="pt-30">
      <section className="w-full h-[400px] xl:h-[600px]">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl'>The Daily Mastery Podcast</p>
          <p className='text-white text-[16px] xl:text-2xl'>Millions of listeners worldwide use this podcast as their daily operating system for excellence.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>For over 30 years, Robin has mentored titans of industry, sports superstars, and elite performers. Each day, he distills what he has taught them into powerful episodes you can apply immediately.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>This podcast delivers the mental models, daily routines, and productivity tactics that separate world-class performers from the rest. You’ll learn how to accelerate your performance, grow your leadership, build your business, and scale your impact.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default podcast