import {combineReducers} from 'redux';

//reducers
import counter from './counter';
import fetchStatus from './fetch';
import displayBoxes from './displayBoxes'


export default combineReducers({
  counter,
  fetchStatus,
  displayBoxes

})
