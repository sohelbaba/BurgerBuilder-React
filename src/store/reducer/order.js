import { FETCH_ORDERS } from '../action/action'

const order_state = {
    orders: null,
    fetched: false,
}
const reducer_order = (state = order_state, action) => {

    if (action.type === FETCH_ORDERS) {
        return {
            ...state,
            orders: action.fetch_orders_data,
            fetched: true
        }
    }
    return state
}

export default reducer_order
