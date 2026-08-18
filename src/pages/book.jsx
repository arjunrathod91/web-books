import { Footer } from "../components/Footer"
import aboutrobinsharmahero from "../assets/robinsharmabooks.jpg"

export default function book() {
  return (
    <div className="pt-30">
      <section className="w-full h-[400px] xl:h-[600px]">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl'>With Over 25 Million Books Sold In 96+ Nations</p>
          {/* <p className='text-white text-[16px] xl:text-2xl'>Millions of listeners worldwide use this podcast as their daily operating system for excellence.</p> */}
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>For over 30 years, Robin Sharma has distilled the rare-air methodologies he uses to mentor billionaires, Fortune 100 CEOs, and elite performers into books that have sparked a global movement. With more than 25 million copies sold in 92 languages, these works are not simply books — they are field manuals for personal mastery and professional excellence. Readers across the globe, from everyday professionals to rock stars and royalty, use these methods to elevate their lives and leadership.</p>
          {/* <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>This podcast delivers the mental models, daily routines, and productivity tactics that separate world-class performers from the rest. You’ll learn how to accelerate your performance, grow your leadership, build your business, and scale your impact.</p> */}
        </div>
      </section>
      <Footer />
    </div>
  )
}
