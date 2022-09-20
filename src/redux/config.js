import { combineReducers } from 'redux'
import { createStore } from 'redux';
import initSubscriber from 'redux-subscriber';

//reducers
import urls from './reducers/urls';
import {sessionToken,sessionRole, sessionAccount,sessionForm} from './reducers/session'
import showloading from './reducers/loading'
import errorMessageContent from './reducers/errorMessageContent'

function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }   
}

const persistedState = loadFromLocalStorage()

const rootReducer  = combineReducers({
    urls,
    sessionToken,
    sessionRole,
    sessionAccount,
    sessionForm,
    showloading,
    errorMessageContent
  })

const store = createStore(
    rootReducer,
    persistedState
)

store.subscribe(() => saveToLocalStorage(store.getState()))

const subscribe = initSubscriber(store);

export default store