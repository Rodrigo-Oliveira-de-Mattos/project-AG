import MiniInfo from '../MiniInfo'
import './styleSwipeDisc.css'

const SwipeDisc = ({ info }) => {
    return (
        <>
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

            </div>
            <MiniInfo miniInfo={info} />
        </>
    )
}

export default SwipeDisc