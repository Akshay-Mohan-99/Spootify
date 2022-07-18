import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MusicComponent from './MusicComponent';
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrPlaylist, addPlaylist, getAllPlaylist } from '../Features/Playlist/playlist';

export default function Home({token}) {
  

  const playlist_url1 = 'https://api.spotify.com/v1/playlists/2osU806H8zwNHOCvz2yJnD';
  const playlist_url2 = 'https://api.spotify.com/v1/playlists/4ebtZ6LHsyyZh5NaPMG5st';
  const playlist_url3 = 'https://api.spotify.com/v1/playlists/';

  // const [playlist1,setPlaylist1] = useState(null);
  // const [playlist2,setPlaylist2] = useState(null);
  let playlist1 = null;
  let playlist2 = null;
  const playlists = useSelector(getAllPlaylist);
  if(playlists){
    
    playlist1 = playlists[0];
    playlist2 = playlists[1];
  }
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (id) =>{
    
    navigate(`/playlists/${id}`);
  }

  return (
    <div className='mainContent'>
      <h3 style={{margin:'23px'}}>My Spotify Collection</h3>
      {playlist1 && 
      <MusicComponent id={playlist1.id} handleClick={handleClick} name={playlist1.name} description={playlist1.description} pic={playlist1.images[0].url}/>
      }
      {playlist2 && 
      <MusicComponent id={playlist2.id} handleClick={handleClick} name={playlist2.name} description={playlist2.description} pic={playlist2.images[0].url}/>
      }
      
    </div>
  )
}
