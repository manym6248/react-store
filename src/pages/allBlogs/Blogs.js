import { useQuery } from '@apollo/client'
import { GET_BLOGS_INFO } from '../../graphql/queries'
import React from 'react'
import BlogsCard from './BlogsCard';
import Error from '../../components/share/Error'
import Spinner from '../../components/share/Spinner'

const Blogs = () => {
  
    const { loading , data , error} = useQuery(GET_BLOGS_INFO);
 
   
    if (error) return  <Error />  
    if (loading) return <Spinner me-n5/>
  if(data) return(
    <div className="d-flex flex-row flex-wrap m-0">
        { data.posts.map(item => 
        <div key={item.id} className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 px-1 '>
           <BlogsCard  item={item} />
        </div>
        )}
    </div>
  )
   
  
}

export default Blogs