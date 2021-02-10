import axios from "../api"

export const getSpecificPost = (id) => {
    return axios.get('/posts/'+id+'.json').then(response => {
        let post = {}
        if (response.data) {
            post = response.data
        }
        return post
    })
}