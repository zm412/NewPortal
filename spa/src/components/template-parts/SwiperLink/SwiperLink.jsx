// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperLinkPortalImg from '../../../assets/img/swiperLinkPortalImg.png';
import './SwiperLink.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';

const SwiperLink = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <div>
            <a href="https://zm410.pythonanywhere.com" target="_blank" rel="noopener noreferrer">
                <img src={swiperLinkPortalImg} alt="Preview of Example" className="slide-img" />
            </a>
          </div>
          <div className="swiper-line"></div>
      </SwiperSlide>

      <SwiperSlide>
          <div></div>
          <div className="swiper-line"></div>
      </SwiperSlide>

      <SwiperSlide>
          <div></div>
          <div className="swiper-line"></div>
      </SwiperSlide>

      <SwiperSlide>
          <div></div>
          <div className="swiper-line"></div>
      </SwiperSlide>

      <SwiperSlide>
          <div></div>
          <div className="swiper-line"></div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperLink;
