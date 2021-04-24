import React, { Component } from 'react'
import Wrapper from '../../hoc/wrapper'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Buildcontrols/BuildControls'
import Model from '../../components/Modal/Modal'
import Ordersummary from '../../components/OrderSummary/OrderSummary'
// import axios from '../../axios-orders'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Loder from '../../components/Loder/Loder'
import * as action from '../../store/action/actions'


export class BurgerBuilder extends Component {

    state = {
        show: false,
        orderd: false
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.initIngredents()
    }

    showhandler = () => {


        if (this.props.token === null) {
            this.props.onsetRedirectPath('/order')
            this.props.history.push('/auth')

        } else {
            this.setState({ show: true })
        }


    }

    closedhandler = () => {
        this.setState({
            show: false
        })
    }

    continue = () => {

        this.setState({
            show: false,
            orderd: true
        })

        this.props.history.push('order')
    }

    cancle = () => {
        this.setState({
            show: false
        })
    }


    render() {
        // console.log(this.props.in_state)
        let InregedentsControl = ''
        if (!this.props.ingredents) {
            InregedentsControl = <Loder />
        } else {
            InregedentsControl = <BuildControls
                addIngredents={this.props.addIngredents}
                removeIngredents={this.props.removeIngredents}
                price={this.props.totalprice}
                visibled={this.showhandler}
            />
        }

        return (
            <Wrapper>

                <Model show={this.state.show} closed={this.closedhandler}>
                    <Ordersummary
                        ingredents={this.props.ingredents}
                        continue={this.continue}
                        cancle={this.cancle}
                        price={this.props.totalprice}
                    />
                </Model>

                <Burger ingrediant={this.props.ingredents} />
                {InregedentsControl}

            </Wrapper>
        )
    }
}
const mapstate = (state) => {
    return {
        ingredents: state.Burger.ingrediant,
        totalprice: +state.Burger.totalprice,
        error: state.Auth.error,
        token: state.Auth.token,
        burgerbuilding: state.Burger.building
    }
}

const dispatch = (dispatch) => {
    return {
        addIngredents: (ignames) => dispatch(action.AddIngredent(ignames)),
        removeIngredents: (ignames) => dispatch(action.RemoveIngredent(ignames)),
        initIngredents: () => dispatch(action.initIngredents()),
        onsetRedirectPath: (path) => dispatch(action.SetRedirectpath(path))
    }
}
export default connect(mapstate, dispatch)(withRouter(BurgerBuilder))