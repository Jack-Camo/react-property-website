import styles from "../style";
import { lake_district_langdales } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      {/* <div className="w-full h-[500px] bg-cover bg-center relative flex"> */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={lake_district_langdales} alt="Lake District Langdales" className="h-[100%] w-[100%] relative z-[5]" />
      </div>
    </section>
  )
}

export default Hero