import styles from '../styles/GameContainer.module.scss';
import {GameMenu} from "./GameComponents/GameMenu";
import {GameMessage} from "./GameComponents/GameMessage";
import {GameSquare} from "./GameComponents/GameSquare";
import {
    resetSquares, setActiveSquare, setCompletedSquare, setIsGameCompleted,
    setIsGameRunning, setMessage
} from "../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {addWinner} from "../redux/gameThunks";

export function GameContainer() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const completedSquaresCount = state.squareBlocks.filter(square => square.isCompleted).length
    const userPoints = state.squareBlocks.filter(square => square.isCompleted && square.points).length
    const computerPoints = state.squareBlocks.filter(square => square.isCompleted && !square.points).length

    function setStartParams() {
        dispatch(resetSquares())
        dispatch(setIsGameRunning(true))
        dispatch(setIsGameCompleted(false))
        dispatch(setMessage('Good luck!'))
    }

    function checkWinner(squaresActivationSequence) {
        if (userPoints > state.squareBlocks.length / 2) {
            saveResult(state.playerName)
            dispatch(setMessage(`${state.playerName}, you are a winner!`))
            finishGame(squaresActivationSequence)
        }
        if (computerPoints > state.squareBlocks.length / 2) {
            saveResult('Computer')
            dispatch(setMessage('Computer is a winner!'))
            finishGame(squaresActivationSequence)
        }
        if (userPoints === state.squareBlocks.length / 2
            && completedSquaresCount === state.squareBlocks.length) {
            dispatch(setMessage("It's a draw! :)"))
            finishGame(squaresActivationSequence)
        }
    }

    global.checkWinner = checkWinner

    function* getRandomSquare() {
        let i = state.squareBlocks.length
        while (i--) {
            yield state.squareBlocks.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
        }
    }

    function finishGame(squareActivationSequence) {
        dispatch(setIsGameRunning(false))
        dispatch(setIsGameCompleted(true))
        clearInterval(squareActivationSequence)
    }

    function saveResult(name) {
        dispatch(addWinner(name, moment().format("HH:mm; DD MMMM YYYY")))
    }

    function startInterval() {
        const squaresActivationSequence = setInterval(() => {
            const randomSquareNumber = getRandomSquare().next().value.squareNumber
            dispatch(setActiveSquare(randomSquareNumber, true))
            setTimeout(() => {
                dispatch(setCompletedSquare(randomSquareNumber, true))
                dispatch(setActiveSquare(randomSquareNumber, false))
                global.checkWinner(squaresActivationSequence)
            }, state.difficulty.delay)
        }, state.difficulty.delay + 500)
    }

    function startGameHandler(e) {
        e.preventDefault()
        if (!state.difficulty.field || !state.playerName) {
            dispatch(setMessage('choose difficulty and name'))
            return
        }
        setStartParams()
        startInterval()
    }

    return (
        <section className={styles.container}>
            <GameMenu startGameHandler={startGameHandler}/>
            <GameMessage/>
            <GameSquare/>
        </section>
    )
}