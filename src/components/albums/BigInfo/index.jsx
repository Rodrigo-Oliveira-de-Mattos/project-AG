import styled from "styled-components"

const BigInfo = ({ info }) => {
    return (
        <DivInfos className="big-info" id="big-info">
            <Close id="close-modal">X</Close>
            <Format className="big-info__format">
                <p>{info.format}</p>
            </Format>
            <Infos className="big-info__infos">
                <p>{info.info.presentation}</p>
                <i><a href={info.font.url} target="_blank">{info.font.name}</a></i>
            </Infos>
            <Record className="big-info__record-company">{info.recordCompany}</Record>
            <Div className="big-info__div">
                <div className="big-info--tracks">
                    <p>🎵</p>
                    <p>{info.tracks}</p>
                </div>
                <div className="big-info--year">
                    <p>💘</p>
                    <p>{info.year}</p>
                </div>
            </Div>
        </DivInfos>
    )
}

export default BigInfo

const DivInfos = styled.div`
background-color: var(--tema-claro-1);
box-shadow: 0 0 17rem 1rem var(--tema-claro-2) inset, 0 0 1rem var(--tema-claro-4);
height: 63rem;
max-width: 40rem;
margin: 0 auto;
padding: 5rem;
border-radius: 1.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
font-size: 3rem;
gap: 4rem;
cursor: default;
`
const Format = styled.div`
font-size: 1.5em;
text-align: start;
color: var(--tema-claro-6);
font-weight: bolder;
`
const Infos = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
letter-spacing: 0.5px;
p {
font-size: 0.77em;
color: var(--tema-claro-7);
}
i {
width: 100%;
text-align: end;

a {
    font-size: 0.7em;
    text-decoration: underline;
    color: var(--tema-claro-5);
    &:hover{
    color: var(--tema-claro-3);
    }
}
}
`
const Record = styled.div`
font-size: 0.7em;
text-align: center;
background-color: var(--tema-claro-red);
color: var(--tema-claro-1);
border-radius: 100vw;
padding: 1rem;
`
const Div = styled.div`
display: flex;
justify-content: space-evenly;
gap: 2rem;

.big-info--year,
.big-info--tracks {
  display: flex;
  align-items: end;
  width: 13rem;
  gap: 2rem;
  transition: .2s ease-in-out;
  &:hover {
    p:nth-child(odd){
      transform: scale(1.2);
      transition: .2s ease-in-out;
    }
  }
}

.big-info--year {
  justify-content: end;
}
.big-info--tracks {
  justify-content: start;
}
`

const Close = styled.i`
  position: absolute;
  top: -1rem;
  right: -1rem;
  background-color: var(--tema-claro-red);
  color: var(--tema-claro-1);
  box-shadow: -1px 0 1rem -1px var(--tema-claro-5);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  place-items: center;
  cursor: pointer;
  display: none;

  &:hover{
    background-color: var(--tema-claro-7);
    transform: scale(1.1);
  }
`