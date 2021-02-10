import * as actionTypes from "../actions/actionTypes"

const initialState = {
    loading: false,
    post: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POST_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_POST_SUCCESS:
            return {
                post: action.post,
                loading: false,
            }
        case actionTypes.GET_POST_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default postReducer