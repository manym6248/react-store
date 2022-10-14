import React, { useEffect, useState } from 'react'
import styles from "./nav.module.scss"
import cart from "../../assets/svg/cart-fill.svg";
import search from "../../assets/svg/search.svg";
import user from "../../assets/svg/person-fill.svg"
import { Link, useLocation } from 'react-router-dom';
import  logo  from '../../assets/png/logonomy-1665253080714.png'
import Container from 'react-bootstrap/Container';

import { Nav, Navbar } from 'react-bootstrap'

import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux';

const Navbarr = ({ scrollPosition, Size, eventCart }) => {
   const state = useSelector(state => state.cart)
   const data1 = useLocation();


   useEffect(() => {

   }, []);



   if (Size > 990) {
      return (<div className={scrollPosition && data1.pathname === '/' ? `${styles.base} position-fixed w-100` : `${styles.base2} position-fixed w-100`} >
         {data1.pathname === '/' && scrollPosition && <div className='mt-4'></div>}
         <div className={`container  py-2`}>
            <div className={styles.row}>
               <div className={styles.logo}>
                  <img src={logo} alt="..."  />
               </div>

               <ul className={`${styles.nav} nav justify-content-center p-0`}  >
                  <li className="nav-item">
                     <Link className="nav-link active px-4 ps-2 pe-0" aria-current="page" to="/">صحفه اصلی</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link px-4 py-2" to="/menu">منو</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link px-4 py-2" to="/allBlogs">مقالات</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link px-4 py-2" to="/addproduct">درباره ما</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link  px-4 py-2" to="/reserve" >رزرو میز</Link>
                  </li>
               </ul>

               <div className={styles.row2}>

                  <button className={styles.btnBig}>

                     سفارش انلاین</button>
                  <button className={`${styles.btnMin} position-relative`} onClick={eventCart}>
                     <img src={cart} alt="img" />
                     <span class="position-absolute bottom-10 start-100 translate-middle badge rounded-pill bg-danger">
                        {state.itemsCounter}
                     </span>
                  </button>
                  <button className={styles.btnMin}>
                     <img src={user} alt="img" />

                  </button>
                  <button className={styles.btnMin}>
                     <img src={search} alt="img" />
                  </button>
               </div>
            </div>
         </div>



      </div>)
   }
   if (Size <= 990) {
      return (<>

         <Navbar collapseOnSelect expand="lg" className={`${styles.zindex} px-2 py-2 position-fixed w-100 top-0 `} variant="dark" bg="dark">

            <Container>
               <Navbar.Brand className='m-0 p-0'>React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle className="border-0 shadow-0" />

               <Navbar.Collapse>

                  <Nav className="mr-auto text-end ">
                     <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/">
                           صحفه اصلی
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="2" as={Link} to="/menu">
                           منو
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="3" as={Link} to="/allBlogs">
                           مقالات
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey="4" as={Link} to="/addproduct">
                           درباره ما
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link className='mb-3' eventKey="5" as={Link} to="/reserve">
                           رزرو میز
                        </Nav.Link>
                     </Nav.Item>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>

      )

   }


}

export default Navbarr