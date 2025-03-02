import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles, { layout } from "../style";
import { features, property_slides } from '../constants';
import FeatureCard from './FeatureCard';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
]

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  width: '400px'
}

const CardSlideshow = () => {
  return (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        {/* <Slide>
          {property_slides.map((slide, index) => {
            console.log(slide)
            return (
            <div key={slide.id} className='flex flex-1'>
              <div style={{...divStyle, backgroundImage: `url(${slide.image})`}}>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          )})}
        </Slide> */}

        {/* <Slide>
          <div>
            <div style={{backgroundImage: `url(${slideImages[0].url})`}} className='flex flex-1'>

            </div>
          </div>
        </Slide> */}

        <img src={property_slides[1].image} alt='Bedroom' className='w-full h-auto object-cover max-h-[500px] ml-4' /> {/* max-w-[500px] max-h-[500px] */}
        
      </div>
    </div>

    // <div className={layout.section}>
    //   <div className={`${layout.sectionImg}`}>
    //     <Slide>
    //       {slideImages.map((slideImage, index)=> (
    //           <div key={index}>
    //             <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
    //               <span style={spanStyle}>{slideImage.caption}</span>
    //             </div>
    //           </div>
    //         ))} 
    //       </Slide>
    //     </div>
    // </div>
  )
}

export default CardSlideshow