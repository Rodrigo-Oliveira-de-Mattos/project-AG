import "./styleAlbums.css"
import { albums } from "../../util/json/albums/albums.json"
import { useState } from "react";
import { useEffect } from "react";
import MiniInfo from "../../components/MiniInfo"

const Albums = () => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [miniInfo, setMiniInfo] = useState(albums[index]);
    console.log(miniInfo);
    
    useEffect(() => {
        const next = document.querySelector(".album-swipe__img.next");
        const active = document.querySelector(".album-swipe__img.active");
        const prev = document.querySelector(".album-swipe__img.prev");
        const other = document.querySelector(".album-swipe__img.other");

        next.classList.remove("next");
        active.classList.remove("active");
        prev.classList.remove("prev");
        other.classList.remove("other");

        next.classList.add("other");
        active.classList.add("next");
        prev.classList.add("active");
        other.classList.add("prev");
    }, [prevIndex])

    useEffect(() => {
        const next = document.querySelector(".album-swipe__img.next");
        const active = document.querySelector(".album-swipe__img.active");
        const prev = document.querySelector(".album-swipe__img.prev");
        const other = document.querySelector(".album-swipe__img.other");

        next.classList.remove("next");
        active.classList.remove("active");
        prev.classList.remove("prev");
        other.classList.remove("other");

        next.classList.add("active");
        active.classList.add("prev");
        prev.classList.add("other");
        other.classList.add("next");
    }, [nextIndex])

    useEffect(() => {
        setMiniInfo(albums[index]);
    }, [index])

    function handlePrevIndex() {
        index > 0 ? setIndex(index - 1) : setIndex(3);
        setPrevIndex(prevIndex + 1);
    }
    function handleNextIndex() {
        index < albums.length - 1 ? setIndex(index + 1) : setIndex(0);
        setNextIndex(nextIndex + 1);
    }

    return (
        <section className="albums" id="albums">
            <div className="swipe-disc">

                <div className="album-swipe">
                    <div className="album-swipe__img active">
                        <img className="cd" src="/public/albums/cd.png" alt="cd" />
                        <img className="album-cover" src="/public/albums/2018-maenarawanai.jpg" alt="Wakage Ga Itaru" />
                    </div>
                    <div className="album-swipe__img next">
                        <img className="cd" src="/public/albums/cd.png" alt="cd" />
                        <img className="album-cover" src="/public/albums/2019-wakage-ga-itaru.jpg" alt="Wakage Ga Itaru" />
                    </div>
                    <div className="album-swipe__img other">
                        <img className="cd" src="/public/albums/cd.png" alt="cd" />
                        <img className="album-cover" src="/public/albums/2021-snacktime.jpg" alt="Wakage Ga Itaru" />
                    </div>
                    <div className="album-swipe__img prev">
                        <img className="cd" src="/public/albums/cd.png" alt="cd" />
                        <img className="album-cover" src="/public/albums/2023-ichijikikoku.jpg" alt="Wakage Ga Itaru" />
                    </div>

                    <button className="prevButton" onClick={() => handlePrevIndex()}></button>
                    <button className="nextButton" onClick={() => handleNextIndex()}></button>
                </div>
                <MiniInfo miniInfo={miniInfo} />
            </div>
        </section>
    )
}

export default Albums