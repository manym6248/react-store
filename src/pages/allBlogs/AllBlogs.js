import React from 'react';
import styles from './allBlogs.module.scss'
import Author from './Author';
import Blogs from './Blogs';

const AllBlogs = () => {
  return (
    <div className={styles.body}>
        
        <div className='d-flex flex-row flex-wrap mt-5'>
            <div className='col-xl-3 col-lg-3 col-12 p-3'>
                <Author />
            </div>
            <div className='col-xl-9 col-lg-9  col-12 p-3'>
               
                <Blogs/>
            </div>
        </div>




    </div>
  )
}

export default AllBlogs