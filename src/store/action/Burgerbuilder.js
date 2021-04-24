import * as actionTypes from './action'
import axios from '../../axios-orders'

export const AddIngredent = (name) => {
    return {
        type: actionTypes.ADD_INGREDENT,
        ingrediantname: name
    }
}

export const RemoveIngredent = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDENT,
        ingrediantname: name
    }
}

export const setIngredent = (ingredents) => {
    return {
        type: actionTypes.INIT_INGREDENTS,
        fetch_ingredents: ingredents
    }
}

export const initIngredents = () => {
    return dispatch => {
        axios.get('/ingredents.json')
            .then(response => {
                dispatch(setIngredent(response.data))
            })
            .catch(err => {

            })
    }
}