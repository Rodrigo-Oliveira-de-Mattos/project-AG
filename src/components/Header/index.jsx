import styled from "styled-components"
import { useState, useEffect } from "react"

function Header() {
    const [heroClass, setHeroClass] = useState("header-menu__sections active")
    const [membersClass, setMembersClass] = useState("header-menu__sections")
    const [albunsClass, setAlbunsClass] = useState("header-menu__sections")
    const [musicClass, setMusicClass] = useState("header-menu__sections")
    const setArray = [setHeroClass, setMembersClass, setAlbunsClass, setMusicClass]

    const heroHeight = 700
    const memberHeight = heroHeight + 800
    const albumHeight = memberHeight + 700
    let position = window.pageYOffset

    window.onscroll = () => {
        position = window.pageYOffset
        if (position >= 0 && position <= heroHeight) {
            setArray.forEach((item) => item == setArray[0] ? item("header-menu__sections active") : item("header-menu__sections"))
        } else if (position > heroHeight && position <= memberHeight) {
            setArray.forEach((item) => item == setArray[1] ? item("header-menu__sections active") : item("header-menu__sections"))
        } else if (position > memberHeight && position <= albumHeight) {
            setArray.forEach((item) => item == setArray[2] ? item("header-menu__sections active") : item("header-menu__sections"))
        } else if (position > albumHeight) {
            setArray.forEach((item) => item == setArray[3] ? item("header-menu__sections active") : item("header-menu__sections"))
        }
    };

    useEffect(() => {
        const headerMenu = document.querySelectorAll(".header-menu__sections")
        let atualActive = document.querySelector(".active")

        headerMenu.forEach(section => {
            section.addEventListener("click", () => {
                atualActive.classList.remove("active")
                atualActive = section
                section.classList.add("active")
            })
        });
    }, [])

    function handleChecked() {
        const checkbox = document.querySelector("#check-hamburguer")
        const mobileMenu = document.querySelector('.header-menu')
        const hamburguer = document.querySelector(".btn")

        if (checkbox.checked) {
            hamburguer.classList.remove('not-active')
            hamburguer.classList.add('active')
            mobileMenu.classList.remove('hidden')
        } else if (!checkbox.checked) {
            hamburguer.classList.remove('active')
            hamburguer.classList.add('not-active')
            mobileMenu.classList.add('hidden')
        }
    }

    return (
        <HeaderMainPage className="header-main-page">
            <Logo className="logo">
                <a href="https://atarashiigakko.com">
                    <img src="/public/logo/AG-white.png" alt="LOGO ATARASHII GAKKO!" />
                </a>
            </Logo>
            <nav role="navigation">

                <div id="menuToggle">
                    <div className="hamburguer">
                        <input onClick={handleChecked} id="check-hamburguer" type="checkbox" />
                        <div class="btn not-active">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>



                    <UlMenu className="header-menu hidden">
                        <li className={heroClass}><a href="#hero">Atarashii Gakko!</a></li>
                        <li className={membersClass}><a href="#members">Members</a></li>
                        <li className={albunsClass}><a href="#albums">Albums</a></li>
                        <li className={musicClass}><a href="#music">Music</a></li>
                    </UlMenu>
                </div>
            </nav>

        </HeaderMainPage>
    )
}

const HeaderMainPage = styled.header`
    // background-color: var(--tema-claro-6);

    background: rgba(57, 88, 134, 0.9);
    box-shadow: 0 8px 64px -5px rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    width: 100%;
    padding: 0 2rem;
    position: fixed;
    z-index: 999;

    nav {
        flex: 1;
        height: 100%;
    }
`

const Logo = styled.div`
    height: 100%;
    padding: 2rem 0;

    img{
    height: 100%;
    }
`

const UlMenu = styled.ul`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    letter-spacing: 3px;

    .header-menu__sections {
        flex: 1;
        display: grid;
        place-items: center;
        max-width: 15rem;
        opacity: 0.4;
        position: relative;
        height: 100%;
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 70%;
            height: 7px;
            background-color: var(--tema-claro-5);
            opacity: 0.6;
            border-radius: 10px 10px 0 0;
        }

        a {
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            color: var(--tema-claro-1);
            display: grid;
            place-items: center;
            font-size: 1.6em;
            height: 10rem;
            width: 100%;
        }
        &:hover {
            opacity: 1;
            &::before {
                background-color: var(--tema-claro-4);
                z-index: -1;
            }
        }
        }
        .header-menu__sections.active {
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
            &::before {
                opacity: 1;
                background-color: var(--tema-claro-2);
            }
        }
`

export default Header