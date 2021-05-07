import { createReducer } from '../../utils/helpers'

const defaultState = {
    isLogin: false,
    showLogin: false,
    userInfo: null
}
const handlers = {
    doLogin(state, action) {
        return { ...state, userInfo: action.userInfo }
    },
    toggleShowLogin(state, action) {
        return { ...state, showLogin: action.visible }
    }
}

export default createReducer(defaultState, handlers)
