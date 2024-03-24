import styled from "styled-components"
import "./styleHeader.css"
import { useState, useEffect } from "react"

function Header() {
    const [heroClass, setHeroClass] = useState("header-menu__sections active")
    const [membersClass, setMembersClass] = useState("header-menu__sections")
    const [albunsClass, setAlbunsClass] = useState("header-menu__sections")
    const [musicClass, setMusicClass] = useState("header-menu__sections")
    const heroHeight = 700
    const memberHeight = heroHeight + 800
    const albumHeight = memberHeight + 700
    let position = window.pageYOffset

    window.onscroll = () => {
        position = window.pageYOffset
        if (position >= 0 && position <= heroHeight) {
            setHeroClass("header-menu__sections active")
            setMembersClass("header-menu__sections")
            setAlbunsClass("header-menu__sections")
            setMusicClass("header-menu__sections")
        } else if (position > heroHeight && position <= memberHeight) {
            setHeroClass("header-menu__sections")
            setMembersClass("header-menu__sections active")
            setAlbunsClass("header-menu__sections")
            setMusicClass("header-menu__sections")
        } else if (position > memberHeight && position <= albumHeight) {
            setHeroClass("header-menu__sections")
            setMembersClass("header-menu__sections")
            setAlbunsClass("header-menu__sections active")
            setMusicClass("header-menu__sections")
        } else if (position > albumHeight) {
            setHeroClass("header-menu__sections")
            setMembersClass("header-menu__sections")
            setAlbunsClass("header-menu__sections")
            setMusicClass("header-menu__sections active")
        }
    };
    
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
                    <li className={albunsClass}><a href="#albums">Albums</a></li>
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
    z-index: 999;
    letter-spacing: 2px;
    nav {
    flex: 1;
    height: 100%;
    }
`

export default Header