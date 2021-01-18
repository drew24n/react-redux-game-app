import {ADD_NEW_WINNER, SET_SETTINGS, SET_WINNERS} from "./gameActions";

const initialState = {
    settings: {},
    winners: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state, settings: action.settings
            }
        case SET_WINNERS:
            return {
                ...state, winners: [...action.winners]
            }
        case ADD_NEW_WINNER:
            return {
                ...state, winners: [...state.winners, ...action.winner]
            }
        default:
            return state
    }
}