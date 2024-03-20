import styled from "styled-components"
import "./styleHeader.css"
import { useState, useEffect } from "react"

function Header() {
    useEffect(() => {
        let atualActive = document.querySelector(".active")
        const headerMenu = document.querySelectorAll(".header-menu__sections")
        headerMenu.forEach(li => {
            li.addEventListener("click", () => {
                console.log(atualActive)
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
                    <li className="header-menu__sections active"><a href="#hero">Atarashii Gakko!</a></li>
                    <li className="header-menu__sections"><a href="#members">Members</a></li>
                    <li className="header-menu__sections"><a href="#albuns">Albums</a></li>
                    <li className="header-menu__sections"><a href="#music">Music</a></li>
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
    padding: 2rem;
    position: fixed;
    z-index: 4;
    letter-spacing: 2px;
    nav {
    flex: 1;
    height: 100%;
    }
`

export default Header