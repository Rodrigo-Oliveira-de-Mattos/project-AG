import "./styleMemberCard.css"
import TogglerTitles from "../TogglerTitles"
import BtnLearnMore from "../BtnLearnMore"

const MemberCard = ({ age, birth, img, instagram, name, tag, route }) => {
    return (
        <ul className="cards-members__girls--card">
            <li className="card-img"><a href={instagram} target="_blank"><img src={img} alt={name} /></a></li>
            <li className="card-name">
                <TogglerTitles optionValue={name} id={"member-name"} />
            </li>
            <li className="card-age">{age}</li>
            <li className="card-birth">{birth}</li>
            <li className="card-tag">{tag}</li>
            <li className="card-btn">
                <BtnLearnMore className="learn-more-members" route={route}/>
            </li>
        </ul>
    )
}

export default MemberCard