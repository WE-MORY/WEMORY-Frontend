import { SET_CURRENT_AUTH_TOKEN, CLEAR_TOKEN } from './types'; 

export function setCurrentAuthToken(currentToken){
    return {
        type: SET_CURRENT_AUTH_TOKEN,
        payload: currentToken
    }
}

export function ClearToken(){
    return {
        type: CLEAR_TOKEN
    }
}
