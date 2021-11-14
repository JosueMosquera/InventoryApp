import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../actions/auth'
import hero from '../../assets/undraw_vault_re_s4my.svg'
export const RegisterScreen = () => {
 
    const dispatch = useDispatch()
    const[formValues,setFormValues] = useState({
        email:'',
        password:'',
        name:''
    })
    const handleInputChange = ({target})=>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
        
    }
    const handleRegister = (e)=>{
      e.preventDefault()
      const {email,password,name} = formValues
      dispatch(register(email,password,name))
    }
    return (
        <div className='container'>
           <div className="title">
          <h1>JA Inventory</h1>
          </div>
          <div className="auth__container">
            <div className="form-container">
            <form onSubmit={handleRegister}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleInputChange} required autoComplete='off'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleInputChange} required autoComplete='off'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={handleInputChange} required autoComplete='off'/>
  </div>
  <button type="submit" className="btn btn-primary">SignUp</button>
  <Link to='/login' className='link'>
  Do you have account?
</Link>
</form>
</div>
<div className="hero">
  <img src={hero} alt="" className='auth__hero' />
</div>
</div>
        </div>
    )
}
