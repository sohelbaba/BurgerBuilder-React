import React from 'react'

import classes from './Order.module.css'

const Order = (props) => {

    let ingredeants = Object.keys(props.ingredents).map((key) => {
        return <span style={{
            display: 'inline-block',
            border: '1px solid  #ccc',
            boxShadow: '2px 5px #eee',
            padding: '5px',
            margin: '10px 5px'

        }} key={key}>{key} : {props.ingredents[key]}</span>
    })

    return (
        <div className={classes.order}>
            <div>Ingredients
                <div className={classes.ingredeants}>{ingredeants}</div>
            </div>
            <p>Price : <strong>USD ${props.price}</strong></p>
        </div>
    )
}

export default Order