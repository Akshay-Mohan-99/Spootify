import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MusicComponent from './MusicComponent';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrPlaylist, addPlaylist } from '../Features/Playlist/playlist';

export default function Home({token}) {
  

  const playlist_url1 = 'https://api.spotify.com/v1/playlists/2osU806H8zwNHOCvz2yJnD';
  const playlist_url2 = 'https://api.spotify.com/v1/playlists/4ebtZ6LHsyyZh5NaPMG5st';
  const playlist_url3 = 'https://api.spotify.com/v1/playlists/';

  const [playlist1,setPlaylist1] = useState(null);
  const [playlist2,setPlaylist2] = useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (id) =>{
    
    navigate(`/playlists/${id}`);
  }


  useEffect(() => {
    
    const promise1 = axios.get(playlist_url1,  {
        headers: { 
          'Authorization': `Bearer ${token.access_token}`,
          'Content-Type': 'application/json' 
        }
      });
    const promise2 = axios.get(playlist_url2,  {
      headers: { 
        'Authorization': `Bearer ${token.access_token}`,
        'Content-Type': 'application/json' 
      }
    });

    // const promise3 = axios.get(playlist_url,  {
    //   headers: { 
    //     'Authorization': `Bearer ${token.access_token}`,
    //     'Content-Type': 'application/json' 
    //   }
    // });

    Promise.all([promise1, promise2]).then(function(values) {

      setPlaylist1(values[0].data);
      setPlaylist2(values[1].data);
      dispatch(addPlaylist([values[0].data,values[1].data]));

    }).catch(function (error) {
      console.log(error);
    });
    
  
  },[token])

  return (
    <div className='mainContent'>
      <h3>My Spotify Collection</h3>
      {playlist1 && 
      <MusicComponent id={playlist1.id} handleClick={handleClick} name={playlist1.name} description={playlist1.description} pic={playlist1.images[0].url}/>
      }
      {playlist2 && 
      <MusicComponent id={playlist2.id} handleClick={handleClick} name={playlist2.name} description={playlist2.description} pic={playlist2.images[0].url}/>
      }
      <div className='components'></div>
    </div>
  )
}
