import {useDispatch, useSelector} from "react-redux";
import styles from '../../../styles/GameSquare.module.scss';
import {useEffect, useMemo} from "react";
import {setPoints, setSquareBlocks} from "../../../redux/gameActions";

export function GameSquare() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const squareBlocksArr = useMemo(() => {
        const arr = []
        for (let i = 0; i < Math.pow(state.difficulty.field, 2); i++) {
            arr.push(i)
        }
        return arr
    }, [state.difficulty.field])

    function clickSquareHandler(squareNumber, isActive) {
        if (isActive) {
            dispatch(setPoints(squareNumber, 1))
        }
    }

    useEffect(() => {
        dispatch(setSquareBlocks(squareBlocksArr))
    }, [dispatch, squareBlocksArr])

    const gridConfig = {
        display: state.difficulty.field ? 'grid' : 'none',
        gridTemplateColumns: `repeat(${state.difficulty.field}, 1fr)`,
        gridTemplateRows: `repeat(${state.difficulty.field}, 1fr)`,
    }

    function setSquareColor(isActive, isCompleted, points) {
        let color
        if (!isActive && !isCompleted) {
            color = 'white'
        } else if (points === 1) {
            color = 'green'
        } else if (isActive && !isCompleted) {
            color = 'blue'
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
                         onClick={() => clickSquareHandler(square.squareNumber, square.isActive)}
                    />
                ))}
            </div>
        </div>
    )
}