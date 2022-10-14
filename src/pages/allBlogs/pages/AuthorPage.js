import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../../../graphql/queries'
import BlogsCard from '../BlogsCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import styles from './AuthorPage.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../assets/css/main.css"
import Spinner from '../../../components/share/Spinner'
import Error from '../../../components/share/Error'
const AuthorPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO,
    { variables: { slug }, });
  if (errors) return  <Error />  
  if (loading) return <Spinner me-n5/>
  if (data) return (
    <>
      <div>
        <div className={styles.bodya}></div>
        <div className='container'>
          <div className={styles.body}>
            <div className="d-flex flex-row flex-wrap card mt-5 g-0 border-0 shadow-lg position-relative">
              <div className="col-md-5 mb-md-0 p-md-4">
                <img  src={data.author.avatar.url} className="w-100 h-100" alt="..." />
              </div>
              <div className="col-md-7 p-0 ps-md-0">
                <h5 className="mt-4 mt-md-5">{data.author.name}</h5>
                <p className="card-text pe-0">
                  <small className="text-muted">{data.author.fild}</small>
                </p>
                <p className={`${styles.text} pt-2 pb-5 px-5 pe-md-2 ps-md-5 `}> {data.author.discription.text}</p>
               
              </div>
            </div>
           
          </div>
          {/*  */}
          <div className='px-4 mb-5'>
            <h1 className='mb-4 text-end'>مقالات</h1>
            <Swiper

              slidesPerGroup={1}
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper mt-0 pt-0"

            >
              {data.author.posts.map(item =>
                <SwiperSlide key={item.id}>

                  <BlogsCard key={item.id} item={item} />
                </SwiperSlide>
              )}

            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorPage