import "./styleAlbums.css"
import "./albumAnimation.css"
import { albums } from "../../util/json/albums/albums.json"
import { useState } from "react";
import { useEffect } from "react";
import BigInfo from "../../components/albums/BigInfo";
import SwipeDisc from "../../components/albums/SwipeDisc";

import AlbumSpotify from "../../components/albums/AlbumSpotify";
import styled from "styled-components";

const Albums = () => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState('start');
    const [nextIndex, setNextIndex] = useState('start');
    const [albumsInfo, setAlbumsInfo] = useState(albums[index]);
    const [count, setCount] = useState(0);
    const [mouseOut, setMouseOut] = useState(true)

    useEffect(() => {
        const album = document.querySelector('#swipe-disc')
        const spotify = document.querySelector('.iframeSpotify')

        album.addEventListener("mouseover", () => {
            setMouseOut(false)
        })
        album.addEventListener("mouseleave", () => {
            setMouseOut(true)
        })

        spotify.addEventListener("mouseover", () => {
            setMouseOut(false)
        })
        spotify.addEventListener("mouseleave", () => {
            setMouseOut(true)
        })
    })

    useEffect(() => {
        if (mouseOut == true) {
            const interval = setInterval(() => {
                setCount(count + 1);
                document.querySelector('.nextButton').click()
            }, 7500);
            return () => clearInterval(interval);
        }
    }, [mouseOut]);

    // Colocar em outro arquivo
    function getIndividualClass() {
        const next = document.querySelector(".album-swipe__img.next");
        const active = document.querySelector(".album-swipe__img.active");
        const prev = document.querySelector(".album-swipe__img.prev");
        const other = document.querySelector(".album-swipe__img.other");

        const classes = [next, active, prev, other]
        return classes
    }

    // Colocar em outro arquivo
    function switchClass(direction) {
        const classesForSwitchClass = getIndividualClass();

        classesForSwitchClass[0].classList.remove('next');
        classesForSwitchClass[1].classList.remove('active');
        classesForSwitchClass[2].classList.remove('prev');
        classesForSwitchClass[3].classList.remove('other');

        if (direction == "prev") {
            classesForSwitchClass[0].classList.add('other');
            classesForSwitchClass[1].classList.add('next');
            classesForSwitchClass[2].classList.add('active');
            classesForSwitchClass[3].classList.add('prev');
        } else if (direction == "next") {
            classesForSwitchClass[0].classList.add('active');
            classesForSwitchClass[1].classList.add('prev');
            classesForSwitchClass[2].classList.add('other');
            classesForSwitchClass[3].classList.add('next');
        }
    }

    useEffect(() => {
        if (prevIndex !== 'start') {
            const classesForAnimationPrev = getIndividualClass();

            classesForAnimationPrev.forEach((item) => {
                item.classList.add('animationPrev');
            })

            setTimeout(() => {
                switchClass("prev");
                classesForAnimationPrev.forEach((item) => {
                    item.classList.remove('animationPrev');
                })
            }, 500);
        }
    }, [prevIndex])

    useEffect(() => {
        if (nextIndex !== 'start') {
            const classesForAnimationNext = getIndividualClass();

            classesForAnimationNext.forEach((item) => {
                item.classList.add('animationNext');
            })

            setTimeout(() => {
                switchClass("next");

                classesForAnimationNext.forEach((item) => {
                    item.classList.remove('animationNext');
                })
            }, 500);
        }
    }, [nextIndex])

    useEffect(() => {
        setTimeout(() => {
            setAlbumsInfo(albums[index]);
        }, 500);
    }, [index])
    useEffect(() => {
        const hidden = document.querySelectorAll('.iframeSpotify')
        hidden.forEach((item) => {
            item.classList.remove('show')
            item.classList.add('hidden')
        })

        hidden[index].classList.remove('hidden')
        hidden[index].classList.add('show')
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
        <AlbumsSection className="albums" id="albums">
            <BigInfo info={albumsInfo} />
            <div className="swipe-disc" id='swipe-disc'>
                <button className="prevButton" onClick={() => handlePrevIndex()}></button>
                <SwipeDisc info={albumsInfo} />
                <button className="nextButton" onClick={() => handleNextIndex()}></button>
            </div>
            <AlbumSpotify link={albums} />
        </AlbumsSection>
    )
}

export default Albums

const AlbumsSection = styled.section`
height: calc(100vh - 100px);
background: radial-gradient(var(--bg-color-2), var(--bg-color-4));

-webkit-mask-image: linear-gradient(transparent , black 10%);
  mask-image: linear-gradient(transparent , black 10%);
  
display: grid;
grid-template-columns: repeat(3, 1fr);
place-items: center;
`