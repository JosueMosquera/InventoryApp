import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavBar } from './NavBar'
import hero from '../../assets/undraw_create_re_57a3.svg'
import { useLocation} from 'react-router-dom'
import { startUpdateProduct } from '../../actions/inventory'
import { useSelector } from 'react-redux'
export const EditScreen = () => {
    const dispatch = useDispatch()
    let location = useLocation();
    let parseId = location.pathname.split('/')
    const id = parseId[2]
    const {products} = useSelector(state=>state.inventory)
    const getProduct = (id)=>{
        let productId
            products.forEach((product)=>product.id===id?productId=product:null)
           return productId
    }
   
    const productFiltered = getProduct(id)
 
    const[formValues,setFormValues] = useState({
        product:productFiltered?.product,
        price:productFiltered?.price,
        stock:productFiltered?.stock,
    })
 

 
const{product,price,stock} =formValues



    const handleInputChange = ({target})=>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    }
   
    const handleSubmitForm = (e)=>{
        e.preventDefault()
        const{product,price,stock}=formValues
        const productEdit = {
            id,
            product,
            price,
            stock
        }
        dispatch(startUpdateProduct(productEdit))
    }
    return (
        <>
             <NavBar/>
        <div className='container'>
        <div className="auth__container">
          <div className="form-container">
          <form onSubmit={handleSubmitForm}>
<div className="mb-3">
  <label htmlFor="nameAdd" className="form-label">Nombre del Objeto</label>
  <input type="text" className="form-control" id="nameAdd"  name='product' onChange={handleInputChange}  value={product} />
</div>
<div className="mb-3">
  <label htmlFor="price" className="form-label">Precio Del Objeto</label>
  <input type="float" className="form-control" id="price" name='price' onChange={handleInputChange} min='0' value={price}/>
</div>
<div className="mb-3">
  <label htmlFor="stock" className="form-label">Cantidad a Registrar</label>
  <input type="float" className="form-control" id="stock" name='stock' onChange={handleInputChange} min='1' value={stock}/>
</div>
<button type="submit" className="btn btn-primary">Guardar</button>

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
