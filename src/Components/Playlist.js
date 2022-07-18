import React from 'react'
import { useSelector } from 'react-redux'
import { addCurrTrack, getAllPlaylist } from '../Features/Playlist/playlist';
import { useDispatch } from 'react-redux';


export default function Playlist() {
  
  const currURL = window.location.pathname.substring(11);
  const dispatch = useDispatch();
  const playlists = useSelector(getAllPlaylist);
  const currPlaylist = playlists.filter(element => {
    return element.id === currURL;
  });

  const  millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const handlePlaySong = (item) =>{
    dispatch(addCurrTrack(item));
  }
  
  
  // console.log(currPlaylist);

  let renderComp = 
    currPlaylist.length > 0 ? (
      <div>

      <div className='playlistBanner'>
      <div >
        <img className='playlistBanner-pic' src={currPlaylist[0].images[0].url}/>
      </div>
      <div className='playlistBanner-info'>
        PLAYLIST
        <div className='playlistBanner-info-name'>{currPlaylist[0].name}</div>
        <div className='playlistBanner-info-desc'>{currPlaylist[0].description.replace(new RegExp("&"+"#"+"x27;", "g"), "'")}</div>
        {currPlaylist[0].owner.display_name} . {currPlaylist[0].followers.total} Likes . {currPlaylist[0].tracks.total} Songs
      </div>
    </div>
    <table className='songList-block'>
    
      <tbody>
        <tr className='songList-head'>
            <th  width={'25px'} style={{textAlign:'right'}}>#</th>
            <th style={{paddingLeft:'10px'}}width={'70px'}>Title</th>
            <th width={'50%'}></th>
            <th>Album</th>
            <th style={{marginLeft:'auto'}}>Time</th>
        </tr>
      </tbody>
    </table>
    <hr style={{margin:'10px'}}></hr>
    <table className='songList-block'>
      <tbody>
        
      {currPlaylist[0].tracks.items.map((item,i) => 
        <tr key={i} className='songList' onClick={() => handlePlaySong(item)}>
          <td style={{color:'#a1a1a1'}} width={'25px'} align='right'>{i+1}</td>
          <td width={'70px'}><img className='songList-pic' src={item.track.album.images[0].url}/> </td>
          <td width={'50%'} style={{display : 'flex',flexDirection : 'column'}}><div>{item.track.album.name}</div> <div style={{color:'#a1a1a1'}}>{item.track.album.artists[0].name}</div></td>
          <td >{item.track.name} </td>
          <td style={{marginLeft:'auto'}}>{millisToMinutesAndSeconds(item.track.duration_ms)}</td>
        </tr>
      )}
      </tbody>
    </table>
      </div>
    ) : (<div>Loading...</div>)
  
  return (
    <div className='mainContent'>
      
      {renderComp}
    </div>
  )
}
