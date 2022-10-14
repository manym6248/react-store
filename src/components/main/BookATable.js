import React from 'react'
import Map from '../share/Map'
import styles from './BookATable.module.scss'

export const BookATable = () => {
  return (
    <div className={styles.body}>
        <div className='container p-0 '>
         <div className='d-flex flex-row flex-wrap align-items-center '>
            <div className='col-md-6 col-12 p-3'>
                <div className={styles.form}>
                    <h2>رستوران فست فود</h2>
                   <div className="mb-3">
                       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="نام"/>
                   </div>
                   <div className="mb-3">
                       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="شماره تلفن"/>
                   </div>
                   <div className="mb-3">
                       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ایمیل"/>
                   </div>
                   <div className="mb-3">
                       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="چند نفر؟"/>
                   </div>
                   <div className="mb-3">
                       <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ماه/ روز/ ساعت"/>
                   </div>
                </div>
            </div>
            <div className='col-md-6 col-12 p-3 md-pt-5 mt-3'>
                <Map className="pt-3 md-pt-3" />
            </div>
         </div>
        </div>   
    </div>
  )
}
