
import { useQuery } from '@apollo/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import WhatSaysOurCustomers from '../../../components/main/WhatSaysOurCustomers'
import { GET_BLOG_INFO } from '../../../graphql/queries'
import styles from './BlogPage.module.scss'
import CommentBlog from './CommentBlog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../../../components/share/Spinner'
import Error from '../../../components/share/Error'
const BlogPage = () => {
  const { slug } = useParams()
  const { loading, data, error } = useQuery(GET_BLOG_INFO,
    { variables: { slug } })
 
  if (error) return  <Error />  
  if (loading) return <Spinner me-n5/>
  if (data) return (
    <div className={styles.body}>
      <div className='container'>
        <div className='d-flex mt-5 mx-3 flex-row  justify-content-between align-items-center'>
        <h2 className='text-end    '>{data.post.title}</h2>
        <Link to={'/allBlogs'}>
        <FontAwesomeIcon size='2x' icon="arrow-left" className={styles.faIcon}  />
        </Link>
        </div>
    
        <img className={`${styles.img} shadow`} src={data.post.postImage.url} alt="img" />
        <div className='d-flex flex-row  align-items-center'>
          <img className={`rounded-circle mt-3 ${styles.img1}`} src={data.post.author.avatar.url} alt="img" height={100} width={100} />
          <div>
            <h3 className='me-3 pt-1 mb-0 '>
              {data.post.author.name}
            </h3>
            <p className="card-text pe-1 pt-1">
              <small className="text-muted">{data.post.author.fild}</small>
            </p>
          </div>
        </div>
        <div className={`${styles.card} card border-0 shadow-lg mt-3 p-3 py-5 mb-5`}>
          <p className="card-text p-4 pt-0">
            {data.post.content.text}
          </p>
        </div>
        <WhatSaysOurCustomers slug={slug} title={'کار بران'} />
        <CommentBlog slug={slug} />
      </div>
    </div>
  )
}

export default BlogPage