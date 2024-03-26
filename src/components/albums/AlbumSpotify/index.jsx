import { Spotify } from "../Spotify";
import "./styleAlbumSpotify.css"

const AlbumSpotify = ( { link } ) => {
    return (
        <div className="album-spotify">
            <Spotify link={link[0].linkListSpotify} id={link[0].id} />
            <Spotify link={link[1].linkListSpotify} id={link[1].id} />
            <Spotify link={link[2].linkListSpotify} id={link[2].id} />
            <Spotify link={link[3].linkListSpotify} id={link[3].id} />
        </div>
    )
}

export default AlbumSpotify