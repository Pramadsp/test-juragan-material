/*
 * action types
 */

export const ADD_URL = 'ADD_URL'
export const REMOVE_URL = 'REMOVE_URL'
/*
 * action creators
 */

export function addURL(text) {
  return { type: ADD_URL, text }
}

export function removeURL(index) {
  return { type: REMOVE_URL, index }
}