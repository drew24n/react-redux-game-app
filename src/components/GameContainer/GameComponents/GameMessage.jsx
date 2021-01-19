import {useSelector} from "react-redux";
import styles from '../../../styles/GameMessage.module.scss';

export function GameMessage() {
    const message = useSelector(state => state.message)

    return (
        <div className={styles.container}>
            <p>{message}</p>
        </div>
    )
}