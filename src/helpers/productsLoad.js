import { collection,getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebase-config";

export const productsLoad = async(uid,email)=>{
    const productsSnap = await getDocs(collection(db,`${uid}/${email}/inventory`));
    const products = [];
    productsSnap.forEach(snapHijo =>{
        products.push({
            id:snapHijo.id,
            ...snapHijo.data()
        })
    })
    return products
}