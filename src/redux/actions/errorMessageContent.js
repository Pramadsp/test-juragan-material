/*
 * action types
 */

export const ERROR_MESSAGE_CONTENT = 'ERROR_MESSAGE_CONTENT'
/*
 * action creators
 */

export function errorMessageContent(data) {
  return { type: ERROR_MESSAGE_CONTENT, data }
}