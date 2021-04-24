import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Wrapper from '../../hoc/wrapper'

const Modal = (props) => {
    return (
        <Wrapper>
            <Backdrop show={props.show}
                closed={props.closed}
            />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0
                }}
            >
                {props.children}
            </div>
        </Wrapper>
    )
}

export default Modal