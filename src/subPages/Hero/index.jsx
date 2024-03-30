import HeroInfos from "../../components/HeroInfos"
import HeroImg from "../../components/HeroImg"
import BtnChangeSection from "../../components/BtnChangeSection"
import styled from "styled-components"

const Hero = () => {
    return (

        <SectionHero className="hero" id="hero">
            <BackgroundImg className="bg-img-hero"></BackgroundImg>
            <BackgroundColor className="bg-color-hero"></BackgroundColor>
            <HeroImg />
            <HeroInfos />
            <BtnChangeSection></BtnChangeSection>
        </SectionHero>

    )
}

export default Hero

const SectionHero = styled.section`
    padding-top: 10rem;
    display: flex;
    justify-content: space-evenly;
    height: calc(100vh - 2rem);
    z-index: 2;
`

const BackgroundImg = styled.div`
  background: url(../../public/background/ag-hero.jpg) no-repeat;
  background-position: left;
  background-attachment: fixed;
  background-size: cover;
  z-index: -1;
  height: calc(100vh - 2rem);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(6px);
`

const BackgroundColor = styled.div`
    background: linear-gradient(
      0deg,
      var(--tema-claro-4) 20%,
      var(--tema-claro-1) 60%
    );
    background-color: var(--tema-claro-3);
    width: 100%;
    height: calc(100vh - 2rem);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
`