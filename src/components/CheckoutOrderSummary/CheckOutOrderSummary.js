import React from 'react'
import classes from './CheckOutOrderSummary.module.css'
import burgerimage from '../../assesst/images/burger.png'
const OrderSummary = (props) => {
    return (
        <div className={classes.Ordersummary}>
            <img className={classes.image} src={burgerimage} alt="non"></img><br />
            <button className={classes.cancle} onClick={props.ordersummarycancle}>CANCLE</button>
            <button className={classes.continue} onClick={props.ordersummarycontinue}>CONTINUE</button>
        </div>
    )
}

export default OrderSummary