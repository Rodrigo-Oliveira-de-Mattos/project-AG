import styled from "styled-components"
import "./styleHeader.css"
import { useState, useEffect } from "react"

function Header() {

    const [heroClass, setHeroClass] = useState("header-menu__sections active")
    const [membersClass, setMembersClass] = useState("header-menu__sections")
    const [albunsClass, setAlbunsClass] = useState("header-menu__sections")
    const [musicClass, setMusicClass] = useState("header-menu__sections")
    const windowScroll = window.scroll();

    // se a altura da tela estiver entre 0 e heroHeight, então "header-menu__sections active"
    // se a altura da tela estiver entre heroHeight e memberHeight, então "header-menu__sections active"
    // se a altura da tela estiver entre memberHeight e albumHeight, então "header-menu__sections active"
    // se a altura da tela estiver maior albumHeight, então "header-menu__sections active"
    
    useEffect(() => {
        let atualActive = document.querySelector(".active")
        const headerMenu = document.querySelectorAll(".header-menu__sections")
        headerMenu.forEach(li => {
            li.addEventListener("click", () => {
                atualActive.classList.remove("active")
                atualActive = li
                li.classList.add("active")
            })
        });
    }, [])

    useEffect(() => {
    console.log(window);

    })

    return (
        <HeaderMainPage className="header-main-page">
            <div className="logo">
                <a href="https://atarashiigakko.com">
                    <img className="logo" src="/public/logo/AG-white.png" alt="LOGO ATARASHII GAKKO!" />
                </a>
            </div>
            <nav>
                <ul className="header-menu">
                    <li className={heroClass}><a href="#hero">Atarashii Gakko!</a></li>
                    <li className={membersClass}><a href="#members">Members</a></li>
                    <li className={albunsClass}><a href="#albuns">Albums</a></li>
                    <li className={musicClass}><a href="#music">Music</a></li>
                </ul>
            </nav>

        </HeaderMainPage>
    )
}

const HeaderMainPage = styled.header`
    background-color: var(--tema-claro-6);
    gap: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    width: 100%;
    padding: 0 2rem;
    position: fixed;
    z-index: 4;
    letter-spacing: 2px;
    nav {
    flex: 1;
    height: 100%;
    }
`

export default Header