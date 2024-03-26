import React from "react";
import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const Spotify = ({
  link,
  id,
  style = {},
  wide = false,
  width = "400px",
  height = "630px",
  frameBorder = 0,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");
  return (
    <iframe
      className= {`iframeSpotify hidden ${id}`}
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={width}
      height={height}
      frameBorder={frameBorder}
      allow={allow}
      style={{
        borderRadius: 8,
        ...style
      }}
      {...props}
    />
  );
};