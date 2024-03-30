import styled from "styled-components"

const BtnChangeSection = () => {

    return <Arrow className="btn-change-section" href="#members">⬇️</Arrow>
}

export default BtnChangeSection

const Arrow = styled.a`
position: absolute;
bottom: 0;
font-size: 5em;
z-index: 4;
animation: arrow 1.5s infinite ease-in-out;
`