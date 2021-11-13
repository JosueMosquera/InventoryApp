import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  startLogout } from '../../actions/auth'


export const NavBar = () => {
    const {name,uid} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        dispatch(startLogout())
    }
    const handleCollapse = ()=>{
        const nav = document.querySelector('#navbarNavAltMarkup')
        if(nav.style.display==='block'){
            nav.style.display='none'
        }
        else{
            nav.style.display='block'
        }
    }
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <span className='text-black mt-1'>Bienvenido {name}</span>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={handleCollapse}>
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav d-flex">
    <Link className="nav-link" to={`/profile/${name}`} >Mi Perfil</Link>
    <Link className="nav-link" to='/' >Home</Link>
      <Link className="nav-link" to='/addInventory' >Agregar Al Inventario</Link>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  </div>
</div>
</nav> 
        </>
    )
}