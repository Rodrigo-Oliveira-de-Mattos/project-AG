import { styled } from "styled-components"
import TogglerTitles from "../TogglerTitles"
import BtnLearnMore from "../BtnLearnMore"

const MemberCard = ({ birth, img, instagram, name, tag, route }) => {
    const calculateAge = (birthDate) => {
        const dob = new Date(birthDate)
        const today = new Date()
        let age = today.getFullYear() - dob.getFullYear()
        let ageAdjustment = today.getMonth() - dob.getMonth()
        if (ageAdjustment < 0 || (ageAdjustment === 0 && today.getDay() < dob.getDay())) {
            age--
        }
        return age
    }

    const birthDate = new Date(birth)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <Card className="cards-members__girls--card">
            <Img className="card-img"><a href={instagram} target="_blank"><img src={img} alt={name} /></a></Img>

            <Name className="card-name"><TogglerTitles optionValue={name} id={"member-name"} /></Name>

            <Age className="card-age">{calculateAge(birth)}</Age>

            <Birth className="card-birth">
                <select name="birth-date" id={"birth-date-" + tag}>
                    <option value="us">
                        {birthDate.toLocaleDateString("en-US", options)}
                    </option>
                    <option value="jp">
                        {birthDate.toLocaleDateString("ja-JP-u-ca-Japanese", options)}
                    </option>
                    <option value="br">
                        {birthDate.toLocaleDateString("pt-BR", options)}
                    </option>
                </select>
            </Birth>

            <Tag className="card-tag">{tag}</Tag>

            <Btn className="card-btn"><BtnLearnMore className="learn-more-members" route={route} /></Btn>
        </Card>
    )
}

export default MemberCard

const Card = styled.ul`
    letter-spacing: 2px;
    background-color: var(--tema-claro-1);
    width: 30rem;
    height: 45rem;
    padding: 3rem 2rem;
    border-radius: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 3.2em;
`

const Img = styled.li`
img {
    width: 10rem;
    border-radius: 999px;
    aspect-ratio: 1;
    border: 6px solid var(--tema-claro-7);
    transition: 0.3s ease;
    &:hover {
      transform: scale(1.06);
      transition: 0.3s ease;
      border: 3px solid var(--tema-claro-red);
    }
  }
`

const Name = styled.li`
select{
    text-align: center;
        font-weight: bold;
        cursor: pointer;
        color: var(--tema-claro-6);
        font-size: 1em;
        border: none;
        background-color: transparent;
        &:focus-visible {
          outline: none;
        }
}
`

const Age = styled.li`
cursor: default;
    color: var(--tema-claro-5);
    font-size: 0.8em;
`

const Birth = styled.li`
select{
font-weight: bold;
    cursor: pointer;
    color: var(--tema-claro-red);
    font-size: 0.5em;
    background-color: transparent;
    border: none;
    text-align: center;
    &:focus-visible {
      outline: none;
    }
}
`

const Tag = styled.li`
cursor: default;
    color: var(--tema-claro-6);
    font-size: 0.7em;
`

const Btn = styled.li`
display: flex;
    justify-content: center;
    
    .learn-more-members {
      background-color: var(--tema-claro-5);
      border-radius: 999px;
      cursor: pointer;
      height: 4rem;
      width: 20rem;
      font-size: 0.5em;
      letter-spacing: 2px;
      transition: 0.3s ease;
      display: grid;
      place-items: center;
      &:hover {
        transform: scale(1.2);
        background-color: var(--tema-claro-6);
        transition: 0.3s ease;
        letter-spacing: 5px;
      }

      p {
        color: var(--tema-claro-1);
      }
    }
`