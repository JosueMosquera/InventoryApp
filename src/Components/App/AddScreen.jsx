import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startNewProduct } from '../../actions/inventory'
import hero from '../../assets/undraw_create_re_57a3.svg'
import { NavBar } from './NavBar'
export const AddScreen = () => {
    const dispatch = useDispatch()
    const[formValues,setFormValues] = useState({
        product:'',
        price:0,
        stock:1
    })
    const handleInputChange = ({target})=>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    }
    const handleAddInventory = (e)=>{
        e.preventDefault()
        const{product,price,stock} = formValues
        dispatch(startNewProduct(product,price,stock))
        Swal.fire('Created','objeto agregado al inventario','success')
    }

    
    
    return (
        <>
        <NavBar/>
        <div className='container'>
        <div className="auth__container">
          <div className="form-container">
          <form onSubmit={handleAddInventory}>
<div className="mb-3">
  <label htmlFor="nameAdd" className="form-label">Nombre del Objeto</label>
  <input type="text" className="form-control" id="nameAdd"  name='product' onChange={handleInputChange} required autoComplete='off'/>
</div>
<div className="mb-3">
  <label htmlFor="price" className="form-label">Precio Del Objeto</label>
  <input type="float" className="form-control" id="price" name='price' onChange={handleInputChange} min='0' required autoComplete='off'/>
</div>
<div className="mb-3">
  <label htmlFor="stock" className="form-label">Cantidad a Registrar</label>
  <input type="float" className="form-control" id="stock" name='stock' onChange={handleInputChange} min='1' required autoComplete='off'/>
</div>
<button type="submit" className="btn btn-primary">Agregar al Inventario</button>

</form>


</div>
<div className="hero">
<img src={hero} alt="" className='auth__hero' />
</div>
</div>
      </div>
      </>
    )
}
