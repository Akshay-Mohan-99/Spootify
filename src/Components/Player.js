import React from 'react'
import { useSelector } from 'react-redux';
import SpotifyPlayer from 'react-spotify-web-playback';
import { getCurrTrack } from '../Features/Playlist/playlist';

export default function Player({token}) {

  const currTrack = useSelector(getCurrTrack);
  console.log(token,currTrack);
  
  if (token === null || currTrack === null)
    return;

  return (
    <SpotifyPlayer 
      token={token}
      uris={currTrack.track.uri}
    />
  )
}
