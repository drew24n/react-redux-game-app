import {useEffect} from "react";

export function ErrorsHandler() {
    useEffect(() => {
        window.addEventListener("unhandledrejection", error => alert(error))
    }, [])
}