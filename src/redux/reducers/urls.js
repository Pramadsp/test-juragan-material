import {
    ADD_URL,
    REMOVE_URL,
} from '../actions/url'

function urls(state = null, action) {
    switch (action.type) {
        case ADD_URL:
        return action.text
        case REMOVE_URL:
        return null;
        default:
        return state
    }
}

export default urls