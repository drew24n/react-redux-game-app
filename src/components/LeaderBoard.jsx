import {useDispatch, useSelector} from "react-redux";
import {getWinners} from "../redux/gameThunks";
import {useEffect} from "react";
import styles from '../styles/LeaderBoard.module.scss';

export function LeaderBoard() {
    const dispatch = useDispatch()
    const winners = useSelector(state => state.winners)

    useEffect(() => {
        dispatch(getWinners())
    }, [dispatch])

    return (
        <section className={styles.container}>
            <h3>Leader Board</h3>
            {winners.slice(0).reverse().map(w => <div className={styles.winner} key={w.id}>
                <span>{w.winner}</span>
                <span>{w.date}</span>
            </div>)}
        </section>
    )
}