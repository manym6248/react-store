import {collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';



const getProductsReqest = () =>{
    return {type :"GET_PRODUCTS_REQEST"}
}
const getProductRes = (products) =>{
    
    
    return {
           type :"GET_PRODUCT_RESPONSE",
            pyload:products
          }
         
}
const GetDataError = () =>{
    return {type :"GET_PRODUCT_ERROR"}
}


const productCollectionRef = collection(db , "products")
export const fetchProduct =   () =>{
    return async (dispatch) => {
        dispatch(getProductsReqest())
       
         

        const data = await getDocs(productCollectionRef); 
        const products =data.docs.map((doc)=>({...doc.data(), id:doc.id}))
      
        if(products.length){
          
              
                    dispatch(getProductRes(products))
                
                
              
            

        } 
    }
}
