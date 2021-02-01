import {gameAPI} from "../api/gameAPI";
import {setIsFetching, setSetting, setWinners} from "./gameActions";

export const getSettings = () => async (dispatch) => {
    try {
        dispatch(setIsFetching(true))
        const data = await gameAPI.getSettings()
        if (data) {
            dispatch(setSetting(data))
        }
    } catch (e) {
        alert(e)
    } finally {
        dispatch(setIsFetching(false))
    }
}

export const getWinners = () => async (dispatch) => {
    try {
        dispatch(setIsFetching(true))
        const data = await gameAPI.getWinners()
        if (data) {
            dispatch(setWinners(data))
        }
    } catch (e) {
        alert(e)
    } finally {
        dispatch(setIsFetching(false))
    }
}

export const addWinner = (winner, date) => async (dispatch) => {
    try {
        dispatch(setIsFetching(true))
        const res = await gameAPI.addNewWinner(winner, date)
        if (res) {
            dispatch(setWinners(res))
        }
    } catch (e) {
        alert(e)
    } finally {
        dispatch(setIsFetching(false))
    }
}