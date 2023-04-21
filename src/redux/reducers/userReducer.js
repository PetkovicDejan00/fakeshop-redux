import { actionTypes } from "../constants/actionTypes";

const localData = localStorage.getItem('loggedIn')
const initialState = {
    loggedIn: localData ? JSON.parse(localData) : false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOG_IN:
            return {...state, loggedIn: true}
        case actionTypes.LOG_OUT:
            return {...state, loggedIn: false}
        default:
            return state
    }
}