const SELECT_URL = "SELECTED_URL";
const ERROR_RECEIVED = "ERROR_RECEIVED";
const FETCH_DATA = "FETCH_DATA";
const DATA_FETCHED = "DATA_FETCHED";

export function selectURL(url){
        return {
            type: SELECT_URL,
            url
        }
}

export function fetchData(){
        return {
            type: FETCH_DATA
        }
}

export function dataFetched(data){
  
        return {
            type: DATA_FETCHED,
             data
        }
}

export function errorReceived(error){
        return {
            type: ERROR_RECEIVED,
            error
        }
}
