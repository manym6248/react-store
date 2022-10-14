const initialStat ={
    loadin:false,
    products:[],
    error: "",
 

}

const productReducer = (state=initialStat , action) =>{
    switch (action.type) {
        case "GET_PRODUCTS_REQEST":
            return{
                ...state,
                loadin:true
            }
        case "GET_PRODUCT_RESPONSE":
         
        return{
         loadin : false,
         products:[...action.pyload]
        }
        case "GET_PRODUCT_ERROR":
            return{
                products:[],
                error:action.pyload
            }
        default:
            return state
            ;
    }
}

export default productReducer;