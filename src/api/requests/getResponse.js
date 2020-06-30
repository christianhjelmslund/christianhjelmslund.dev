import axios from "../api"

export const testRequest = () => {
    axios.get('/posts.json')
        .then(response => {
            console.log("Successfully made a network request")
            console.log(response.data)
        })
        .catch(err => console.log("Something went wrong..."))
}
