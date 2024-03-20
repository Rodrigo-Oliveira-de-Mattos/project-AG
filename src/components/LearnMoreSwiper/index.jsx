import { Swiper, SwiperSlide } from 'swiper/react'
import "./styleLearnMoreSwiper.css"

const LearnMoreSwiper = ( { images } ) => {
    return (
        <div className="learn-more__slider">
            <Swiper
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 30,
                    depth: 70,
                    modifier: 2.5,
                    slideShadows: true
                }}
                grabCursor
                mousewheel
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={{ Swiper: true }}
                slidesPerView= 'auto'
                centeredSlides
                navigation
                keyboard
                pagination={{clickable: true, dynamicBullets: true,  }}
                className="swiper-container">

                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="AG - img" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default LearnMoreSwiper