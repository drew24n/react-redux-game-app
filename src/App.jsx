import styles from './styles/App.module.scss';
import {GameContainer} from "./components/GameContainer/GameContainer";
import {LeaderBoard} from "./components/LeaderBoard";
import {useEffect} from "react";

export function App() {
    useEffect(() => {
        window.addEventListener("unhandledrejection", error => alert(error))
    }, [])

    return (
        <main className={styles.container}>
            <header>
                <h1>React Game</h1>
            </header>
            <div className={styles.main_section}>
                <GameContainer/>
                <LeaderBoard/>
            </div>
        </main>
    )
}