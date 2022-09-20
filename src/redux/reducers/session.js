import {
  SESSION_TOKEN,
  SESSION_ROLE,
  SESSION_ACCOUNT,
  SESSION_FORM
} from '../actions/session'

export function sessionToken(state=null, action){
  switch(action.type){
    case SESSION_TOKEN:
      return action.token;
    default: 
      return state
  }
}

export function sessionRole(state=null, action){
  switch(action.type){
    case SESSION_ROLE:
      return action.role;
    default: 
      return state
  }
}

export function sessionAccount(state=null, action){
  switch(action.type){
    case SESSION_ACCOUNT:
      return action.data;
    default: 
      return state
  }
}

export function sessionForm(state=null, action){
  switch(action.type){
    case SESSION_FORM:
      return action.data;
    default: 
      return state
  }
}

export default sessionToken