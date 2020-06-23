import * as actionTypes from '../actions/actionTypes';

const initialState = {
    setup: 'setting up redux'
}

const reducer = (oldState = initialState, action) => {
    switch (action.type) {
        case actionTypes.TEST_REDUX:
            return {setup: 'redux is setup'}
        default:
            return {setup: 'redux didn\'t work as expected' }
    }
}

export default reducer