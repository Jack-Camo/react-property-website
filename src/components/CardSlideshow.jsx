import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles, { layout } from "../style";
import { features, property_slides } from '../constants';
import FeatureCard from './FeatureCard';

const CardSlideshow = () => {
  return (
    <div className={layout.section}>
      <div className={`${layout.sectionInfo} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <Slide>
          {property_slides.map((slide, index) => {
            console.log(slide)
            return (
            <div key={slide.id} className='flex w-[200px] h-[200px]'>
              <div style={{ backgroundImage: `url(${slide.image})`}} className='flex w-full h-full bg-cover bg-center'>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          )})}
        </Slide>
      </div>
    </div>
  )
}

export default CardSlideshow