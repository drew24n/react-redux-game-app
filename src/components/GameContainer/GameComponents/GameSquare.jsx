import {useSelector} from "react-redux";
import styles from '../../../styles/GameSquare.module.scss';

export function GameSquare() {
    const state = useSelector(state => state)

    const roundBlocksCount = Math.pow(Math.round(Math.sqrt(state.difficulty.field)), 2)
    const squareElements = []
    for (let i = 0; i < roundBlocksCount; i++) {
        squareElements.push(i)
    }

    const gridConfig = {
        display: roundBlocksCount ? 'grid' : 'none',
        gridTemplateColumns: `repeat(${Math.sqrt(roundBlocksCount)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.sqrt(roundBlocksCount)}, 1fr)`,
    }

    return (
        <div className={styles.container}>
            <div style={gridConfig} className={styles.squareGrid}>
                {squareElements.map(elem => <div className={styles.squareItem} key={elem}/>)}
            </div>
        </div>
    )
}