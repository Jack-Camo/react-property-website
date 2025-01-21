import styles from "../style";
import { lake_district_langdales } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col flex-1 h-full w-full`}>
      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img 
          src={lake_district_langdales} 
          alt="Lake District Langdales" 
          className="absolute top-0 left-0 h-full w-full z-5 object-cover" 
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-65 z-10" />

        <div className={`flex ${styles.boxWidth} ${styles.flexCenter} z-20 xl:px-0 sm:px-16 px-6 text-center`}>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Find The <br className='sm:block hidden'/> {" "}
            <span className='text-gradient-gold'>Perfect</span> Rental
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero