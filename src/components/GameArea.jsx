import {useDispatch} from "react-redux";
import {getSettings} from "../redux/gameThunks";
import {useEffect} from "react";

export function GameArea() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSettings())
    }, [dispatch])

    return (
        <section>GameArea</section>
    )
}