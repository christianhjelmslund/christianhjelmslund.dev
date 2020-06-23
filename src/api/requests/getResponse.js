import axios from "../api"

export const testRequest = () => {
    axios.get('/ingredients.json')
        .then(response => console.log("Successfully made a network request"))
        .catch(err => console.log("Something went wrong..."))
}
