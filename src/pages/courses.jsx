import { Footer } from "../components/Footer"
import aboutrobinsharmahero from "../assets/robinsharmacourses.jpg"

export default function courses() {
  return (
    <div className="pt-30">
      {/* <section className="w-full h-full">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl'>World-Class Mentoring Methodologies - Now Available to You</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>For over three decades, Robin Sharma had the privilege of mentoring Fortune 500 CEOs, entrepreneurs, and elite performers; refining practical systems through thousands of hours of real-world application.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>These digital training programs are designed to bring that same depth of mentoring into your daily life. They allow you to engage with the work at your own pace, from the privacy of your home, while applying the principles in real time.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>Each course delivers advanced frameworks, daily implementation practices, and calibrated tools typically reserved for private mentoring, supporting lasting progress in productivity, leadership, wealth, and life mastery.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>Practical systems for doing the work — consistently, deeply, and on your own terms.</p>
        </div>
      </section> */}
      <section className="w-full h-[400px] xl:h-[600px]">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl text-center sm:text-left'>World-Class Mentoring Methodologies - Now Available to You</p>
          <p className='text-white text-[16px] xl:text-2xl text-center sm:text-left'>For over three decades, Robin Sharma had the privilege of mentoring Fortune 500 CEOs, entrepreneurs, and elite performers; refining practical systems through thousands of hours of real-world application.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>These digital training programs are designed to bring that same depth of mentoring into your daily life. They allow you to engage with the work at your own pace, from the privacy of your home, while applying the principles in real time.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
