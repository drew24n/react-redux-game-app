import styles from './styles/App.module.scss';
import {GameContainer} from "./components/GameContainer/GameContainer";
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
                <GameContainer/>
                <LeaderBoard/>
            </div>
        </main>
    )
}