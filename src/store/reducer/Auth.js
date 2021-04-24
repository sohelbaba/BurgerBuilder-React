import * as actionTypes from '../action/action'

const init_state = {
    token: null,
    userid: null,
    error: null,
    authRedirectPath: '/'
}

const Authreducer = (state = init_state, action) => {

    if (action.type === actionTypes.AUTHENTICATION) {
        return {
            ...state,
            token: action.token,
            userid: action.userId
        }
    }

    if (action.type === actionTypes.LOGOUT) {
        return {
            ...state,
            token: null,
            userid: null
        }
    }

    if (action.type === actionTypes.AUTH_FAIL) {

        window.localStorage.setItem('error', action.error)
        // console.log(window.localStorage.getItem('error'))
        return {
            ...state,
            error: action.error
        }
    }

    if (action.type === actionTypes.SET_AUTH_REDICRECT_PATH) {
        return {
            ...state,
            authRedirectPath: action.path
        }
    }

    return state

}

export default Authreducer