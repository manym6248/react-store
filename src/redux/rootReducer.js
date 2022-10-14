import { combineReducers } from "redux";
import productReducer from "./products/productsReducer";
import createReduser from "./cart/cartReducer";

const rootReducer = combineReducers({
   products:productReducer,
   cart:createReduser
})

export default rootReducer