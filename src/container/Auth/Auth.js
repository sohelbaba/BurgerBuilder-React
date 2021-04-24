import React, { Component } from 'react'
import { Authentication } from '../../store/action/Auth'
import * as actions from './../../store/action/actions'
import { connect } from 'react-redux'
import classes from './Auth.module.css'
import { Redirect } from 'react-router-dom'
class Auth extends Component {

    state = {
        error: null,
        IsAuthenticate: true
    }

    componentDidMount() {


        if (!this.props.building && this.props.path !== '/') {
            this.props.onsetRedirectPath()
        }
    }

    switchHanlder = () => {
        this.setState((prevstate) => {
            return {
                IsAuthenticate: !prevstate.IsAuthenticate
            }
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        // console.log(event.target.email.value)
        this.props.onAuth(event.target.email.value, event.target.password.value, this.state.IsAuthenticate)


    }
    render() {
        let isauth = ''
        if (this.props.IsAuthenticate) {
            isauth = <Redirect to={this.props.path} />
        }
        return (
            <div className={classes.container}>
                {isauth}
                {this.props.error ? <div className={classes.error}> {this.props.error} </div> : null}
                <form onSubmit={this.onSubmitHandler}>
                    <input type="email" name="email" placeholder="Enter Email" />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <button className={classes.checkAuth}>Submit</button>
                </form>
                <button className={classes.checkAuth} onClick={this.switchHanlder}>Switch to {this.state.IsAuthenticate ? 'SignUp' : 'SignIn'}</button>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        error: state.Auth.error,
        IsAuthenticate: state.Auth.token !== null,
        building: state.Burger.building,
        path: state.Auth.authRedirectPath
    }
}
const mapdispatch = (dispatch) => {
    return {
        onAuth: (username, password, isSignup) => dispatch(Authentication(username, password, isSignup)),
        onsetRedirectPath: () => dispatch(actions.SetRedirectpath('/'))

    }
}

export default connect(mapStateProps, mapdispatch)(Auth)