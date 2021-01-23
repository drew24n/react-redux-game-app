export function* getRandom(array) {
    let i = array.length
    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    }
}