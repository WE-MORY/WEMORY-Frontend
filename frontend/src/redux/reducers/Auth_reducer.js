import {SET_CURRENT_AUTH_TOKEN, CLEAR_TOKEN} from '../actions/types'

const initialCodeState = {
    currentToken: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialCodeState, action) {
    switch (action.type) {
        case SET_CURRENT_AUTH_TOKEN:
            return {
                ...state,
                currentToken: action.payload,
            }
        case CLEAR_TOKEN:
            return {
                ...state,
                currentToken: null
            }    
        default:
            return state
    }
}