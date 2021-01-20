import styles from '../../styles/GameContainer.module.scss';
import {GameMenu} from "./GameComponents/GameMenu";
import {GameMessage} from "./GameComponents/GameMessage";
import {GameSquare} from "./GameComponents/GameSquare";
import {setIsGameCompleted, setIsGameRunning, setMessage} from "../../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";

export function GameContainer() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    async function startGameHandler() {
        if (!state.difficulty.field || !state.playerName) {
            dispatch(setMessage('choose difficulty and name'))
            return
        }
        dispatch(setIsGameRunning(true))
        dispatch(setIsGameCompleted(false))
        dispatch(setMessage('Good luck!'))
        const intervalId = setInterval(() => console.log('test'), state.difficulty.delay)
        const timeOut = state.squareBlocks.length * state.difficulty.delay
        await new Promise(resolve => setTimeout(() => {
            clearInterval(intervalId)
            resolve()
        }, timeOut))
        dispatch(setIsGameRunning(false))
        dispatch(setIsGameCompleted(true))
        dispatch(setMessage(`${state.playerName}, you are a winner!`))
    }

    return (
        <section className={styles.container}>
            <GameMenu startGameHandler={startGameHandler}/>
            <GameMessage/>
            <GameSquare/>
        </section>
    )
}