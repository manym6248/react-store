import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/share/Card';
import { fetchProduct } from '../redux/products/productsAction';

import styles from './menu.module.scss'

const Menu = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.products);
  const [num, setNum] = useState(0)
  useEffect(() => { }, [
    dispatch(fetchProduct())
  ])
  return (
    <div
      className={`${styles.body}`}>
      <div className='d-flex flex-row flex-wrap mt-5'>
        <div className='col-xl-3 col-lg-3 col-12 p-3'>
          <div className="card border-0">
            <ListGroup className={`${styles.items} shadow-sm border-0 pt-3`}>
              <ListGroup.Item onClick={() => setNum(0)} className={`${styles.item} m-3 mt-0 shadow-sm border-0 `}>منو اصلی</ListGroup.Item>
              <ListGroup.Item onClick={() => setNum(1)} className={`${styles.item} m-3 mt-0 shadow-sm border-0 `}>پیتزا</ListGroup.Item>
              <ListGroup.Item onClick={() => setNum(2)} className={`${styles.item} m-3 mt-0 shadow-sm border-0 `}>هبرگر</ListGroup.Item>
              <ListGroup.Item onClick={() => setNum(3)} className={`${styles.item} m-3 mt-0 shadow-sm border-0 `}>پاستا</ListGroup.Item>
              <ListGroup.Item onClick={() => setNum(4)} className={`${styles.item} m-3 mt-0 shadow-sm border-0 `}>چیپس</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className='col-xl-9 col-lg-9  col-12 p-3'>
          <div className="d-flex flex-row flex-wrap m-0 p-0" >
            {
              num === 0 && product.map(item =>
                <div key={item.id} className="col-xl-4 col-lg-4
                       col-md-6 col-sm-6 col-12 px-1 pt-0 pb-3" >
                  <Card
                    item={item}
                  />
                </div>)
            }
            {
              num === 1 && product.filter(item => item.type === "p").map(item =>
                <div key={item.id} className="col-4 px-1 pt-0 pb-3" >
                  <Card
                    item={item}
                  />
                </div>)
            }
            {
              num === 2 && product.filter(item => item.type === "h").map(item =>
                <div key={item.id} className="col-4 px-1 pt-0 pb-3" >
                  <Card
                    item={item}
                  />
                </div>)
            }
            {
              num === 3 && product.filter(item => item.type === "pa").map(item =>
                <div key={item.id} className="col-4 px-1 pt-0 pb-3" >
                  <Card
                    item={item}
                  />
                </div>)
            }
            {
              num === 4 && product.filter(item => item.type === "g").map(item =>
                <div key={item.id} className="col-4 px-1 pt-0 pb-3" >
                  <Card
                    item={item}
                  />
                </div>)
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menu