import {getAuth,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import Swal from 'sweetalert2';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { productsLogout } from './inventory';


export const register = (email,password,name)=>{
    
    return async(dispatch) =>{
        try {
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth,email,password)
            await updateProfile(user,{displayName:name})
            dispatch(
                login(user.uid,user.displayName,user.email,user.photoURL)
            )
            Swal.fire('Succes','Registro Exitoso','success')
        } catch (error) {
            Swal.fire('Error',error.message,'error')
        }
        
    }
    
}
export const login = (uid,displayname,email,image_url)=>{
    return{
        type:types.login,
        payload:{
            uid,
            displayname,
            email,
            image_url
        }
    }
}
export const startLogout = ()=>{
    return async(dispatch) =>{
        const auth=getAuth();
        await auth.signOut()
        dispatch(logout())
        dispatch(productsLogout())
    }
}
export const logout = ()=>{
    return{
        type:types.logout
    }
}
export const loginWithEmailPassword = (email,password)=>{
    return async(dispatch)=>{
        const auth = getAuth()
        try {
            const {user} = await signInWithEmailAndPassword(auth,email,password)
            dispatch(login(user.uid,user.displayName,user.email,user.photoURL))
            Swal.fire('Succes',`Bienvenido ${user.displayName}`,'success')
        } catch (error) {
            Swal.fire('Error',error.message,'error')
        }
      
    }
    

}
export const loginWithGoogle = ()=>{
    return async (dispatch)=>{
        const auth = getAuth()
        try {
            const {user} = await signInWithPopup(auth,googleAuthProvider)
            dispatch(login(user.uid,user.displayName,user.email,user.photoURL))
            
        } catch (error) {
            Swal.fire('error',error,'error')
        }
    }
}