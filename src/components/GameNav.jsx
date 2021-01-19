import {setDifficulty, setPlayerName} from "../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";
import styles from '../styles/GameNav.module.scss';

export function GameNav() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const selectDifficultyHandler = e => {
        dispatch(setDifficulty(e.target.value))
    }

    return (
        <nav className={styles.container}>
            <select onChange={selectDifficultyHandler}>
                <option defaultChecked value={''}>Pick game mode</option>
                {state.settings.map(s => <option key={s.mode} value={s.mode}>{s.mode}</option>)}
            </select>
            <input type="text" placeholder={'Enter your name'} value={state.playerName}
                   onChange={e => dispatch(setPlayerName(e.target.value))}
            />
            <button>PLAY</button>
        </nav>
    )
}