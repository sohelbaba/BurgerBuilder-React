import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as action from './../../../store/action/actions'

class UserLogout extends Component {

    componentDidMount() {
        this.props.onLogout()
    }
    render() {
        return <Redirect to='/' />
    }

}

const mapdispatchlogout = (dispatch) => {
    return {
        onLogout: () => dispatch(action.Logout())
    }
}
export default connect(null, mapdispatchlogout)(UserLogout)