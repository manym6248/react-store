
import React, { useEffect, useRef, useState } from 'react'
import styles from './post.module.scss'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth, storage } from '../firebase';
import imgIcon from '../assets/svg/Icons8_flat_add_image.svg.png'
import { uploadBytesResumable, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {v4} from 'uuid';
import { useSelector ,useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/products/productsAction';
import Card from '../components/share/Card';



const Addproduct = () => {
     const [name , setName] = useState("");
     const [text , setText] = useState("");
     const [price , setPrice] = useState("");
     const [type , setType] = useState("");
     const [discount , setDiscount] = useState("");
     const [quntity , setQuntity] = useState(0);
     const [file , setFile] = useState(null);
     const [imgurl , setImgurl] = useState(null);
     const inputRef = useRef(null);
     const [inputFile, setInputFile] = useState(null);
    


 
     const dispatch = useDispatch()
// for send data
    const productCollectionRef = collection(db , "products")
     const createProduct = async ()=>{
      await addDoc(productCollectionRef, 
        {name ,
         text ,
         img:imgurl ,
         price,
         discount,
         quntity,
         type,
         author: {name:auth.currentUser.displayName ,
                  id:auth.currentUser.uid
                 }
        })
        dispatch(fetchProduct())
      
        
     }
     //for get dtat 
     const ProductsData = useSelector(state => state.products.products)
     useEffect(()=>{
      dispatch(fetchProduct());
    
      const uploadFile = ()=>{
        const name = new Date().getTime()+file.name;
        const storageRef = ref(storage , file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
        break;
    }
  }, 
  (error) => {
    // if have err in send image
    console.log(error);
  }, 
  () => {
    // get img url  for use project
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImgurl(downloadURL)
    });
  }
)
      }
      file && uploadFile();
     },[file])

     // for delete post
    //  const deletProducts =async (id) =>{
    //   const postProduct = doc(db , "products" , id)
    //   await deleteDoc(postProduct)
    //  }

     
     const handleUpload = () => {
      inputRef.current?.click();
      console.log(inputRef.current);
    };

     

  return (
<div className={styles.body}>
   <div className="container p-0">
        <div className='d-flex flex-row my-5 pb-5 px-0 mx-0'>
               <div  className='col-6 p-3 '>
                   <div className={styles.inputs} >
                    {
                      imgurl?
                      <img className={styles.img} src={imgurl} alt="img" />:
                      <div className="m-3 mt-5">
                      <label className="mx-3"> </label>
                      <input className="d-none"
                        ref={inputRef}
                        onChange={(event)=>{setFile(event.target.files[0])}} 
                        type="file" />
                      <button onClick={handleUpload} className={styles.btn12}>
                        <img src={imgIcon} alt="img" />
                      </button>
                    </div>
                       
                      }
                      {/* <img  src={imgIcon} alt="img" /> */}
                   
                     
                   
                   </div>
               </div>
               <div className='col-6 p-3 '>
               <div className={styles.inputs} >
                   <h3 className="mb-4" >ثبت محصول</h3>
                   <input className= "form-control form-control-lg  mb-3"  type="text" placeholder='نام'  onChange={(event)=>setName(event.target.value)}  />
                   <input className= "form-control form-control-lg  mb-3"   type="text" placeholder='قیمت' onChange={(event)=>setPrice(event.target.value)}/>
                   <input  className= "form-control form-control-lg  mb-3"   type="text" placeholder='تخفیف' onChange={(event)=>setDiscount(event.target.value)}/>
                   <select className="form-select form-select-lg mb-3" onChange={(event)=>setType(event.target.value)} aria-label=".form-select-lg example">
                    <option value="n" >نوع غذا</option>
                    <option value="p">پیتزا</option>
                    <option value="h">همبرگر</option>
                    <option value="pa">پاستا</option>
                    <option value="g">چیپس</option>
                  </select>
                  <textarea  className= "form-control form-control-lg  mb-3"  type="text" placeholder='توضیحات' onChange={(event)=>setText(event.target.value)}></textarea>
                   <button
                     className='btn btn-primary btn-lg mt-3'
                     onClick={createProduct}>ثبت
                   </button>
                  </div>
               </div>
        <div>
          </div>
        </div>   
   </div>  
   <div className="container p-0">
        <div className='d-flex flex-row flex-wrap my-5 pb-5 px-0 mx-0'>
        {ProductsData.map(item => {
          return(
              <div key={item.id} className='col-4 p-3 '>
                <Card 
                id={item.id} 
                name={item.name}
                img={item.img}
                text={item.text}
                price={item.price}
                quntity={item.quntity}
                  />
              </div>
              )
              
              {/* <button onClick={()=>{deletProducts(item.id)}}>حذف</button> */}
            })}
            
        </div>
  </div>
</div>

  )
}

export default Addproduct