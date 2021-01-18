import styles from './styles/App.module.scss';
import {GameArea} from "./components/GameArea";
import {LeaderBoard} from "./components/LeaderBoard";
import {ErrorsHandler} from "./utils/ErrorsHandler";

export function App() {
    ErrorsHandler()

    return (
        <main className={styles.container}>
            <GameArea/>
            <LeaderBoard/>
        </main>
    )
}