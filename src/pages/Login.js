import React from 'react'
import {auth , provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.scss'
import pizaa from '../assets/images/f6.png'
const Login = ({setIsAuth, signUserOut}) => {

    let navigate = useNavigate()
    const siningWhiteGoogle = () => {
       console.log('fssf');
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("IsAuth",true)
                setIsAuth(true);
                // go home after login
                navigate("/")
        })
     }

  return (
    <div className={styles.body} >
      
        <img src={pizaa} alt="img" />
        <button type="button" onClick={siningWhiteGoogle} 
           className={styles.login} >
                غذا آمادس بفرمایید 
       </button>
    
    {/* <button onClick={signUserOut}>
        logout
    </button> */}

    </div>
 
  )
}

export default Login