import React, { useState } from 'react'
import { FiEye, FiEyeOff  } from "react-icons/fi";
import "../style/login.css"

export default function Login(){

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ Error, setError ] = useState('')
  const [ Displaypassword, setDisplayPassword ] = useState('password')

  const [ showPassword, setShowPassword ] = useState(true)

  const handleLogin = ((e)=>{
    e.preventDefault()

    let data = { email, password }

    setError("Something went wrong")
    console.log(data)
  })
  const handleShowPassword = (()=>{
    if(showPassword){
      setShowPassword(false)
      setDisplayPassword('text')
    }else{
      setShowPassword(true)
      setDisplayPassword('password')
    }
  })

  return (
    <div className='login-page'>
      <div className='login-page-inner'>
        <form onSubmit={handleLogin}>
          <div className='login-inputs-container'>
            <div className='titl'>
              <h3>Email</h3>
            </div>
            <div className="input">
                <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder="email" required />
            </div>
          </div>
            <div className='login-inputs-container'>
              <div className='titl'>
                <h3>Password</h3>
              </div>
              <div className="input">
                <div className="password-div">
                    <input type={Displaypassword} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" required />
                </div>
                  <div className="show-password">
                    <h4 className='open-eye' onClick={handleShowPassword} > { showPassword ? <FiEye /> : <FiEyeOff />} </h4>
                  </div>
              </div>
            </div>
              <div className='forgot-password'>
                <div className="empty-space">
                  { Error && <p>{Error}</p> }
                </div>
                <div className="content">
                  <h3 >Forgot Password?</h3>
                </div>
              </div>
            <div className='submit-btn'>
              <button>Log In</button>
            </div>
            <div className='login-middleWare'>
              <h3>OR</h3>
            </div>
            <div className="google-auth">
              <button>Continue with Google</button>
            </div>
        </form>
      </div>
    </div>
  )
}
