import styles, { layout } from "../style"
import { dalton_room_1, barrow_room_3 } from "../assets"
import CardSlideshow from "./CardSlideshow"

const Property = () => (
  <section id='properties'>
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Explore Our <br className='sm:block hidden' /> Properties</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse laudantium officiis fugiat natus molestias facere dolorum nihil ex, perspiciatis non atque ipsa nesciunt dolores dignissimos et quia necessitatibus error alias.
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img src={dalton_room_1} alt='Bedroom' className='w-full h-auto' /> {/* max-w-[500px] max-h-[500px] */}
      </div>
    </div>

    <div className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
          <img src={barrow_room_3} alt='Bedroom' className='w-full h-auto' /> {/* max-w-[500px] max-h-[500px] */}
      </div>

      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse laudantium officiis fugiat natus molestias facere dolorum nihil ex, perspiciatis non atque ipsa nesciunt dolores dignissimos et quia necessitatibus error alias.
        </p>
      </div>
    </div>

    <CardSlideshow />
  </section>  
)

export default Property