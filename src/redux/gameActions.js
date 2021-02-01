export const SET_SETTINGS = "SET_SETTINGS"
export const SET_WINNERS = "SET_WINNERS"
export const SET_DIFFICULTY = "SET_DIFFICULTY"
export const SET_PLAYER_NAME = "SET_PLAYER_NAME"
export const SET_MESSAGE = "SET_MESSAGE"
export const SET_SQUARE_BLOCKS = "SET_SQUARE_BLOCKS"
export const SET_GAME_RUNNING = "SET_GAME_RUNNING"
export const SET_GAME_COMPLETED = "SET_GAME_COMPLETED"
export const SET_ACTIVE_SQUARE = "SET_ACTIVE_SQUARE"
export const SET_COMPLETED_SQUARE = "SET_COMPLETED_SQUARE"
export const SET_POINTS = "SET_POINTS"
export const SET_IS_FETCHING = "SET_IS_FETCHING"
export const RESET_SQUARES = "RESET_SQUARES"

export const setSetting = (settings) => ({type: SET_SETTINGS, settings})
export const setWinners = (winners) => ({type: SET_WINNERS, winners})
export const setDifficulty = (field, delay) => ({type: SET_DIFFICULTY, field, delay})
export const setPlayerName = (playerName) => ({type: SET_PLAYER_NAME, playerName})
export const setMessage = (message) => ({type: SET_MESSAGE, message})
export const setSquareBlocks = (squareBlocks) => ({type: SET_SQUARE_BLOCKS, squareBlocks})
export const setIsGameRunning = (isGameRunning) => ({type: SET_GAME_RUNNING, isGameRunning})
export const setIsGameCompleted = (isGameCompleted) => ({type: SET_GAME_COMPLETED, isGameCompleted})
export const setActiveSquare = (squareNumber, isActive) => ({type: SET_ACTIVE_SQUARE, squareNumber, isActive})
export const setCompletedSquare = (squareNumber, isCompleted) => ({type: SET_COMPLETED_SQUARE, squareNumber, isCompleted})
export const setPoints = (squareNumber, points) => ({type: SET_POINTS, squareNumber, points})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const resetSquares = () => ({type: RESET_SQUARES})