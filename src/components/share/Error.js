import React from 'react';
import styles from './spinner.module.scss'
import error from '../../assets/png/undraw_Cancel_re_pkdm.png'


const Error = () => {
    return (
        <div className={styles.body} >
            <div className='container my-2'>
              <img className={`${styles.img} mt-5  `} src={error} alt="img" />
              <h4 className='blockquote-footer'> مشکل در ارتباط با سرور </h4>
         
         </div>
        </div>
    )
}

export default Error