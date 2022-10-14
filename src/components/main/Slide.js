import React , { useRef, useState } from 'react'
import img from '../../assets/images/hero-bg.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./slide.scss";

import { Pagination } from "swiper";


const Slide = () => {
  return (
    <div className="slide">
        <img className="img" src={img} alt="img" />
        <div className="wSlide">
        <div className='container h-100'>
        <div className='row m-0 h-100'>
        <div className='col-6'>
        <Swiper
     
        className="mySwiper"
        >
        <SwiperSlide>
          <h1 className="title">
          رستوران فست فود
          </h1>
          <p>لورم ایپسوم متن ساختگی با 
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده
             از طراحان گرافیک است چاپگرها و متون بلکه 
            روزنامه و مجله در ستون و سطرآنچنان که لازم
             است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
             <button className="btnBig">
                
                سفارش انلاین</button>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="title">
          رستوران فست فود
          </h1>
          <p>لورم ایپسوم متن ساختگی با 
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده
             از طراحان گرافیک است چاپگرها و متون بلکه 
            روزنامه و مجله در ستون و سطرآنچنان که لازم
             است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
             <button className="btnBig">
                
                سفارش انلاین</button>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="title">
          رستوران فست فود
          </h1>
          <p>لورم ایپسوم متن ساختگی با 
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده
             از طراحان گرافیک است چاپگرها و متون بلکه 
            روزنامه و مجله در ستون و سطرآنچنان که لازم
             است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
             <button className="btnBig">
                
                سفارش انلاین</button>
        </SwiperSlide>
      
       
      </Swiper>
          </div>
        <div className='col-6'>
          </div>
          </div>

        </div>
      
        </div>
    </div>
  )
}

export default Slide