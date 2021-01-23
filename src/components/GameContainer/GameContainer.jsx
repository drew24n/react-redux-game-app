import styles from '../../styles/GameContainer.module.scss';
import {GameMenu} from "./GameComponents/GameMenu";
import {GameMessage} from "./GameComponents/GameMessage";
import {GameSquare} from "./GameComponents/GameSquare";
import {
    resetSquares, setActiveSquare, setCompletedSquare, setIsGameCompleted,
    setIsGameRunning, setMessage
} from "../../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {addWinner} from "../../redux/gameThunks";

export function GameContainer() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    function startGameHandler() {
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
            const uncompletedSquare = state.squareBlocks.find(b => !b.isCompleted)
            dispatch(setActiveSquare(uncompletedSquare.squareNumber, true))
            setTimeout(() => {
                dispatch(setCompletedSquare(uncompletedSquare.squareNumber, true))
                dispatch(setActiveSquare(uncompletedSquare.squareNumber, false))
                defineWinner()
            }, delay)
        }, delay)

        function defineWinner() {
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
                dispatch(setMessage("Draw! (Ничья!)"))
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