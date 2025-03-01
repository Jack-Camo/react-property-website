import React, { useEffect, useRef, useState } from 'react';
import styles, { layout } from "../style"
import { dalton_room_1, lake_district_langdales } from "../assets"
import Rellax from "rellax";

const About = () => {
  const sectionRef = useRef(null);
  const rellaxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && !rellaxRef.current) {
      rellaxRef.current = new Rellax(".rellax", {
        speed: -2,
        center: true,
      });
    }
  }, [isVisible]);

  return (
    <section id='about' ref={sectionRef} className='relative overflow-hidden'>
      <div 
        className={`absolute bg-cover bg-center parallax rellax`}
        style={{
          backgroundImage: `url(${lake_district_langdales})`,
          zIndex: -1,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          minHeight: '200%',
          top: '-50%',
          width: '100%',
        }}
        data-rellax-speed='2'
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