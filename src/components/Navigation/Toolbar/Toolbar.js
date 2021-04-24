import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../NavigationItems/NavigationItems'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) => {
    // console.log(props)
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <Navigationitems auth={props.auth} closedDrawer={props.closedToggel} />
            </nav>
        </header>
    )
}

export default toolbar