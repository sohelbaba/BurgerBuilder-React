import React from 'react'
import Wrapper from '../../../hoc/wrapper'
import classes from './NavigationItems.module.css'
import { Link } from 'react-router-dom'

const navigationitems = (props) => {
    // console.log(props.auth)
    return (
        <Wrapper>
            <ul className={classes.NavigationItems} onClick={props.closed}>
                <li className={classes.NavigationItem}><Link to='/'>Home</Link></li>
                {props.auth !== null ? <li className={classes.NavigationItem} ><Link to='/orders'>MyOrders</Link></li> : null}
                {props.auth !== null ? <li className={classes.NavigationItem} ><Link to='/logout'>Logout</Link></li>
                    : <li className={classes.NavigationItem} ><Link to='/auth'>Authentication</Link></li>}
            </ul>
        </Wrapper>
    )
}

export default navigationitems