import {setDifficulty, setPlayerName} from "../../../redux/gameActions";
import {useDispatch, useSelector} from "react-redux";
import styles from '../../../styles/GameMenu.module.scss';
import {getSettings} from "../../../redux/gameThunks";
import {useEffect} from "react";

export function GameMenu() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(getSettings())
    }, [dispatch])

    const selectDifficultyHandler = e => {
        if (e.target.value) {
            const {field, delay} = JSON.parse(e.target.value)
            dispatch(setDifficulty(field, delay))
        } else dispatch(setDifficulty(0, 0))
    }

    return (
        <nav className={styles.container}>
            <select onChange={selectDifficultyHandler}>
                <option defaultChecked value={''}>Pick game mode</option>
                {state.settings.map(s => <option key={s.mode} value={JSON.stringify(s)}>{s.mode}</option>)}
            </select>
            <input type="text" placeholder={'Enter your name'} value={state.playerName}
                   onChange={e => dispatch(setPlayerName(e.target.value))}
            />
            <button>PLAY</button>
        </nav>
    )
}