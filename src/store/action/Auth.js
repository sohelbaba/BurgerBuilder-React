import * as actionTypes from './action'
import axios from 'axios'

export const Auth_Fail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


export const checkAuth = (token, localid, error = null) => {
    // window.localStorage.setItem('token', res.data.idToken)
    return {
        type: actionTypes.AUTHENTICATION,
        token: token,
        userId: localid,
        error: error
    }

}

export const Logout = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('userId')
    return {
        type: actionTypes.LOGOUT
    }
}

export const CheckAuthTimeOut = (expireTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(Logout())
        }, expireTime * 1000)
    }
}

export const Authentication = (username, password, IsAuthenticate) => {
    return dispatch => {
        const payload = {
            email: username,
            password: password,
            returnSecureToken: true
        }
        let Url = ''
        if (IsAuthenticate) {
            Url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwGNBuju7t0PxrEtAQZlsSdNmwxXfkT8Q'
        } else {
            Url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwGNBuju7t0PxrEtAQZlsSdNmwxXfkT8Q'
        }

        axios.post(Url, payload)
            .then(response => {
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('userId', response.data.localId)
                dispatch(checkAuth(response.data.idToken, response.data.localId))
                dispatch(CheckAuthTimeOut(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(Auth_Fail(err.response.data.error.message))
            })
    }
}

export const SetRedirectpath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDICRECT_PATH,
        path: path
    }
}

export const AutoSignInCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(Logout())
        } else {
            const userid = localStorage.getItem('userId')
            dispatch(checkAuth(token, userid))
        }

    }
}