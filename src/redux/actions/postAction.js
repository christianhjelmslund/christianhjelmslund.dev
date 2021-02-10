import * as actionTypes from "./actionTypes"
import * as api from "../../api/api"

const getPostStart = () => ({type: actionTypes.GET_POST_START})
const getPostSuccess = post => ({type: actionTypes.GET_POST_SUCCESS, post: post})
const getPostError = () => ({type: actionTypes.GET_POST_ERROR})

export const getSpecificPost = (id) => {
    return dispatch => {
        dispatch(getPostStart())
        api.getSpecificPost(id)
            .then(data => {dispatch(getPostSuccess(data))})
            .catch(_ => { dispatch(getPostError())})
    }
}
