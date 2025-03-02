import styles from "../style";
import { logo_gold } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} pb-4 flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
        2025 © Company. All rights reserved.
      </p>
    </div>
  </section>
)

export default Footer