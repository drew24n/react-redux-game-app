import {useDispatch, useSelector} from "react-redux";
import styles from '../../../styles/GameSquare.module.scss';
import {useEffect, useMemo} from "react";
import {setSquareBlocks} from "../../../redux/gameActions";

export function GameSquare() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const roundBlocksCount = Math.pow(Math.round(Math.sqrt(state.difficulty.field)), 2)
    const squareBlocks = useMemo(() => {
        const arr = []
        for (let i = 0; i < roundBlocksCount; i++) {
            arr.push(i)
        }
        return arr
    }, [roundBlocksCount])

    useEffect(() => {
        dispatch(setSquareBlocks(squareBlocks))
    }, [dispatch, squareBlocks])

    const gridConfig = {
        display: roundBlocksCount ? 'grid' : 'none',
        gridTemplateColumns: `repeat(${Math.sqrt(roundBlocksCount)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.sqrt(roundBlocksCount)}, 1fr)`,
    }

    return (
        <div className={styles.container}>
            <div style={gridConfig} className={styles.squareGrid}>
                {squareBlocks.map(elem => <div className={styles.squareItem} key={elem}/>)}
            </div>
        </div>
    )
}