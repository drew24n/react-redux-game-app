import {useDispatch} from "react-redux";
import {getWinners} from "../redux/gameThunks";
import {useEffect} from "react";

export function LeaderBoard() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWinners())
    }, [dispatch])

    return (
        <section>LeaderBoard</section>
    )
}