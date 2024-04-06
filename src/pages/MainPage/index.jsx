import Header from "../../components/Header"
import Hero from "../../subPages/Hero"
import Members from "../../subPages/Members"
import Albums from "../../subPages/Albums"

import "./keyframes/hamburguer.css"
import "./keyframes/borderlive.css"
import "./keyframes/arrow.css"
import "./keyframes/albumCd.css"

import "./responsive/header.css"
import "./responsive/hero.css"
import "./responsive/members.css"
import "./responsive/albums.css"

const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <div className="bg-img-city">
                    <Members />
                    <Albums />
                </div>
                {/* <Music /> */}
            </main>
        </>
    )
}

export default MainPage