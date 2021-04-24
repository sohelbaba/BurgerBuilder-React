import * as actionTypes from './action'
import axios from 'axios'

export const addOrders = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        fetch_orders_data: orders
    }
}

export const fetchorders = () => {
    return dispatch => {

        axios.get('https://burger-react-app-ceb89-default-rtdb.firebaseio.com/order.json?auth=' + localStorage.getItem('token')).then(
            (response) => {
                let fetchorder = [];
                for (let key in response.data) {
                    if (response.data[key].userid === localStorage.getItem('userId')) {
                        fetchorder.push(response.data[key])
                    }
                }

                dispatch(addOrders(fetchorder))
            }
        ).catch((err) => {

        })
    }
}