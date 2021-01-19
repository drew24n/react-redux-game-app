import {useDispatch} from "react-redux";
import {getSettings} from "../redux/gameThunks";
import {useEffect} from "react";
import styles from '../styles/GameArea.module.scss';
import {GameNav} from "./GameNav";
import {GameMessage} from "./GameMessage";

export function GameArea() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSettings())
    }, [dispatch])

    return (
        <section className={styles.container}>
            <GameNav/>
            <GameMessage/>
        </section>
    )
}