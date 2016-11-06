import { combineReducers } from 'redux'


 export default function fetchStatus(
   state={
     url:null,
     fetching:false,
     receivedData:false,
     error:null,
     data:[]
   }, action){
  switch (action.type) {


    case 'FETCH_DATA':
        return {...state, fetching: true, receivedData: false}
      break;

    case 'DATA_FETCHED':

        return {
          ...state,
          data: action.data,
          fetching:false,
          receivedData:true }
      break;

    case 'ERROR_RECEIVED':
      return {...state,
        fetching:false,
        error: error,
        receivedData:true}
    break;

    default:
      return state
  }
}
