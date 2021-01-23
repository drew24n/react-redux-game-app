import styles from '../../styles/GameContainer.module.scss';
import {GameMenu} from "./GameComponents/GameMenu";
import {GameMessage} from "./GameComponents/GameMessage";
import {GameSquare} from "./GameComponents/GameSquare";
import {
    resetSquares, setActiveSquare, setCompletedSquare, setIsGameCompleted,
    setIsGameRunning, setMessage
} from "../../redux/gameActions";
import {store} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {addWinner} from "../../redux/gameThunks";
import {getRandom} from "../../utils/getRandom";

export function GameContainer() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    async function startGameHandler() {
        if (!state.difficulty.field || !state.playerName) {
            dispatch(setMessage('choose difficulty and name'))
            return
        }

        dispatch(resetSquares())
        dispatch(setIsGameRunning(true))
        dispatch(setIsGameCompleted(false))
        dispatch(setMessage('Good luck!'))

        const delay = state.difficulty.delay

        const activateSquares = setInterval(() => {
            const randomSquareNumber = getRandom(state.squareBlocks).next().value.squareNumber
            dispatch(setActiveSquare(randomSquareNumber, true))
            setTimeout(() => {
                dispatch(setCompletedSquare(randomSquareNumber, true))
                dispatch(setActiveSquare(randomSquareNumber, false))
                defineWinner()
            }, delay)
        }, delay + 500)

        function defineWinner() {
            const state = store.getState()
            const completedSquaresCount = state.squareBlocks.filter(square => square.isCompleted).length
            const userPoints = state.squareBlocks.reduce((total, square) => {
                return total + square.points
            }, 0)
            const computerPoints = state.squareBlocks.filter(square => square.isCompleted && !square.points).length

            if (userPoints > state.squareBlocks.length / 2) {
                saveResult(state.playerName)
                dispatch(setMessage(`${state.playerName}, you are a winner!`))
                finishGame()
            }
            if (computerPoints > state.squareBlocks.length / 2) {
                saveResult('Computer')
                dispatch(setMessage('Computer is a winner!'))
                finishGame()
            }
            if (userPoints === state.squareBlocks.length / 2 && completedSquaresCount === state.squareBlocks.length) {
                dispatch(setMessage("It's a draw! :)"))
                finishGame()
            }
        }

        function finishGame() {
            dispatch(setIsGameRunning(false))
            dispatch(setIsGameCompleted(true))
            clearInterval(activateSquares)
        }

        function saveResult(name) {
            dispatch(addWinner(name, moment().format("HH:mm; DD MMMM YYYY")))
        }
    }

    return (
        <section className={styles.container}>
            <GameMenu startGameHandler={startGameHandler}/>
            <GameMessage/>
            <GameSquare/>
        </section>
    )
}