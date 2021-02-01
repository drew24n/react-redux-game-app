import styles from './styles/App.module.scss';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {GameContainer} from "./components/GameContainer";
import {LeaderBoard} from "./components/GameComponents/LeaderBoard";
import {Preloader} from "./components/Preloader";

export function App() {
    const state = useSelector(state => state)

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
            {state.isFetching ? <Preloader/> : null}
        </main>
    )
}