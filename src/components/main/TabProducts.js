import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from '../share/Card';
import styles from "./tab.module.scss"
import '../../assets/scss/main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../redux/products/productsAction';


function TabProducts() {
  const ProductsData = useSelector(state => state.products.products)
  const dispatch = useDispatch()

 useEffect(()=>{
   dispatch(fetchProduct())
 },[])

  return (
    <>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className={`${styles.tabs} md-mb-3 pr-0`}
    
      
    >
      
      <Tab eventKey="profile" title="همه">
      <div className='d-flex flex-row flex-wrap mb-5 mt-1 pb-5 px-0 mx-0'>
      {ProductsData.slice(0, 6).map(item => {
          return(
              <div key={item.id} className='col-xl-4 col-lg-4 col-md-6 col-12 pt-4 p-2'>
                <Card 
               item={item}
                  />
              </div>
              )
            })}
             
            </div>
      </Tab>
      <Tab  eventKey="home" title="همبرگر">
      <div className='d-flex flex-row flex-wrap mb-5 mt-1 pb-5 px-0 mx-0'>
      {ProductsData.filter(item => item.type === "h").map(item => {
          return(
              <div key={item.id} className='col-xl-4 col-lg-4 col-md-6 col-12 pt-4 p-2'>
                <Card 
                   item={item}
                  />
              </div>
              )
            })}
      </div>
      </Tab>
      <Tab eventKey="contact1" title="پیتزا" >
      <div className='d-flex flex-row flex-wrap mb-5 mt-1 pb-5 px-0 mx-0'>
      {ProductsData.filter(item => item.type === "p").map(item => {
          return(
              <div key={item.id} className='col-md-4 col-sm-6 col-12 pt-4 p-2'>
                <Card 
                  item={item}
                  />
              </div>
              )
            })}
      </div>
      </Tab>
      <Tab eventKey="contact2" title="پاستا" >

      </Tab>
      <Tab eventKey="contact3" title="چیپس" >

      </Tab>
    </Tabs>
    <div>
      <button className="btnBig mb-5">موارد بیشتر</button>
    </div>
    </>
    
  );
}

export default TabProducts;