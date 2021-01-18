import styles from './styles/App.module.scss';
import {GameArea} from "./components/GameArea";
import {LeaderBoard} from "./components/LeaderBoard";
import {ErrorsHandler} from "./utils/ErrorsHandler";

export function App() {
    ErrorsHandler()

    return (
        <main className={styles.container}>
            <header>
                <h1>React game</h1>
            </header>
            <div className={styles.main_section}>
                <GameArea/>
                <LeaderBoard/>
            </div>
        </main>
    )
}