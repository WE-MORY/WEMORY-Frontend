import { SET_CURRENT_DIARY_ID } from './types'; 

export function setCurrentDiaryID(currentDiaryID){
    return {
        type: SET_CURRENT_DIARY_ID,
        payload: currentDiaryID
    }
}