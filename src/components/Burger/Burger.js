import React from 'react'
import BurgerIngrediant from './BurgerIngridents/BurgerIngridents'

import classes from './Burger.module.css'

const burger = (props) => {
    let keyIngtransform = Object.keys(props.ingrediant || {})

        .map((igkey) => {
            return [...Array(props.ingrediant[igkey])].map((_, i) => {  // [ing,quantity]
                return <BurgerIngrediant key={igkey + i} type={igkey} />
            }) //[array of component]   
        })
        .reduce((val, el) => {
            return val.concat(el)
        }, [])

    if (keyIngtransform.length === 0) {
        keyIngtransform = <p>Please Strat adding Ingredients..</p>
    }

    return (
        <div className={classes.burger}>
            <BurgerIngrediant type="bread-top"></BurgerIngrediant>
            {keyIngtransform}

            <BurgerIngrediant type="bread-bottom"></BurgerIngrediant>
        </div>

    )
}


export default burger