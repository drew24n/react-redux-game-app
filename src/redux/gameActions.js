export const SET_SETTINGS = "SET_SETTINGS"
export const SET_WINNERS = "SET_WINNERS"
export const ADD_NEW_WINNER = "ADD_NEW_WINNER"

export const setSetting = (settings) => ({type: SET_SETTINGS, settings})
export const setWinners = (winners) => ({type: SET_WINNERS, winners})
export const addNewWinner = (winner, date) => ({type: ADD_NEW_WINNER, winner, date})