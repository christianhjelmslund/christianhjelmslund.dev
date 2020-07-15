import * as actionTypes from "../actions/actionTypes"

const initialState = {
    loading: false,
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                posts: action.posts,
                loading: false,
            }
        case actionTypes.GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default postsReducer