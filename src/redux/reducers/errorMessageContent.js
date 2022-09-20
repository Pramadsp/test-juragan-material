import {
    ERROR_MESSAGE_CONTENT
  } from '../actions/errorMessageContent'
  
  function errorMessageContent(state={}, action){
    switch(action.type){
      case ERROR_MESSAGE_CONTENT:
        return action.data;
      default: 
        return state
    }
  }
  
  export default errorMessageContent