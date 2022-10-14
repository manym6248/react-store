import React from 'react'
import styles from './Author.module.scss'
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import Error from '../../components/share/Error'
import Spinner from '../../components/share/Spinner'



const Author = () => {
    const {loading , data , error} =useQuery(GET_AUTHORS_INFO);
    
    if (error) return  <Error />  
    if (loading) return <Spinner me-n5/>
  if(data) {return (
    <div className={`${ styles.affterBody} card  border-0 shadow p-3 pb-0`}>
        <h3 className='mb-3 text-end '>نویسنده ها</h3>
        {data.authors.map(item => <div
         className={`${ styles.body} card mb-3 p-0   border-0 overflow-hidden  `}
          key={item.id}>
            <Link to={`/authors/${item.slug}`} className='d-flex flex-row shadow align-items-center'>

             <img className={`rounded-0 ${styles.img}` } src={item.avatar.url} alt="img" height={80} width={80} />
             <h5 className='me-3 pt-1 '>
             {item.name}
             </h5>
            </Link>
          
        </div>)}
    </div>
  )}
}

export default Author;