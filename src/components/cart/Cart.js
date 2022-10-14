import React from 'react'
import { useSelector } from 'react-redux';

import CardCart from './CardCart'

const Cart = () => {

    const state = useSelector(state => state.cart)
    console.log(state);
    return (
        <div>
            {state.selectItems.length ?
                state.selectItems.map(item =>
                    <CardCart key={item.id} item={item} />
                ) : ""
            }
            <div className='d-flex flex-row align-items-center p-3 pt-4 justify-content-around '>
                <h6>مبلغ قابل پرداخت </h6>
                <h6>{state.total}$</h6>
            </div>
            <div className='d-flex flex-row align-items-center p-3 pt-0 justify-content-around '>
                <button className='btnBig m-0 ml-2text-truncate'>پاک کردن همه</button>
                <button className='btnBig m-0 text-truncate'>تسویه حساب</button>
            </div>
        </div>
    )
}

export default Cart