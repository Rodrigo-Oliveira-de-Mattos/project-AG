import styled from "styled-components"

const HeroImg = () => {
    return (
        <Div className="hero__img" id="hero__img">
            <Color className="hero__img--bg-color"></Color>
            <Img className="hero__img--img"></Img>
        </Div>
    )
}

export default HeroImg

const Div = styled.div`
    flex: 0.5;
    height: 100%;
    max-width: 100%;
    position: relative;
    display: grid;
    place-items: center;
    `

const Img = styled.div`
    background: url(../../public/hero/ag-hero.png) no-repeat;
    filter: drop-shadow(0px 0px 10px var(--tema-claro-6));
    background-size: contain;
    position: absolute;
    height: 70%;
    aspect-ratio: 1/1;
    background-position: right, center;
`

const Color = styled.div`
    height: 90%;
    aspect-ratio: 1/1;
    position: absolute;
    animation: borderlive infinite 15s linear;
    background: linear-gradient(
    180deg,
    var(--tema-claro-4) 10%,
    var(--tema-claro-3) 30%,
    transparent
    );
    box-shadow: 0px 0px 25px #032c456c,  0px 0px 70px var(--tema-claro-5) inset;
    opacity: 0.7;
`