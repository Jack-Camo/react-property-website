import styles from './style';
import { Navbar, Hero, Property, Contact, About, Companies, Footer } from './components';

const App = () => (
  <div>
  <div className='bg-primary w-full h-screen overflow-hidden flex flex-col'>
    <div className='w-full h-[95%] flex flex-col'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} flex-1`}>
        <Hero />
      </div>
    </div>
  </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Property />
      </div>
    </div>

    <About />

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Companies />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App