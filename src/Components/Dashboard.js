import React, { useEffect, useState,  Suspense } from 'react'
//import Split from 'react-split';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import {ErrorBoundary} from 'react-error-boundary'

import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Playlist from './Playlist';
import Player from './Player';


export default function Dasboard ({token}) {
  


  return (
    <div className='Dashboard'>
      <div className='upperDash' >
        <div className='sidebar'>
          <div style={{display:'flex',alignItems:'center'}}><FontAwesomeIcon style={{fontSize: '40px'}} icon={faSpotify} /> <div onClick={} style={{paddingLeft:'5px'}}>Spotify</div></div>
        </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home token={token}/> } />
              <Route path="/playlists/*" element={<Playlist token={token}/> } />
            </Routes>
          </BrowserRouter>
      </div>
      <div >
          <Player token={token ? token.access_token : null}/>
      </div>
    </div>
  )
}
