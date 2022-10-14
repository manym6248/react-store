import React from 'react'
import styles from './reserve.module.scss'
import '../assets/scss/main.scss'

const Reserve = () => {
  return (
    <div className={styles.body}>
    <div className={`${styles.container} container p-0` }>
     <div className='d-flex flex-row flex-wrap align-items-center '>
        <div className='col-md-6 col-12 p-3'>
            <div className={styles.form}>
                <h2>رستوران فست فود</h2>
               <div className="mb-3">
                   <input type="email" className="form-control form-control-lg " id="exampleFormControlInput1" placeholder="نام"/>
               </div>
               <div className="mb-3">
                   <input type="email" className="form-control form-control-lg " id="exampleFormControlInput1" placeholder="شماره تلفن"/>
               </div>
               <div className="mb-3">
                   <input type="email" className="form-control form-control-lg " id="exampleFormControlInput1" placeholder="ایمیل"/>
               </div>
               <div className="mb-3">
                   <input type="email" className="form-control form-control-lg " id="exampleFormControlInput1" placeholder="چند نفر؟"/>
               </div>
               <div className="mb-3">
                   <input type="email" className="form-control form-control-lg " id="exampleFormControlInput1" placeholder="ماه/ روز/ ساعت"/>
               </div>
               <button className='btnBig float-start ms-3 mt-2' > رزرو میز</button>
            </div>
        </div>
        <div className='col-md-6 col-12 p-3 pt-0 mt-3'>
            <div className={`${styles.card} card `}>
                <p>رستوران فست فود همه روزه به جز شنبه ها از ساعت 10:00 الی 22:00 پاسخگوی مشتریان گرامی خواهند بود.برای ارتباط با ما با
                      شماره  و ۰۹00000000۸ و یا شماره 0000000  -021 تماس بگیرید.</p>
            </div>
        </div>
     </div>
    </div>   
</div>
  )
}

export default Reserve