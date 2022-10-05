import React from 'react';
import { images, data } from '../../constants'
import { SubHeading } from '../../components';
import './Laurels.css';



const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>


      <div className='app__laurels_awards'>
        {
          data.awards.map((award, index) => (
            <div className='app__laurels_awards-card'>
              <img src={award.imgUrl} alt='award' />
              <div className='app__laurels_awards-card_content'>
                <p className='p__cormorant' style={{ color: '#DCCA87' }}>{award.title}</p>
                <p className='p__cormorant'>{award.subtitle}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>

    <div className='app__wapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
