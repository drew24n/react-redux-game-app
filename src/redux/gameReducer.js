import {
    ADD_NEW_WINNER, SET_DIFFICULTY, SET_GAME_COMPLETED, SET_GAME_RUNNING, SET_MESSAGE, SET_PLAYER_NAME, SET_SETTINGS,
    SET_SQUARE_BLOCKS, SET_WINNERS
} from "./gameActions";

const initialState = {
    settings: [],
    winners: [],
    playerName: '',
    difficulty: {
        field: 0,
        delay: 0
    },
    message: 'welcome',
    isGameRunning: false,
    isGameCompleted: false,
    squareBlocks: []
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
                ...state, difficulty: {
                    field: action.field,
                    delay: action.delay
                }
            }
        case SET_PLAYER_NAME:
            return {
                ...state, playerName: action.playerName
            }
        case SET_MESSAGE:
            return {
                ...state, message: action.message
            }
        case SET_SQUARE_BLOCKS:
            return {
                ...state, squareBlocks: action.squareBlocks.map(item => ({
                    squareNumber: item,
                    isActive: false,
                    isCompleted: false,
                    points: 0
                }))
            }
        case SET_GAME_RUNNING:
            return {
                ...state, isGameRunning: action.isGameRunning
            }
        case SET_GAME_COMPLETED:
            return {
                ...state, isGameCompleted: action.isGameCompleted
            }
        default:
            return state
    }
}