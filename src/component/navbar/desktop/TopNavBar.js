import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../image/logodcc.svg"
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Derivative from './derivative/Derivative';
import Spot from './spot/Spot';

import "../../style/navbar.css"
import "../../style/coindrop.css"

export default function TopNavBar() {

  const Navigate = useNavigate()

  const [ spotDrop, setSpotDrop ] = useState(false)
  const [ derivativeDrop, setDerivativeDrop ] = useState(false)

  const handleShowSpot = (()=>{
    if(spotDrop){
      setSpotDrop(false)
      setDerivativeDrop(false)
    }else{
      setSpotDrop(true)
      setDerivativeDrop(false)
    }
  })

  const handleDerivative = (()=>{
    if(derivativeDrop){
      setDerivativeDrop(false)
      setSpotDrop(false)
    }else{
      setDerivativeDrop(true)
      setSpotDrop(false)
    }
  })

  const handleHome = (()=>{
    Navigate("/")
  })

  const handleMarketnavigate = (()=>{
      Navigate("/market/spot")
  })

  return (
    <div className="navbar-destop">
        <div className="navbar-destop-container">
            <div className="logo-container">
                <div onClick={handleHome} className="logo-content">
                    <div className="logo-img">
                      <img src={logo} alt="" />
                    </div>
                    <div className="logo-name">
                      <h3>DCC</h3>
                    </div>
                </div>
            </div>
          <div className="navigation-routes">
            <div onClick={handleMarketnavigate} className="market-container">
              <div className="market-content">
                  <h4>Market</h4>
              </div>
            </div>
            <div onClick={handleShowSpot} className="spot-container">
              <div className="spot-content">
                  <div className="spot-text">
                    <h4>Spot</h4>
                  </div>
                  <div className="spot-arrow">
                      <h4><RiArrowDropDownLine /></h4>
                  </div>
              </div>     
              { spotDrop && <Spot /> }         
            </div>
            <div onClick={handleDerivative} className="spot-container">
                <div className="spot-content">
                    <div className="spot-text">
                      <h4>Derivatives</h4>
                    </div>
                    <div className="spot-arrow">
                        <h4><RiArrowDropDownLine /></h4>
                    </div>
                </div>
                { derivativeDrop && <Derivative /> }
            </div>
  
            <div className="market-container">
              <div className="market-content">
                  <h4>Copy Trading</h4>
              </div>
            </div>
            <div className="market-container">
              <div className="market-content">
                  <h4>Affiliate</h4>
              </div>
            </div>
        </div>   
            <div className="login-container">
                <div className="login-content">
                    <div className="login-text">
                        <NavLink to="/sign/login"> Login </NavLink>
                    </div>
                    <div className="signup-button">
                        <NavLink to="/sign/signup"> Get started </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
