import React, { useState} from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./style/login.css"
import "./style/signup.css"
import { FaAngleLeft } from "react-icons/fa";

export default function LoginSystem() {
  const navigate = useNavigate()

  const [ loginTitle, setLoginTitle] = useState("Welcome Back")

  const LoginHeader = ((mgs)=>{
      if(mgs === "login"){
        setLoginTitle("Welcome Back")
      }else{
        setLoginTitle("Create acount")
      }
  })

  const handleClose = (()=>{
    navigate('/hot')
  })

  return (
    <div className='loginEngine'>
      <div className="elips-right"></div>
    <div className='loginEngine-container'>
        <div className="navigate-back"  onClick={handleClose}>
          <h3><FaAngleLeft /></h3>
        </div>
        <div className="header-topic">
          <div className="header-topic-container">
              <h3>{loginTitle}</h3>
          </div>
        </div>
        <div className="login-nav-container">
            <div className='login' onClick={()=>LoginHeader('login') } >
                <NavLink to="login">
                  <h3>Login</h3>
                </NavLink>
            </div>
            <div className='login' onClick={()=>LoginHeader('log') } >
                <NavLink to="signup">
                    <h3>Signup</h3>
                </NavLink>
            </div>
          </div>

          <div className="login-form">
              <Outlet />
          </div>
    </div>
  </div>
  )
}
