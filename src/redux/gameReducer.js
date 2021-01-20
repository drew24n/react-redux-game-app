import {
    SET_ACTIVE_SQUARE, SET_COMPLETED_SQUARE,
    SET_DIFFICULTY,
    SET_GAME_COMPLETED,
    SET_GAME_RUNNING,
    SET_MESSAGE,
    SET_PLAYER_NAME, SET_POINTS,
    SET_SETTINGS,
    SET_SQUARE_BLOCKS,
    SET_WINNERS
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
        case SET_ACTIVE_SQUARE:
            return {
                ...state, squareBlocks: state.squareBlocks.map(square => {
                    if (square.squareNumber === action.squareNumber) {
                        square.isActive = action.isActive
                    }
                    return square
                })
            }
        case SET_COMPLETED_SQUARE:
            return {
                ...state, squareBlocks: state.squareBlocks.map(square => {
                    if (square.squareNumber === action.squareNumber) {
                        square.isCompleted = action.isCompleted
                    }
                    return square
                })
            }
        case SET_POINTS:
            return {
                ...state, squareBlocks: state.squareBlocks.map(square => {
                    if (square.squareNumber === action.squareNumber) {
                        square.points = action.points
                    }
                    return square
                })
            }
        default:
            return state
    }
}