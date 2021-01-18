import {useDispatch} from "react-redux";
import {getSettings} from "../redux/gameThunks";
import {useEffect} from "react";
import styles from '../styles/GameArea.module.scss';

export function GameArea() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSettings())
    }, [dispatch])

    return (
        <section className={styles.container}/>
    )
}