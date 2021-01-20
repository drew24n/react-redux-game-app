import {gameAPI} from "../api/gameAPI";
import {setSetting, setWinners} from "./gameActions";

export const getSettings = () => async (dispatch) => {
    try {
        const data = await gameAPI.getSettings()
        if (data) {
            dispatch(setSetting(data))
        }
    } catch (e) {
        alert(e)
    }
}

export const getWinners = () => async (dispatch) => {
    try {
        const data = await gameAPI.getWinners()
        if (data) {
            dispatch(setWinners(data))
        }
    } catch (e) {
        alert(e)
    }
}

export const addWinner = (winner, date) => async (dispatch) => {
    try {
        const res = await gameAPI.addNewWinner(winner, date)
        if (res) {
            dispatch(setWinners(res))
        }
    } catch (e) {
        alert(e)
    }
}