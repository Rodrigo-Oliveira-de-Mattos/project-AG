import styled from "styled-components"
import ToggleTitle from "../../components/TogglerTitles"
import { Link } from "react-router-dom"
import "./styleLearnMore.css"
import LearnMoreSwiper from "../../components/LearnMoreSwiper"

const LearnMore = ( { data } ) => {
    return (
        <>
            <HeaderLearnMore className="header-learn-more">
                <Link to="/" className="header-learn-more__back">{'< Back'}</Link>
                {/* criar uma pagina para galeria */}
                <ToggleTitle optionValue={data.title} id="learn-more-title"/>
                <a className="header-learn-more__ig" href={data.url.instagram} target="_blank">
                    <img className="ig-img" src={data.url.img} alt="Instagram" />
                </a>
            </HeaderLearnMore>

            <main className="main-learn-more">
                <LearnMoreSwiper images={data.swipe}/>

                <div>
                    <ul>
                        <li><p>{data.additionalInfo1}</p></li>
                        <li><p>{data.additionalInfo2}</p></li>
                    </ul>
                </div>

                <article>{data.article}</article>


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
`

export default LearnMore