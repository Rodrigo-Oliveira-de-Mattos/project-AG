import HeroInfos from "../../components/HeroInfos"
import HeroSwiper from "../../components/HeroSwiper"
import BtnChangeSection from "../../components/BtnChangeSection"
import styled from "styled-components"

const Hero = () => {
    return (
        <SectionHero className="hero" id="hero">
            <HeroSwiper />
            <HeroInfos />
            <BtnChangeSection></BtnChangeSection>
        </SectionHero>
    )
}

const SectionHero = styled.section`
  background-color: #d5deef;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  height: calc(100vh - 2rem);
`

export default Hero