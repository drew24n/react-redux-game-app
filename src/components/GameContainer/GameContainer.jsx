import styles from '../../styles/GameContainer.module.scss';
import {GameMenu} from "./GameComponents/GameMenu";
import {GameMessage} from "./GameComponents/GameMessage";
import {GameSquare} from "./GameComponents/GameSquare";

export function GameContainer() {
    return (
        <section className={styles.container}>
            <GameMenu/>
            <GameMessage/>
            <GameSquare/>
        </section>
    )
}