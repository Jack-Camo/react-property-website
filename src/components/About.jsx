import React, { useEffect } from 'react';
import styles, { layout } from "../style"
import { dalton_room_1, lake_district_langdales } from "../assets"
import Rellax from "rellax";

const About = () => {
  useEffect(() => {
    // Initialize the Rellax parallax effect
    new Rellax('.rellax');
  }, []);
  
  return (
    <section id='about' className='relative overflow-hidden'>
      <div 
        className={`absolute inset-0 bg-cover bg-center parallax rellax`}
        style={{backgroundImage: `url(${lake_district_langdales})`, zIndex: -1}}
        data-rellax-speed="1"
      ></div>      
      <div 
        className={`${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`xl:max-w-[1340px] w-full bg-tertiary p-8 rounded-2xl my-20`}> 
          <div className={`${layout.sectionNoPadding} z-10`}>
            <div className={layout.sectionInfo}>
              <p className={`${styles.paragraph} small-text-gradient-gold`}>Who we are</p>
              <h2 className={styles.heading2}>About Us</h2>
            </div>

            <div className={layout.sectionInfo}>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse laudantium officiis fugiat natus molestias facere dolorum nihil ex, perspiciatis non atque ipsa nesciunt dolores dignissimos et quia necessitatibus error alias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About