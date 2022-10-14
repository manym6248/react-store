import React from 'react';
import styles from './spinner.module.scss'


import { InfinitySpin } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className={styles.body} >
            <div className='container'>

         
            <InfinitySpin
                width='300'
                color="#222831"
                />
         </div>
        </div>
    )
}

export default Spinner