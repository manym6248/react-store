import React from 'react'
import { Link } from 'react-router-dom'
import styles from './blogCard.module.scss'

const BlogsCard = ({item}) => {
    const { author , postImage , title , slug } = item
    
  return (
    
        <div className={`${styles.card} card mb-3 shadow`}>
            <div className={styles.BlogImg}>
                <img src={postImage.url} alt="img" />
            </div>
            <div className='d-flex flex-row align-items-center position-absolute p-3' >
              <div className={styles.authorImg}>

            <img  src={author.avatar.url} alt="img" />
              </div>
              <div className='me-2 '>

              <h6 className='mb-0 fw-bold mt-2' >
                {author.name}
              </h6>
              <small className='pt-n1'  >
                سر آشپز
              </small>
              </div>

            </div>
            <div className='p-3'>
            <h5 className='mt-3 d-inline-block text-truncate' >{title}</h5>
            <Link className={styles.button} to={`/blogs/${slug}`} >
            مطاله مقاله
            </Link>
            </div>
        </div>
    
  )
}

export default BlogsCard