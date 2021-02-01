import {setDifficulty, setPlayerName} from "../../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";
import styles from '../../styles/GameMenu.module.scss';
import {getSettings} from "../../redux/gameThunks";
import {useEffect, useRef} from "react";

export function GameMenu({startGameHandler}) {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const nameInput = useRef(null)

    useEffect(() => {
        dispatch(getSettings())
    }, [dispatch])

    const selectDifficultyHandler = e => {
        if (e.target.value) {
            const {field, delay} = JSON.parse(e.target.value)
            dispatch(setDifficulty(field, delay))
            nameInput.current.focus()
        } else dispatch(setDifficulty(0, 0))
    }

    return (
        <form className={styles.container}>
            <select onChange={selectDifficultyHandler} disabled={state.isGameRunning}>
                <option defaultChecked value={''}>Pick game mode</option>
                {state.settings.map(s => <option key={s.mode} value={JSON.stringify(s)}>{s.mode}</option>)}
            </select>
            <input disabled={state.isGameRunning} type="text" placeholder={'Enter your name'} value={state.playerName}
                   ref={nameInput} onChange={e => dispatch(setPlayerName(e.target.value.trim()))}
            />
            <button onClick={e => startGameHandler(e)} disabled={state.isGameRunning}>
                {state.isGameCompleted ? 'PLAY AGAIN' : 'PLAY'}
            </button>
        </form>
    )
}