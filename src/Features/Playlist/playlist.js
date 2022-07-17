import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Buffer} from 'buffer';
import qs from 'qs';

const initialState = {
  track : null,
  playlist : [],
  currPlaylist : {},
  token : null,
}

const client_id = 'befd02f1951a48ecb1fe6f03f1e72282';
const client_secret = '153f44c2c6bc43aba817c7724f79dbd5';
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

export const fetchToken = createAsyncThunk('playlist/fetchToken', ()=> {

    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    return axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    .then( (response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  
})

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addPlaylist: (state,{payload}) => {
      state.playlist = payload;
      
    },
    addCurrPlaylist: (state,{payload}) => {
      state.playlist = payload;
      console.log(state.playlist);
    },
    addCurrTrack: (state,{payload}) => {
      state.track = payload;
      
    },
  },
  extraReducers : builder =>{
    builder.addCase(fetchToken.fulfilled,(state,action) =>{
      state.token = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { addPlaylist, addCurrPlaylist, addCurrTrack} = playlistSlice.actions;


export const getAllPlaylist = (state) => state.playlist.playlist;
export const getCurrPlaylist = (state) => state.playlist.currPlaylist;
export const getCurrTrack = (state) => state.playlist.track;
export const getToken = (state) => state.playlist.token;

export default playlistSlice.reducer;