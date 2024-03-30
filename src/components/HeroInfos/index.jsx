import { titleAg, prevInfo, prevMembers, links } from "../../util/json/hero/hero.json"
import Toggler from "../TogglerTitles"
import LinksWithTitle from "../LinksWithTitle"
import BtnLearnMore from "../BtnLearnMore"
import styled from "styled-components"

const HeroInfos = () => {
    return (
        <Article className="hero__infos">
            <Toggler optionValue={titleAg} id="hero-title" />
            <InfosTexts className="hero__infos--texts">
                <PrevInfo>{prevInfo}</PrevInfo>
                <LinksWithTitle array={prevMembers} className={"members"} />
            </InfosTexts>
            <InfosLinks className="hero__infos--links">
                <LinksWithTitle array={links} className={"links"} />
                <BtnLearnMore className="learn-more-presentation" route="atarashii-gakko!/learn-more" />
            </InfosLinks>
        </Article>
    )
}

export default HeroInfos

const Article = styled.article`
    gap: 2rem;
    max-height: 100svh;
    width: min(100svw, 800px);
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
    font-size: 2.5em;

    ul {
    display: flex;
    }
    z-index: 2;

    .hero-title.toggle-title {
        align-self: center;
        width: fit-content;
        height: 8rem;
        display: flex;
        place-items: center;
        color: var(--tema-claro-6);
        transition: 0.3s ease;

        &:hover {
          transform: scale(1.05);
          transition: 0.3s ease;
        }

        select {
            text-align: center;
            color: var(--tema-claro-6);
            font-weight: bold;
            background: transparent;
            height: 100%;
            font-size: 1.7em;
            letter-spacing: 2px;
            border: none;
            cursor: pointer;

            &:focus-visible {
              outline: none;
            }

            option {
                background-color: var(--tema-claro-2);
            }
        }
    }
`

const InfosTexts = styled.div`
    align-self: center;
    text-align: center;
    letter-spacing: 2px;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .links__members {
        display: flex;
        width: 100%;
    
        li {
          flex: 1;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
    
          a {
            color: var(--tema-claro-red);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
    
            .icon {
              width: 5rem;
            }
          }
          
          &:hover {
            transform: scale(1.1);
          }
        }
      }
`

const PrevInfo = styled.p`
    color: var(--tema-claro-7);
    text-shadow: 0 0 20px var(--tema-claro-1);
`

const InfosLinks = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    width: 100%;
    gap: 2rem;

    ul {
    gap: 3rem;

    li {
        transition: .2s ease;

        a {
        display: flex;
        }

        .icon {
        border-radius: 50%;
        width: 7rem;
        }

        &:hover {
        .icon {
            transform: scale(1.1);
            transition: .2s ease;
        }
        }
    }
    }
    
    .learn-more-presentation {
        padding: 1.2rem 2.5rem;
        border-radius: 100vw;
        cursor: pointer;
        border: none;
        transition: 0.3s ease;
        display: grid;
        place-items: center;
        background: var(--tema-claro-red);
        width: 20rem;
    
        p {
          transition: 0.3s ease;
          color: var(--tema-claro-1);
          letter-spacing: 2px;
        }
    
        &:hover {
          transform: scalex(1.2);
          transition: 0.3s ease;
          background: var(--tema-claro-6);
          p {
            transition: 0.3s ease;
            transform: scalex(0.9);
          }
        }
    }
`