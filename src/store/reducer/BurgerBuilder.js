import { ADD_INGREDENT, REMOVE_INGREDENT, INIT_INGREDENTS } from '../action/action'

const ingredeantsPrice = {
    cheese: 0.5,
    salad: 0.6,
    bacon: 0.7,
    meat: 1.5
}

const init_state = {
    ingrediant: null,
    totalprice: 4.0,
    building: false
}

const reducer = (state = init_state, action) => {

    if (action.type === ADD_INGREDENT) {
        const priceadd = ingredeantsPrice[action.ingrediantname]
        const oldprice = state.totalprice
        const updateprice = oldprice + priceadd

        return {
            ...state,
            ingrediant: {
                ...state.ingrediant,
                [action.ingrediantname]: state.ingrediant[action.ingrediantname] + 1
            },
            building: true,
            totalprice: updateprice

        }
    }
    if (action.type === REMOVE_INGREDENT) {

        if (state.ingrediant[action.ingrediantname] !== 0) {
            const priceadd = ingredeantsPrice[action.ingrediantname]
            const oldprice = state.totalprice
            const updateprice = oldprice - priceadd
            return {
                ...state,
                ingrediant: {
                    ...state.ingrediant,
                    [action.ingrediantname]: state.ingrediant[action.ingrediantname] - 1
                },
                building: true,
                totalprice: updateprice
            }
        }

    }

    if (action.type === INIT_INGREDENTS) {
        return {
            ...state,
            ingrediant: action.fetch_ingredents,
            totalprice: 4.0,
            building: false
        }
    }


    return state
}

export default reducer
