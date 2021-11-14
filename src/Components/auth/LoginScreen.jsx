import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginWithEmailPassword, loginWithGoogle } from '../../actions/auth'
import hero from '../../assets/undraw_vault_re_s4my.svg'
import { Link } from 'react-router-dom'
export const LoginScreen = ({isLoggedIn}) => {
  const dispatch = useDispatch()
  const[formValues,setFormvalues] = useState({
    email:'',
    password:'',
  })
  const handleInputChange = ({target})=>{
    setFormvalues({
      ...formValues,
      [target.name]:target.value
    })
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    const {email,password} = formValues
    dispatch(loginWithEmailPassword(email,password))
  }
  const handleLoginWithGoogle = ()=>{
    dispatch(loginWithGoogle())
  }
    return (
        <div className='container'>
          <div className="title">
          <h1>JA Inventory</h1>
          </div>
          <div className="auth__container">
            <div className="form-container">
            <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleInputChange} required autoComplete='off'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleInputChange} required autoComplete='off'/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <a className="btn btn-success ms-2" onClick={handleLoginWithGoogle} href>Signup With Google</a>
  <br />
  <br />
  <Link to='/register' className='link'>
  Create new Account
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
