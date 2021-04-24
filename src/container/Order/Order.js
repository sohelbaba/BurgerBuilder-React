import React, { Component } from 'react'
import CheckOrderSummary from '../../components/CheckoutOrderSummary/CheckOutOrderSummary'
import { withRouter, Route } from 'react-router-dom'
import ContactData from '../ContactData/ContactData'
class Order extends Component {

    state = {
        ingredents: {
            // ...this.props.location.state.ingredents
            meat: 1,
            bacon: 1,
            chesse: 1,
            salad: 1
        },
        price: 0,
        userdetails: null
    }

    ordersummarycancleHandler = () => {
        this.props.history.goBack()
    }

    ordersummarycontinueHandler = () => {
        this.props.history.replace(this.props.match.path + '/contactdata')
    }

    componentDidMount() {
        this.setState({
            ingredents: this.props.location.state,
            price: this.props.location.price
        })
    }

    render() {
        // console.log("Order " + this.props.location.price)

        return (
            <div>
                <h1>Your Burger is Ready.... yummy & Tasty!!!</h1>
                <CheckOrderSummary
                    ingredents={this.state.ingredents}
                    ordersummarycancle={this.ordersummarycancleHandler}
                    ordersummarycontinue={this.ordersummarycontinueHandler}
                />

                <Route path={this.props.match.path + '/contactdata'}
                    render={() => <ContactData ingredents={this.state.ingredents}
                        price={this.state.price}
                    />}>

                </Route>
            </div>
        )
    }
}

export default withRouter(Order)