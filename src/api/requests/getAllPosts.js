import axios from "../api"

export const getAllPosts = () => {
    return axios.get('/posts.json').then(response => {
        const posts = []
        for (let key in response.data) {
            posts.push({
                ...response.data[key],
                id: key
            })
        }
        return posts
    })
}
