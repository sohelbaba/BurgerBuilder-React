import React from 'react'
import Wrapper from '../../hoc/wrapper'

const Ordersummary = (props) => {

    const ordersummary = Object.keys(props.ingredents || {})
        .map((igkey) => {
            return <p
                style={{
                    borderBottom: '1px solid brown',
                    padding: '4px',
                    width: '96%',
                    margin: '4px',
                    textAlign: 'left',
                    fontSize: '20px',
                    fontVariantCaps: 'all-petite-caps'
                }}
                key={igkey}> {igkey} : {props.ingredents[igkey]}</p>
        })

    return (
        <Wrapper>
            <div style={{
                width: '96%',
                padding: '8px',
                border: '1px solid black',

            }}>
                <h3 style={{
                    borderBottom: '1px solid brown',
                    padding: '4px',
                    width: '40%',
                    textAlign: 'center',
                    margin: '4px',
                    fontSize: '20px',
                    fontVariantCaps: 'all-petite-caps'
                }}>Your Order</h3>
                <div>{ordersummary}</div>
                <p style={{
                    padding: '4px',
                    width: '50%',
                    justifyContent: 'center',
                    borderBottom: '1px solid brown'
                }}>Total Price : <strong>${props.price.toFixed(2)}</strong></p>
                <h4>Continue your order?</h4>
                <button
                    style={{
                        width: '50%',
                        padding: '8px',
                        border: '1px solid black',
                        backgroundColor: '#703B09',
                        color: 'white',
                        cursor: 'pointer'
                    }} onClick={props.continue}>Continue</button>
                <button
                    style={{
                        width: '50%',
                        padding: '8px',
                        border: '1px solid black',
                        backgroundColor: '#703B09',
                        color: 'white',
                        cursor: 'pointer'
                    }} onClick={props.cancle}>Cancle</button>
            </div>
        </Wrapper >
    )
}

export default Ordersummary