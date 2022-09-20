/*
 * action types
 */

export const SESSION_TOKEN = 'SESSION_TOKEN'
export const SESSION_ROLE = 'SESSION_ROLE'
export const SESSION_ACCOUNT = 'SESSION_ACCOUNT'
export const SESSION_FORM = 'SESSION_FORM'
/*
 * action creators
 */

export function sessionToken(token) {
  return { type: SESSION_TOKEN, token }
}

export function sessionRole(role){
  return { type: SESSION_ROLE, role}
}

export function sessionAccount(data){
  return { type: SESSION_ACCOUNT, data }
}

export function sessionForm(data){
  return { type: SESSION_FORM, data }
}