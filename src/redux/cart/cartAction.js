export const addItem = product =>{
    return{
        type:"ADD_ITEM",
        payload:product
    }
}
export const increase = product =>{
    return{
        type:"INCREASE",
        payload:product
    }
}
export const decrease = product =>{
    return{
        type:"DECREASE",
        payload:product
    }
}
export const remove = product =>{
    return{
        type:"REMVE_ITEM",
        payload:product
    }
}
export const chechkout = () =>{
    return{
        type:"CHECKOUT",
      
    }
}
export const clear = () =>{
    return{
        type:"CLEAR",
      
    }
}