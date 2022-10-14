

const initialState = {
    selectItems:[],
    itemsCounter:0,
    total:0,
    checkout:false

}

const sumItems = items =>{
   const itemsCounter = items.reduce((total, product)=> total+product.quantity ,0)
   const total = items.reduce((total, product)=> total+ product.price * product.quantity ,0).toFixed(2)
   return{
    itemsCounter,
    total
   }
}

const createReduser =(state = initialState , action) =>{
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectItems.find(item => item.id === action.payload.id)) {
                console.log("dsd");
                state.selectItems.push({...action.payload
                , quantity : 1})
            }
            return {
                ...state,
                selectItems:[...state.selectItems],
                ...sumItems(state.selectItems)
            }
        case "REMVE_ITEM":
              const deletItem = state.selectItems.filter(item => item.id !== action.payload.id);
              return{
                ...state,
                selectItems : [...deletItem],
                ...sumItems(deletItem)
              }
        case "INCREASE":
            const index = state.selectItems.findIndex(item => item.id === action.payload.id)
             state.selectItems[index].quantity++;
            return{
                ...state,
                ...sumItems(state.selectItems)
            }
        case "DECREASE":
            const indexd = state.selectItems.findIndex(item => item.id === action.payload.id)
            state.selectItems[indexd].quantity--;
            return{
                ...state,
                ...sumItems(state.selectItems)

            }
        case "CHECKOUT":

         return{
            selectItems:[],
            itemsCounter:0,
            total:0,
            checkout:true
         }

        case "CLEAR":

            return{
                selectItems:[],
                itemsCounter:0,
                total:0,
                checkout:false
             }

        default:
            return state
            
            
    }
}

export default createReduser ;