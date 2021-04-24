import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'

import Backdrop from '../../Backdrop/Backdrop'
import Wrapper from '../../../hoc/wrapper'

const SideDrawer = (props) => {

    let attachedclass = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedclass = [classes.SideDrawer, classes.Open]
    }
    return (
        <Wrapper>
            <Backdrop show={props.open} closed={props.closed} />
            {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
            <div className={attachedclass.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems auth={props.auth} closed={props.closed} />
                </nav>
            </div>
        </Wrapper>
    )
}
export default SideDrawer