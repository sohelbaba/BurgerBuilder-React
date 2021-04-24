import React from 'react'
import classes from './input.module.css'

const Input = (props) => {
    return (
        <input className={classes.inputElement} {...props} required />
    )
}

export default Input