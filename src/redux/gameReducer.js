import {ADD_NEW_WINNER, SET_DIFFICULTY, SET_PLAYER_NAME, SET_SETTINGS, SET_WINNERS} from "./gameActions";

const initialState = {
    settings: {},
    winners: [],
    difficulty: {
        field: 0,
        delay: 0
    },
    playerName: ''
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
        case SET_DIFFICULTY:
            return {
                ...state, difficulty: {
                    field: action.difficulty.field,
                    delay: action.difficulty.delay
                }
            }
        case SET_PLAYER_NAME:
            return {
                ...state, playerName: action.playerName
            }
        default:
            return state
    }
}