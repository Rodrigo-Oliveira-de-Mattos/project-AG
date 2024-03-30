import styled from "styled-components";
import { Spotify } from "../Spotify";

const AlbumSpotify = ({ link }) => {
    return (
        <Div className="album-spotify">
            <Spotify link={link[0].linkListSpotify} id={link[0].id} />
            <Spotify link={link[1].linkListSpotify} id={link[1].id} />
            <Spotify link={link[2].linkListSpotify} id={link[2].id} />
            <Spotify link={link[3].linkListSpotify} id={link[3].id} />
        </Div>
    )
}

export default AlbumSpotify

const Div = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;

    .hidden{
        display: none;
    }

    .show{
        display: block;
    }
`