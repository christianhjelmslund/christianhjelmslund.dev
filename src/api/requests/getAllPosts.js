import axios from "../api"

export const getAllPosts = () => {
    return axios.get('/posts.json').then(response => {
        const posts = []
        if (response.data) {
            for (let key in response.data) {
                posts.push({
                    ...response.data[key],
                    id: key
                })
            }
        }
        return posts
    })
}