import Hero from "../../subPages/Hero"
import Members from "../../subPages/Members"
import Header from "../../components/Header"


const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className="bg-img-city">
                    <Hero />
                    <Members />
                    {/* <Albuns /> */}
                </div>
                {/* <Music /> */}
            </main>
        </>
    )
}

export default MainPage