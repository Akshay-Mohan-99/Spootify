import {configureStore} from '@reduxjs/toolkit'
import playlistReducer from './Playlist/playlist';

export const store = configureStore({
  reducer : {
    playlist : playlistReducer,
  },

});