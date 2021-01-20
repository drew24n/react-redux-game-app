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

    function setSquareColor(isActive, isCompleted, points) {
        let color
        if (!isActive && !isCompleted) {
            color = 'white'
        } else if (isActive && !isCompleted) {
            color = 'blue'
        } else if (isCompleted && points === 1) {
            color = 'green'
        } else if (isCompleted && !points) {
            color = 'red'
        }
        return color
    }

    return (
        <div className={styles.container}>
            <div style={gridConfig} className={styles.squareGrid}>
                {state.squareBlocks.map(square => (
                    <div style={{backgroundColor: setSquareColor(square.isActive, square.isCompleted, square.points)}}
                         className={styles.squareItem} key={square.squareNumber}
                    />
                ))}
            </div>
        </div>
    )
}