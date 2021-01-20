export const SET_SETTINGS = "SET_SETTINGS"
export const SET_WINNERS = "SET_WINNERS"
export const ADD_NEW_WINNER = "ADD_NEW_WINNER"
export const SET_DIFFICULTY = "SET_DIFFICULTY"
export const SET_PLAYER_NAME = "SET_PLAYER_NAME"
export const SET_MESSAGE = "SET_MESSAGE"
export const SET_SQUARE_BLOCKS = "SET_SQUARE_BLOCKS"
export const SET_GAME_RUNNING = "SET_GAME_RUNNING"
export const SET_GAME_COMPLETED = "SET_GAME_COMPLETED"

export const setSetting = (settings) => ({type: SET_SETTINGS, settings})
export const setWinners = (winners) => ({type: SET_WINNERS, winners})
export const addNewWinner = (winner, date) => ({type: ADD_NEW_WINNER, winner, date})
export const setDifficulty = (field, delay) => ({type: SET_DIFFICULTY, field, delay})
export const setPlayerName = (playerName) => ({type: SET_PLAYER_NAME, playerName})
export const setMessage = (message) => ({type: SET_MESSAGE, message})
export const setSquareBlocks = (squareBlocks) => ({type: SET_SQUARE_BLOCKS, squareBlocks})
export const setIsGameRunning = (isGameRunning) => ({type: SET_GAME_RUNNING, isGameRunning})
export const setIsGameCompleted = (isGameCompleted) => ({type: SET_GAME_COMPLETED, isGameCompleted})