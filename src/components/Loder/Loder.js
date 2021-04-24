import React from 'react'
import classes from './Loder.module.css'

const Loder = (props) => {
    return (
        // <div className={classes.loader}>

        // </div>
        <div className={classes.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loder