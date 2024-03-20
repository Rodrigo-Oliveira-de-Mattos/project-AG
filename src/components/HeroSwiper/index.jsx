import { Swiper, SwiperSlide } from 'swiper/react'
import { slide } from '../../util/json/hero/hero.json'
import "./styleHeroSwiper.css"



const HeroSwiper = () => {
    return (
        <div className="hero__slider">
            <Swiper
            // criar uma condição que a altura da tela tem que ta em 0 para o mousewhel funcionar
                mousewheel
                grabCursor
                autoplay={{delay: 10000, disableOnInteraction: false}}
                loop={{Swiper: true}}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {
                    slide.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="AG - img" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default HeroSwiper