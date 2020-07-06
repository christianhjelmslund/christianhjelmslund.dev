import * as actionTypes from "./actionTypes"
import * as api from "../../api/api"

const getPostsStart = () => ({type: actionTypes.GET_POSTS_START})
const getPostsSuccess = posts => ({type: actionTypes.GET_POSTS_SUCCESS, posts: posts})
const getPostsError = () => ({type: actionTypes.GET_POSTS_ERROR})

export const getAllPosts = () => {
    return dispatch => {
        dispatch(getPostsStart())
        api.getAllPosts()
            .then(data => {
                dispatch(getPostsSuccess(data))
            })
            .catch(error => {
                console.log(error)
                dispatch(getPostsError())})
    }
}
