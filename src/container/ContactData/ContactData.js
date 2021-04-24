import React, { Component } from 'react'
import axios from '../../axios-orders'
import { withRouter } from 'react-router-dom'
import Input from '../../components/Input/input'
import classes from './ContactData.module.css'
import { connect } from 'react-redux'
import Loder from './../../components/Loder/Loder'

class ContactData extends Component {

    state = {
        loading: false
    }

    formdata = (event) => {
        event.preventDefault()

        const formdata = {
            name: event.target.name.value,
            email: event.target.email.value,
            city: event.target.city.value,
            postalcode: event.target.postalcode.value
        }

        const orderdata = {
            ingredents: this.props.ingredents,
            price: +this.props.totalprice,
            customer: formdata,
            userid: this.props.userid
        }

        this.setState({ loading: true })
        axios.post('/order.json?auth=' + this.props.token, orderdata)
            .then(() => {
                this.setState({ loading: false })
                this.props.history.goBack('/')
            })
            .catch((errro) => {

            })
    }

    render() {

        let waiting = <form className={classes.mainform} onSubmit={this.formdata}>
            <Input type='text' name='name' placeholder='Enter Name' required={true} />
            <Input type='email' name='email' placeholder='Enter Email' required={true} />
            <Input type='text' name='city' placeholder='Enter city' required={true} />
            <Input type='number' name='postalcode' placeholder='Enter postalcode' required={true} />
            <button className={classes.Submit}>Submit</button>
        </form>
        if (this.state.loading) {
            waiting = <Loder />
        }

        return (
            <div>
                {waiting}

                <br></br>
                <br></br>
            </div>

        )
    }
}

const mapstateprops = (state) => {
    return {
        ingredents: state.Burger.ingrediant,
        totalprice: state.Burger.totalprice,
        token: state.Auth.token,
        userid: state.Auth.userid
    }
}
export default connect(mapstateprops)(withRouter(ContactData))