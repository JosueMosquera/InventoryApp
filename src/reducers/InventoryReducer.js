import { types } from "../types/types"

/* const initState = {
    products:[
        {
           uid:'',
           name:'',
           price:0,
           stock:1
    }
],
user:{
    uid:'',
    name:'',
    email:''
}
} */
const initialState = {
    products:[],
    user:null
}
export const inventoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.addNewProduct:
            return{
                ...state,
                products:[action.payload,...state.products],
                user:action.payload.user
            }
        case types.loadProducts:
            return{
                ...state,
                products:action.payload,
                user:action.payload.user
            }
        case types.cleaningLogout:
            return initialState
        case types.updateProduct:
            return{
                ...state,
                products:state.products.map((product)=>product.id === action.payload.id?action.payload.product:product)
            }
        case types.deleteProduct:
            return{
                ...state,
                products:state.products.filter((product)=>product.id!==action.payload)
            }
        default:
            return state
    }
}