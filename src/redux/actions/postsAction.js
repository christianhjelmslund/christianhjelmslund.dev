import * as actionTypes from "./actionTypes"
import * as api from "../../api/api"

const getPostsStart = () => ({type: actionTypes.GET_POSTS_START})
const getPostsSuccess = posts => ({type: actionTypes.GET_POSTS_SUCCESS, posts: posts})
const getPostsError = error => ({type: actionTypes.GET_POSTS_ERROR, error: error})

export const getAllPosts = () => {
    return dispatch => {
        dispatch(getPostsStart())
        api.getAllPosts()
            .then(data => dispatch(getPostsSuccess(data)))
            .catch(error => dispatch(getPostsError(error)))
    }
}
