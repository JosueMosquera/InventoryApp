import { addDoc, collection, deleteDoc, doc, updateDoc } from "@firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { productsLoad } from "../helpers/productsLoad";
import { types } from "../types/types"

export const newObject = (id,user,product)=>({
    type:types.addNewProduct,
    payload:{
        id,
        ...product,
        ...user
    }   
})
export const startNewProduct = (product,price,stock) =>{
    return async(dispatch,getState) =>{
        const {uid,name,email} = getState().auth;
        const user={
            uid,
            name,
            email
        }
        const newProduct = {
            product:product,
            price:price,
            stock:stock
        }
        const docRef = await addDoc(
            collection(db,`${uid}/${email}/inventory`),newProduct
        )
        dispatch(newObject(docRef.id,user,newProduct))
    }
}
export const startLoadingProducts = (uid,email)=>{
    return async (dispatch)=>{
        const products = await productsLoad(uid,email);
        dispatch(setProducts(products))
    }
}
export const setProducts = (products)=>({
    type:types.loadProducts,
    payload:products
})
export const productsLogout = ()=>({
    type:types.cleaningLogout
})
export const startUpdateProduct  = (product)=>{
    return async(dispatch,getState)=>{
        const{uid,email} = getState().auth;
        const productToFirestore={...product}
        delete productToFirestore.id;
        try{
            const saveProduct = await doc(db,`${uid}/${email}/inventory/${product.id}`)
            await updateDoc(saveProduct,productToFirestore)
            dispatch(refreshProduct(product.id,productToFirestore))
            Swal.fire('Saved',product.product,'success')
        }
        catch(error){
            throw new Error(error)
        }
    }
}
export const refreshProduct = (id,product)=>({
    type:types.updateProduct,
    payload:{
        id,
        product:{
            id,
            ...product
        }
    }
})
export const startDeleting = (id)=>{
    return async(dispatch,getState)=>{
        const {uid,email} =getState().auth;
        const refDoc = doc(db,`${uid}/${email}/inventory/${id}`)
        await deleteDoc(refDoc)
        dispatch(deleteProduct(id))
    }
}
export const deleteProduct = (id)=>({
    type:types.deleteProduct,
    payload:id
})