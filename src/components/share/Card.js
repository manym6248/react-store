import React from 'react'
import styles from "./card.module.scss"
import img1 from '../../assets/images/f2.png'
import '../../assets/scss/main.scss'
import cart from '../../assets/svg/cart-fill.svg'

import { addItem, increase, decrease, remove } from "../../redux/cart/cartAction";
import { useDispatch, useSelector } from 'react-redux'
import { quantityCount, isInCart } from '../../helpers/functions'


const Card = ({ item }) => {

  const state = useSelector(state => state.cart)

  const dispatch = useDispatch()

  return (
    <div className={`${styles.card}  rounded-3 shadow-sm `}>

      <div className={styles.cardi}>
        <img className={styles.img} src={item.img} alt='img' />
      </div>
      <div className={styles.text}>
        <h5 className='d-inline-block text-truncate' >{item.name ? item.name : "در حال به روز رسانی"} </h5>
        <p >
          {item.text ? item.text : ` لورم ایپسوم متن ساختگی با
         تولید سادگی نامفهوم از صنعت چاپ و با استفاده
         از طراحان گرافیک است چاپگرها و متون بلکه
         روزنامه `}
        </p>
        <div className={`${styles.row1} d-flex flex-row m-0 p-0 justify-content-between align-items-center  mt-3`}>
          <div className='d-flex flex-row align-items-center me-2'>
           
            
            {
              isInCart(state, item.id) ?
              <button className='btnMinColor p-0 m-0 fs-5 fw-bold' onClick={() => dispatch(increase(item))}>+</button> :
              <button className='btnMinColor p-0 m-0' onClick={() => dispatch(addItem(item))}>  <img src={cart} alt="img" /></button>
            }
            <h5 className='mx-3 mb-0'>{ quantityCount(state, item.id)}</h5>
            {quantityCount(state, item.id) > 1 && <button onClick={() => dispatch(decrease(item))} className='btnMinColor p-0 m-0 fs-5 fw-bold'>
              -
            </button>}
             {quantityCount(state, item.id) === 1 &&
              <button onClick={() => dispatch(remove(item))} className='btnMinColor  p-0 m-0 ' >
                delet
              </button>
            }
          </div>

          <h5 className='m-0'>{item.price ? item.price : "0"}$</h5>
        </div>

      </div>
    </div>
  )
}

export default Card