import {
    SHOW_LOADING
  } from '../actions/loading'
  
  function showloading(state=false, action){
    switch(action.type){
      case SHOW_LOADING:
        return action.status;
      default: 
        return state
    }
  }
  
  export default showloading