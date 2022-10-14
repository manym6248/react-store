import React from 'react'
import styles from './UserCard.module.scss';


const UserCard = ({item ,img}) => {
  
  return (
    <div className={styles.box}>
        <div className={`${styles.card} card `}>
            <p>{
              item?.text ? item?.text:
          `  لورم ایپسوم متن ساختگی با تولید سادگی
             نامفهوم از صنعت چاپ و با استفاده 
            از طراحان گرافیک است چاپگرها و
             متون بلکه روزنامه و مجله در ستون
             و سطرآنچنان که لازم است و برای
             شرایط فعلی تکنولوژی مورد نیاز`
              }
            </p>
            <h5>
              {
                item?.name ? item?.name : "کاربر سایت"
              }
            </h5>
            <p className='m-0'>لورم ایپسوم متن</p>
        </div>
        <div className={styles.img}>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default UserCard