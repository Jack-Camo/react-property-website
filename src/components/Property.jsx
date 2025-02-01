import styles, { layout } from "../style"
import { dalton_room_1 } from "../assets"

const Property = () => (
  <section id='properties' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Explore Our <br className='sm:block hidden' /> Properties</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse laudantium officiis fugiat natus molestias facere dolorum nihil ex, perspiciatis non atque ipsa nesciunt dolores dignissimos et quia necessitatibus error alias.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={dalton_room_1} alt='Bedroom' className='w-full h-auto' /> {/* max-w-[500px] max-h-[500px] */}
    </div>
  </section>  
)

export default Property