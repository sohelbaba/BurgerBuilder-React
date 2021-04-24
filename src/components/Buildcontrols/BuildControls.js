import React from 'react'
import BuildControl from './BuildControl/Buildcontrol'
import classes from './BuildControls.module.css'

const controls = [
    { lable: "Cheese", type: 'cheese' },
    { lable: "Salad", type: 'salad' },
    { lable: "Bacon", type: 'bacon' },
    { lable: "Meat", type: 'meat' }
]


const BuildControls = (props) => {

    return (
        //array of controls 
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(cntrl => (
                <BuildControl
                    key={cntrl.lable}
                    lable={cntrl.lable}
                    added={() => props.addIngredents(cntrl.type)}
                    removed={() => props.removeIngredents(cntrl.type)}
                />
            ))}
            <button className={classes.orderButton} onClick={props.visibled}>Order Now</button>
        </div>

    )
}

export default BuildControls
