import { SET_CURRENT_DIARY_ID } from '../actions/types'

const initialCodeState = {
    currentDiaryID: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialCodeState, action) {
    switch (action.type) {
        case SET_CURRENT_DIARY_ID:
            return {
                ...state,
                currentDiaryID: action.payload,
            }
        default:
            return state
    }
}