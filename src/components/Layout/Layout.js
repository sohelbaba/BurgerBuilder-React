import React, { Component } from 'react'
import Wrapper from '../../hoc/wrapper'
// import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import { Switch, Route } from 'react-router-dom'
import BurgerBuilder from '../../container/BurgerBuilder/BurgerBuilder'
import Order from '../../container/Order/Order'
import classes from './Layout.module.css'
import ListOrders from '../../container/ListOrders/ListOrders'
import Auth from '../../container/Auth/Auth'
import UserLogout from '../../container/Auth/Logout/Logout'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawercloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    toggleHandler = (prevstate) => {
        // console.log('click')
        this.setState({
            showSideDrawer: !prevstate.showSideDrawer
        })
    }
    render() {
        return (
            <Wrapper>
                <SideDrawer
                    auth={this.props.auth}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawercloseHandler} />
                <Toolbar
                    auth={this.props.auth}
                    drawerToggleClicked={this.toggleHandler}
                    closedToggel={this.toggleHandler} />
                <Switch>
                    <Route path='/' exact>
                        <div className={classes.Content}>
                            <BurgerBuilder />
                        </div>
                    </Route>
                    <Route path='/order'>
                        <div className={classes.Content}>
                            <Order />
                        </div>
                    </Route>
                    <Route path='/orders'>
                        <div className={classes.Content}>
                            <ListOrders />
                        </div>
                    </Route>
                    <Route path='/auth'>
                        <div className={classes.Content}>
                            <Auth />
                        </div>
                    </Route>
                    <Route path='/logout'>
                        <div className={classes.Content}>
                            <UserLogout />
                        </div>
                    </Route>

                </Switch>
            </Wrapper>
        )
    }
}

export default layout