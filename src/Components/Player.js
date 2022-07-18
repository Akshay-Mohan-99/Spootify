import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SpotifyPlayer from 'react-spotify-web-playback';
import { getCurrTrack, addCurrTrack } from '../Features/Playlist/playlist';
import bottom from '../bottom.png';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Player({token}) {

  const currTrack = useSelector(getCurrTrack);
  
  const dispatch = useDispatch();

  const handleUnselect = () =>{
    
    dispatch(addCurrTrack(null));
  }
  
  if (token === null || currTrack === null)
    return;

  

  console.log(currTrack);
  return (
    <div className='bottombar'>
      <div>
        <img className='playlist-pic' src={currTrack.track.album.images[0].url}/>
      </div>
      <div width={'50%'} style={{display : 'flex',flexDirection : 'column',marginLeft:'10px'}}><div style={{fontWeight:'600'}}>{currTrack.track.album.name}</div> <div style={{color:'#a1a1a1',fontSize:'14px'}}>{currTrack.track.album.artists[0].name}</div></div>
      <div style={{fontSize: '15px',marginLeft: 'auto',top:'0',marginRight:'10px'}} onClick={() => handleUnselect()}><FontAwesomeIcon  icon={faXmark} /></div>
    </div>
  )
}
