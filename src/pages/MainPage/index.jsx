import Header from "../../components/Header"
import Hero from "../../subPages/Hero"
import Members from "../../subPages/Members"
import Albums from "../../subPages/Albums"


const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className="bg-img-hero">
                    <div className="bg-color-hero"></div>
                    <Hero />
                </div>
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