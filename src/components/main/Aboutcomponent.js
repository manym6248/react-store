import React from 'react'
import styles from './Aboutcomponent.module.scss'
import burger from '../../assets/images/about-img.png'
import '../../assets/scss/main.scss'
const Aboutcomponent = () => {
  return (
    <div className={styles.body}>
        <div className='container p-0 h-100'>
         <div className='d-flex flex-row align-items-center h-100'>
            <div className="col-6 h-100 p-4">
                <img className='h-100 w-100' src={burger} alt="img" />
            </div>
            <div className="col-6 p-5">
               <h2>رستوران فست فود</h2>
               <p>لورم ایپسوم متن ساختگی با تولید
                 سادگی نامفهوم از صنعت چاپ و با استفاده 
                از طراحان گرافیک است چاپگرها و متون بلکه
                 روزنامه و مجله در ستون و سطرآنچنان که لازم
                 است و برای شرایط فعلی تکنولوژی مورد
                 نیاز و کاربردهای متنوع با هدف بهبود
                 ابزارهای کاربردی می باشد</p>
                 <button className='btnBig'>بشتر بخون</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Aboutcomponent