import Header from "../../components/Header"
import Hero from "../../subPages/Hero"
import Members from "../../subPages/Members"
import Albums from "../../subPages/Albums"
import "./responsive/small.css"
import "./responsive/medium.css"
import "./responsive/large.css"
import "./keyframes/hamburguer.css"
import "./keyframes/borderlive.css"
import "./keyframes/arrow.css"
import "./keyframes/albumCd.css"

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