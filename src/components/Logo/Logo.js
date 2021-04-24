import React from 'react'
import LogoImage from '../../assesst/images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={LogoImage} alt="BurgerKing" />
        </div>
    )
}

export default logo