import {ADD_NEW_WINNER, SET_DIFFICULTY, SET_MESSAGE, SET_PLAYER_NAME, SET_SETTINGS, SET_WINNERS} from "./gameActions";

const initialState = {
    settings: [],
    winners: [],
    playerName: '',
    message: 'Message'
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS:
            const objToArray = Object.keys(action.settings)
                .map(key => ({mode: key, ...action.settings[key], active: false}))
            return {
                ...state, settings: objToArray
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
                ...state, settings: state.settings.map(s => {
                    s.mode === action.mode ? s.active = true : s.active = false
                    return s
                })
            }
        case SET_PLAYER_NAME:
            return {
                ...state, playerName: action.playerName
            }
        case SET_MESSAGE:
            return {
                ...state, message: action.message
            }
        default:
            return state
    }
}