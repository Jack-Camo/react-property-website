import React from 'react'
import styles from './style';
import { Navbar, Hero } from './components';

const App = () => (
  <div className='bg-primary w-full h-screen overflow-hidden flex flex-col'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} flex-1`}>
      <Hero />
    </div>
  </div>
);

export default App