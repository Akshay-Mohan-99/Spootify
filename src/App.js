import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Buffer} from 'buffer';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import {fetchToken, getToken, fetchPlaylists} from './Features/Playlist/playlist';



import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
Buffer.from('anything','base64');

const client_id = 'befd02f1951a48ecb1fe6f03f1e72282';
const client_secret = '153f44c2c6bc43aba817c7724f79dbd5';
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

function App() {

  const token = useSelector(getToken);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(fetchToken());
    
    
  },[])
  
  useEffect(() => {

    dispatch(fetchPlaylists());
    
  
  },[token])
  
  return (
    <div className="App">
      {token ? <Dashboard token={token}/> : <Login/>}
    </div>
  );
}

export default App;
