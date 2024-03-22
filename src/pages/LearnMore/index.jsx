import styled from "styled-components"
import ToggleTitle from "../../components/TogglerTitles"
import { Link } from "react-router-dom"
import "./styleLearnMore.css"
import LearnMoreSwiper from "../../components/LearnMoreSwiper"

const LearnMore = ({ data }) => {
    const calculateAge = () => {
        const dob = new Date(data.additionalInfo1)
        const today = new Date()
        let age = today.getFullYear() - dob.getFullYear()
        let ageAdjustment = today.getMonth() - dob.getMonth()
        if (ageAdjustment < 0 || (ageAdjustment === 0 && today.getDay() < dob.getDay())) {
            age--
        }
        return age
    }

    console.log(calculateAge());

    return (
        <>
            <HeaderLearnMore className="header-learn-more">
                <Link to="/" className="header-learn-more__back">{'< Back'}</Link>
                {/* criar uma pagina para galeria */}
                <ToggleTitle optionValue={data.title} id="learn-more-title" />
                <a className="header-learn-more__ig" href={data.url.instagram} target="_blank">
                    <img className="ig-img" src={data.url.img} alt="Instagram" />
                </a>
            </HeaderLearnMore>

            <main className="main-learn-more">
                <div className="learn-more">
                    <Link to="/">
                        <LearnMoreSwiper images={data.swipe} />
                    </Link>

                    <div className="additional-info">
                        <ul>
                            {data.id === "AG" ? <li className="record-company"><a href={data.additionalInfo1.url} target="_blank">{data.additionalInfo1.recordCompany}</a></li> : <li className="dates"><p>{data.additionalInfo1}</p></li>}
                            {data.id === "AG" ? <li className="record-company"><a href={data.additionalInfo2.url} target="_blank">{data.additionalInfo2.recordCompany}</a></li> : <li className="dates"><p>{calculateAge()}</p></li>}
                        </ul>
                    </div>

                    <article>
                        <div className="texts">
                            {data.article.map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                )
                            )}
                        </div>
                        <div className="fonts">
                            {data.fonts.map(
                                (font, index) => (
                                    <a href={font.url} target="_blank" key={index}><i>{font.font}</i></a>
                                )
                            )}
                            <i><img src="/public/logo/AG.png" alt="" /></i>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

const HeaderLearnMore = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem 4rem;
    z-index: 4;
    letter-spacing: 2px;
    font-size: 2rem;
    background-color: var(--tema-claro-2);
`

export default LearnMore