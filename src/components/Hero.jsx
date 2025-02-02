import styles from "../style";
import { lake_district_langdales, barrow_room_3, dalton_kitchen } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-1 h-full w-full`}>
      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img 
          src={dalton_kitchen} 
          alt="Lake District Langdales" 
          className="absolute top-0 left-0 h-full w-full z-5 object-cover" 
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-65 z-10" />

        <div className={`z-20  ${styles.boxWidth} flex-col xl:px-0 sm:px-16 px-6 `}>

          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Find The <br className='sm:block hidden'/> {" "}
            <span className='text-gradient-gold'>Perfect</span> Room
          </h1>

          <p className={`${styles.paragraph} max-w-[520px] mt-8`}>Providing affordable room rental in the Barrow-in-Furness area. Perfect for professionals working at BAE Systems, Furness General Hospital or other local contracting agencies.</p>

          <div className="flex flex-row mt-10">
            <Button 
              text={"View Properties"}
              styles={`bg-gold-gradient`}
            />
            <Button 
              text={"Contact Us"}
              styles={`ml-10 bg-gold-grad-button`}
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero