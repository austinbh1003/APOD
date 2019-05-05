import { combineReducers } from 'redux';
import apod from './apod';
import ui from './ui';

const rootReducer = combineReducers({
  apod,
  ui
})

export default rootReducer;