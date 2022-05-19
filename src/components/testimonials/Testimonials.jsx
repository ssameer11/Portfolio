import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/testimonial1.jfif'
import AVTR2 from '../../assets/testimonial2.jfif'
import AVTR3 from '../../assets/testimonial3.jfif'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {avatar: AVTR1,
  name: 'Vivek Sonar',
  review: 'Sameer is an excellent partner for learning together with. He is a very energetic person and thinks out of the box, which makes the processof learning with him more fun.'
},
{avatar: AVTR2,
  name: 'Jiten Tayede',
  review: 'Sameer has good insights on some topics which is very helpful some times.'
},
{avatar: AVTR3,
  name: 'Ketan Sarda',
  review: 'Sameer is a very energetic person, he is thorough while learning and researching and attentive to detail.'
}
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials