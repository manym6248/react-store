import React from 'react'
import styles from './footer.module.scss'
import cart from "../../assets/svg/cart-fill.svg";
import search from "../../assets/svg/search.svg";
import user from "../../assets/svg/person-fill.svg"
import { useSelector } from 'react-redux';

const Footer = ({ Size, eventCart }) => {
  const state = useSelector(state => state.cart)
  if (Size > 990) {

    return (
      <div className={styles.body}>

        <div className='container p-0  '>
          <div className='d-flex flex-row align-items-start '>
            <div className='col-4 p-3 pt-0'>
              <h3 className='mb-4' >
                ساعت کاری
              </h3>
              <p className='mb-2'>هفت روز هفته</p>
              <p className='mb-4'>10:00 صبح - 10:00 شب   </p>


            </div>
            <div className='col-4 p-3 pt-0'>
              <h3 className='mb-4' >
                رستوران فست فود
              </h3>

              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه
                و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className='col-4 p-3 pt-0'>
              <h3 className='mb-4' >
                تماس با ما
              </h3>
              <ul>
                <li>لوکیشن</li>
                <li>09.......418</li>
                <li>mehrdad.moazzeny@gmail.com</li>
              </ul>


            </div>
          </div>
        </div>
        <h6 className='mt-3 mb-1'>کلیه حقوقو این حرفا قانون کپی رایتو ... تابستون 1401</h6>
      </div>
    )
  }

  if (Size < 990) {
    return (
      <>
        <nav class={`${styles.nav} navbar navbar-light position-fixed w-100 bottom-0 `}>
          <div class="container-fluid">
            <div className={styles.row2}>

              <button className={styles.btnBig}>

                1 </button>
              <button className={`${styles.btnMin} position-relative`} onClick={eventCart}>
                <img src={cart} alt="img" />
                <span class="position-absolute bottom-10 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.itemsCounter}
                </span>
              </button>
              <button className={styles.btnMin}>
                <img src={user} alt="img" />
              </button>
              <button className={styles.btnMin}>
                <img src={search} alt="img" />
              </button>
            </div>

          </div>
        </nav>
      </>
    )
  }
}

export default Footer