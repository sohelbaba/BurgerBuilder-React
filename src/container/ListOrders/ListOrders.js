import React, { Component } from 'react'
import Order from '../../components/Order/Order'
// import axios from '../../axios-orders'
import Loder from '../../components/Loder/Loder'
import * as action from '../../store/action/actions'
import { connect } from 'react-redux'

class ListOrders extends Component {

    componentDidMount() {
        this.props.onFetchOrders()
    }


    render() {
        let orders_show = ''
        // console.log(this.props.orders)
        if (this.props.orders) {
            orders_show = this.props.orders.map((key, id) => {
                return <Order
                    key={id}
                    ingredents={this.props.orders[id].ingredents}
                    price={this.props.orders[id].price}
                />
            })

        } else {
            orders_show = <Loder />
        }

        return (
            <div>
                {orders_show.length === 0
                    ? <div style={{
                        width: '90%',
                        border: '1px solid #ccc',
                        boxShadow: '2px 4px #eee',
                        padding: '8px',
                        margin: '320px auto'
                    }}>You Don't Order Any Burger Yet!!</div>
                    : orders_show
                }

            </div>
        )
    }
}

const mapstate = (state) => {
    return {
        orders: state.Order.orders,
        fetched: state.Order.fetched,
        token: state.Auth.token,
        userid: state.Auth.userid
    }
}

const dispatchmap = (dispatch) => {
    return {
        onFetchOrders: () => dispatch(action.fetchorders())
    }
}

export default connect(mapstate, dispatchmap)(ListOrders)