import { titleAg, prevInfo, prevMembers, links } from "../../util/json/hero/hero.json"
import Toggler from "../TogglerTitles"
import "./styleHeroInfos.css"
import LinksWithTitle from "../LinksWithTitle"
import BtnLearnMore from "../BtnLearnMore"

const HeroInfos = () => {
    return (
        <article className="hero__infos">
            <Toggler optionValue={titleAg} id="hero-title" />
            <div className="hero__infos--texts">
                <p>{prevInfo}</p>
                <LinksWithTitle array={prevMembers} className={"members"}/>
            </div>
            <div className="hero__infos--links">
                <LinksWithTitle array={links} className={"links"} />
                <BtnLearnMore className="learn-more-presentation" route="atarashii-gakko!/learn-more"/>
            </div>
        </article>
    )
}

export default HeroInfos