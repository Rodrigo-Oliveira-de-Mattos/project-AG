import HeroInfos from "../../components/HeroInfos"
import BtnChangeSection from "../../components/BtnChangeSection"
import "./styleHero.css"

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__img">
                <div className="hero__img--bg-color"></div>
                <div className="hero__img--img"></div>
            </div>
            <HeroInfos />
            <BtnChangeSection></BtnChangeSection>
        </section>
    )
}

export default Hero