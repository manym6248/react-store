import React, { useRef, useState } from 'react'
import piza from '../../assets/images/f6.png'
import f2 from '../../assets/images/f2.png'
import f5 from '../../assets/images/f5.png'
import f16 from '../../assets/images/f4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from './MinSlide.module.scss';
// Import Swiper styles
import "swiper/css";
import "./slide.scss";
const MinSlide = () => {
    return (

        <Swiper

            slidesPerGroup={3}
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className={`${styles.Swiper} p-3 w-100  `}
        >
            <SwiperSlide className={`${styles.SwiperSlide}  `}>
                <div className={styles.div}>
                    <div>
                        <img src={piza} alt="..." />
                    </div>
                </div>
                <h5>پیتزا</h5>
            </SwiperSlide>
            <SwiperSlide className={`${styles.SwiperSlide}   `}>
                <div className={styles.div}>
                    <div>
                        <img src={f5} alt="..." />
                    </div>
                </div>
                <h5 className=' text-truncate'>سیب زمینی سرخ شده</h5>
            </SwiperSlide>
            <SwiperSlide className={`${styles.SwiperSlide}  `}>
                <div className={styles.div}>
                    <div>

                        <img src={f2} alt="..." />
                    </div>
                </div>
                <h5>همبرگر</h5>
            </SwiperSlide>
            <SwiperSlide className={`${styles.SwiperSlide}  `}>
                <div className={styles.div}>
                    <div>

                        <img src={f16} alt="..." />
                    </div>
                </div>
                <h5>پاستا</h5>
            </SwiperSlide>


        </Swiper>

    )
}

export default MinSlide