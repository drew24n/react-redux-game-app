import axios from "axios";

const instance = axios.create({
    baseURL: 'https://starnavi-frontend-test-task.herokuapp.com'
})

export const gameAPI = {
    getSettings() {
        return instance.get('/game-settings')
            .then(res => res.data)
            .catch(e => alert(e))
    },
    getWinners() {
        return instance.get('/winners')
            .then(res => res.data)
            .catch(e => alert(e))
    },
    addNewWinner(winner, date) {
        return instance.post('/winners', {winner, date})
            .then(res => res.data)
            .catch(e => alert(e))
    }
}