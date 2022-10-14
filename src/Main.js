import React from 'react'
import Slide from './components/main/Slide'
import SlideCard from './components/main/SideCard'
import img1 from './assets/images/o1.jpg'
import img2 from './assets/images/o2.jpg'
import Card from './components/share/Card'
import Aboutcomponent from './components/main/Aboutcomponent'
import { BookATable } from './components/main/BookATable'
import WhatSaysOurCustomers from './components/main/WhatSaysOurCustomers'
import TabProducts from './components/main/TabProducts'
import MinSlide from './components/main/MinSlide'

const Main = ({Size}) => {
  return (
    <div >
       {Size > 990 && <Slide  />}
       {Size < 990 && 
       <div className='container pt-5'>
         <div className='card border-0 shadow-lg mt-5 '>
           <MinSlide  />
         </div>
       </div>
        }
        <div className='container p-0'>

        <div className='d-flex flex-row flex-wrap md-my-5 py-5 px-0 mx-0'>
        <div className='col-md-6 col-12 p-3 '>
           <SlideCard text="پنجشنبه های خوشمزه" off="20" img={img1}  />
        </div>
        <div className='col-md-6 col-12 p-3 '>
           <SlideCard text="روز پیتزا" off="12" img={img2}/>
        </div>
        </div>
        </div>
        <article>
          <div className='container md-p-0 p-3'>

            <TabProducts />
            
        </div>
       </article>
    { Size > 990 &&  <article>
        <Aboutcomponent />
       </article>}
       <article>
        <BookATable />
       </article>
       <article>
        <WhatSaysOurCustomers title={'مشتریان'} />
       </article>
    </div>
  )
}


export default Main