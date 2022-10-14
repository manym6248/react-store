import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from "../../redux/cart/cartAction";
import { quantityCount } from '../../helpers/functions'
import CloseButton from 'react-bootstrap/CloseButton';
import styles from './cardCart.module.scss'
const CardCart = ({ item }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cart)
    return (
        <div className={`${styles.row} d-flex flex-row`}>
            <img src={item.img} alt="" />
            <h6 className={`${styles.h6} text-truncate my-3 mx-1`}>{item.name}</h6>
            <div className='d-flex flex-row align-items-center '>
                <button className='btnMinColor p-0 m-0 fs-6' onClick={() => dispatch(increase(item))}>+</button>
                <h6 className='mx-2 mb-0'>{quantityCount(state, item.id)}</h6>
                <button onClick={() => dispatch(decrease(item))} className='btnMinColor p-0 m-0 fs-6'>
                    -
                </button>
            </div>
            <h6 className='mx-2 mb-0'>{quantityCount(state, item.id) * item.price}$</h6>
            <CloseButton variant="white" onClick={() => dispatch(remove(item))} className='  p-0 m-0 ' />
        </div>
    )
}

export default CardCart