import React from 'react'
import styles from './SideCard.module.scss'
import cart from '../../assets/svg/cart-fill.svg'
import "../../assets/scss/main.scss";

const SideCard = ({text, off, img}) => {
  return (
    <div className={`${styles.card}  w-100 px-4 pb-4 pt-3 rounded-2 `}>
      <div className='d-flex flex-row m-0 h-100 align-items-center'>
        <div className={styles.imgDiv}>

          <img className={styles.img1} src={img} alt="img" />
        </div>
        <div className='me-3'>


        <h5 className='mb-3'>{text}</h5>
        <h6 className='mb-3 off'>{off}%
        <span className='m-1'>off</span>

        </h6>
        <button className="btnBig">
          <img className='m-1' src={cart} alt="img" />
                سفارش انلاین
        </button>
        </div>

      </div>
      
    </div>
  )
}

export default SideCard