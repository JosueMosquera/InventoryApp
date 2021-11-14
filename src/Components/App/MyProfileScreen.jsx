import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from './NavBar'
export const MyProfileScreen = () => {
    const{name,email,image_url} = useSelector(state=>state.auth)
    const{products} = useSelector(state=>state.inventory)
    return (
        <>
        <NavBar/>
        <div className="container-profile">
        <div className='card-profile'>
           <div className="img-profile">
            <img src={image_url} alt="avatar"  className='avatar-profile'/>
           </div>
           <div className="stats-profile">
                <p className='stats-text'>username: {name}</p>
                <p className='stats-text'>Email:{email}</p>
                <p className='stats-text'>Objetos en el Inventario: {products.length}</p>
           </div>
        </div>
        </div>
        </>
    )
}
