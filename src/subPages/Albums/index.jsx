import "./styleAlbums.css"
import "./albumAnimation.css"
import { albums } from "../../util/json/albums/albums.json"
import { useState } from "react";
import { useEffect } from "react";
import MiniInfo from "../../components/MiniInfo"

const Albums = () => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState('start');
    const [nextIndex, setNextIndex] = useState('start');
    const [miniInfo, setMiniInfo] = useState(albums[index]);

    useEffect(() => {
        if (prevIndex !== 'start') {
            const nextAnimation = document.querySelector(".album-swipe__img.next");
            const activeAnimation = document.querySelector(".album-swipe__img.active");
            const prevAnimation = document.querySelector(".album-swipe__img.prev");
            const otherAnimation = document.querySelector(".album-swipe__img.other");

            nextAnimation.classList.add('animationPrev');
            activeAnimation.classList.add('animationPrev');
            prevAnimation.classList.add('animationPrev');
            otherAnimation.classList.add('animationPrev');

            setTimeout(() => {
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

                nextAnimation.classList.remove('animationPrev');
                activeAnimation.classList.remove('animationPrev');
                prevAnimation.classList.remove('animationPrev');
                otherAnimation.classList.remove('animationPrev');
            }, 500);
        }

    }, [prevIndex])

    useEffect(() => {
        if (nextIndex !== 'start') {
            const nextAnimation = document.querySelector(".album-swipe__img.next");
            const activeAnimation = document.querySelector(".album-swipe__img.active");
            const prevAnimation = document.querySelector(".album-swipe__img.prev");
            const otherAnimation = document.querySelector(".album-swipe__img.other");

            nextAnimation.classList.add('animationNext');
            activeAnimation.classList.add('animationNext');
            prevAnimation.classList.add('animationNext');
            otherAnimation.classList.add('animationNext');

            setTimeout(() => {
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

                nextAnimation.classList.remove('animationNext');
                activeAnimation.classList.remove('animationNext');
                prevAnimation.classList.remove('animationNext');
                otherAnimation.classList.remove('animationNext');
            }, 500);
        }

    }, [nextIndex])

    useEffect(() => {
        setTimeout(() => {
            setMiniInfo(albums[index]);
        }, 500);
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
                    <button className="prevButton" onClick={() => handlePrevIndex()}></button>
                    <button className="nextButton" onClick={() => handleNextIndex()}></button>
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


                </div>
                <MiniInfo miniInfo={miniInfo} />
            </div>
        </section>
    )
}

export default Albums