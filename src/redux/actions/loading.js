/*
 * action types
 */

export const SHOW_LOADING = 'SHOW_LOADING'
/*
 * action creators
 */

export function showLoading(status) {
  return { type: SHOW_LOADING, status }
}