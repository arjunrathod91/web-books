import { Footer } from "../components/Footer"
import aboutrobinsharmahero from "../assets/aboutrobinsharmahero.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <div className="mt-30">
      <section className="w-full h-[400px] xl:h-[600px]">
        <img className="relative h-full w-full object-cover object-[80%_50%]" src={aboutrobinsharmahero} />
        <div className="absolute top-30 left-0 bg-black/20"></div>
        <div className="absolute top-30 left-0 h-[400px] xl:pl-20 sm:w-[50%] xl:h-[600px] w-full p-5 flex justify-center items-center sm:items-start flex-col gap-3 xl:gap-5">
          <p className='text-white text-2xl xl:text-4xl'>ABOUT ROBIN SHARMA</p>
          <p className='text-white text-[16px] xl:text-2xl'>Humanitarian. Bestselling Author. Leadership Authority.</p>
          <p className='text-white text-[14px] xl:text-xl text-center sm:text-left'>For over thirty years, Robin Sharma has devoted his life to one mission-essential cause: helping human beings and organizations around the world Lead Without a Title. He has served as a trusted guide to the world’s most exceptional leaders – from Fortune 100 CEOs and elite entrepreneurs to NASA scientists and senior executives at Nike. His work is not merely about instruction; it is about mastering performance, building legendary teams, and creating organizations that dominate their industries.</p>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <p className="text-white"> FOLLOW ROBIN :</p>
              <div className="flex gap-2">
                <div className="text-white"><FacebookIcon /></div>
                <div className="text-white"><InstagramIcon /></div>
                <div className="text-white"><YouTubeIcon /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About