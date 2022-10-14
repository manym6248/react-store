import React from 'react';
import UserCard from '../share/UserCard';
import styles from './WhatSaysOurCustomers.module.scss';
import user1 from '../../assets/images/client1.jpg'
import user2 from '../../assets/images/client2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/main.css"
import { useQuery } from '@apollo/client';
import { GET_COMMETS_POST } from '../../graphql/queries';
import NotFound from '../../assets/png/undraw_No_data_re_kwbl.png'

const WhatSaysOurCustomers = ({ title, slug }) => {
  const { loading, data, errors } = useQuery(GET_COMMETS_POST,
    { variables: { slug } });
  if (slug) {
    if (loading) return <h1>در حال بار گذاری</h1>
    if (errors) return <h1> erorr  </h1>
    if (data) return (
      <div>
        <h2>نظرات {title}</h2>
        <div className={!data.comments.length ? styles.body2 : styles.body }>
          <div className='container p-0 '>
            { !data.comments.length && <>
            <img className={styles.commentsImgError} src={NotFound} alt="img" />
            <h4 className='blockquote-footer'>نظری ثبت نشده</h4>
            </>
            }
            { !!data.comments.length && <div className='d-flex flex-row align-items-center mx-0 '>
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mt-0 pt-0"

              >

             
                {data.comments.map(item => <SwiperSlide key={item.id} >
                  <UserCard item={item} img={user2} />
                </SwiperSlide>


                )}


              </Swiper>

            </div>}
          </div>
        </div>
      </div>
    )
  }

  if (!slug) return (
    <div>
      <h2>نظرات {title}</h2>
      <div className={styles.body}>
        <div className='container h-100 p-0 '>
          <div className='d-flex h-100 flex-row align-items-center mx-0 '>
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
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-100 mt-0 pt-0"

            >

              <SwiperSlide >

                <UserCard img={user1} />
              </SwiperSlide>
              <SwiperSlide >

                <UserCard img={user2} />
              </SwiperSlide>
              <SwiperSlide >

                <UserCard img={user1} />
              </SwiperSlide>
              <SwiperSlide >

                <UserCard img={user2} />
              </SwiperSlide>


            </Swiper>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatSaysOurCustomers