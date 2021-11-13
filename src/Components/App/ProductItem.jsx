import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {  startDeleting } from '../../actions/inventory'
import cover from '../../assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'
export const ProductItem = ({product}) => {
  const dispatch = useDispatch()
  const handleDelete = ()=>{
    dispatch(startDeleting(product.id))
  }
    return (
        <>
        <center>
            <div className="col">
    <div className="card">
       <img src={cover} alt='inventory' className='img-fluid' /> 
      <div className="card-body">
        <h5 className="card-title">{product.product}</h5>
        <p className="card-text">Precio:{product.price}$</p>
        <p>Stock:{product.stock}</p>
        <Link to={`/edit/${product.id}`} className="btn btn-primary">Editar</Link>
        <button className="ms-2 btn btn-danger" onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  </div>
  </center>
        </>
    )
}
