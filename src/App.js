import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
import * as actions from './store/action/actions'

class App extends Component {

  componentDidMount() {
    this.props.onAutoSignIn()
  }

  render() {
    return (
      <div className="App">
        <Layout auth={this.props.token}>
          <BurgerBuilder>
          </BurgerBuilder>
        </Layout>
      </div>
    );
  }
}


const mapstateProps = (state) => {

  return {
    token: state.Auth.token
  }
}

const mapdispatch = (dispatch) => {
  return {
    onAutoSignIn: () => dispatch(actions.AutoSignInCheck())
  }
}
export default connect(mapstateProps, mapdispatch)(App);
