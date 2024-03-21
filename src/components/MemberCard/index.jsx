import "./styleMemberCard.css"
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
        <ul className="cards-members__girls--card">
            <li className="card-img"><a href={instagram} target="_blank"><img src={img} alt={name} /></a></li>
            <li className="card-name">
                <TogglerTitles optionValue={name} id={"member-name"} />
            </li>
            <li className="card-age">{calculateAge(birth)}</li>
            <li className="card-birth">
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
            </li>
            <li className="card-tag">{tag}</li>
            <li className="card-btn">
                <BtnLearnMore className="learn-more-members" route={route} />
            </li>
        </ul>
    )
}

export default MemberCard