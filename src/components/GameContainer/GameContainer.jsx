import styles from '../../styles/GameContainer.module.scss';
import {GameMenu} from "./GameComponents/GameMenu";
import {GameMessage} from "./GameComponents/GameMessage";
import {GameSquare} from "./GameComponents/GameSquare";
import {
    setActiveSquare,
    setCompletedSquare,
    setIsGameCompleted,
    setIsGameRunning,
    setMessage, setPoints
} from "../../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {addWinner} from "../../redux/gameThunks";

export function GameContainer() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const delay = state.difficulty.delay
    const timeOut = state.squareBlocks.length * state.difficulty.delay

    async function startGameHandler() {
        if (!state.difficulty.field || !state.playerName) {
            dispatch(setMessage('choose difficulty and name'))
            return
        }

        dispatch(setIsGameRunning(true))
        dispatch(setIsGameCompleted(false))
        dispatch(setMessage('Good luck!'))

        //testing logic
        const intervalId = setInterval(() => {
            const uncompletedSquare = state.squareBlocks.find(b => !b.isCompleted)
            dispatch(setActiveSquare(uncompletedSquare.squareNumber, true))
            dispatch(setCompletedSquare(uncompletedSquare.squareNumber, true))
            dispatch(setPoints(uncompletedSquare.squareNumber, 1))
        }, delay)
        /////////////////////////////////////////////

        await new Promise(resolve => setTimeout(() => {
            clearInterval(intervalId)
            resolve()
        }, timeOut))


        function defineWinner() {
            const userPoints = state.squareBlocks.reduce((total, square) => {
                return total + square.points
            }, 0)

            if (state.squareBlocks.length / 2 < userPoints) {
                saveWinner(state.playerName)
                return `${state.playerName}, you are a winner!`
            } else if (state.squareBlocks.length / 2 > userPoints) {
                saveWinner('Computer')
                return 'Computer is a winner!'
            } else {
                return "It's a draw!!!"
            }

            function saveWinner(name) {
                dispatch(addWinner(name, moment().format("HH:mm; DD MMMM YYYY")))
            }
        }

        dispatch(setIsGameRunning(false))
        dispatch(setIsGameCompleted(true))
        dispatch(setMessage(defineWinner()))
    }

    return (
        <section className={styles.container}>
            <GameMenu startGameHandler={startGameHandler}/>
            <GameMessage/>
            <GameSquare/>
        </section>
    )
}