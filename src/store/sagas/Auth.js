import * as actionTypes from '../action/action'
import { put } from 'redux-saga/effects'

export function* logout(action) {
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('userId')
    // until all the upper actions are executed then action will dispatch
    yield put({
        type: actionTypes.LOGOUT
    })
}