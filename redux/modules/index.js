import { combineReducers } from 'redux'

import artists from './artists'
import years from './years'
import shows from './shows'
import tapes from './tapes'

import app from './app'
import playback from './playback'

export default combineReducers({
  artists,
  years,
  shows,
  tapes,
  playback,
  app
});
