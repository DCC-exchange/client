import React from 'react'

import userPhoto from "../../images/user_photo.svg";
import reward from "../../images/Reward.png";
import fundz from "../../images/fundz.svg";
import history from "../../images/message.png";
import referals from "../../images/referrals.png";
import masterSettings from "../../images/master_settings.png";
import trade from "../../images/Trades.png";
import security from "../../images/security.png";
import settings from "../../images/setting.png";
import help from "../../images/Help.svg";
import copy from "../../images/Copy-icon.png"

import {  useNavigate } from "react-router-dom";

import { useAuthContext } from '../../../../../hooks/useAuthContext';

export default function Menu({cancel}) {

  const Navigate = useNavigate()

  const { user } = useAuthContext()

  const handleCancel = (()=>{
    cancel()
  })

  const features = [
    {
      img: reward,
      name: "Reward Center"
    },
    {
      img: fundz,
      name: "Fundz History"
    },
    {
      img: history,
      name: "spot History"
    },
    {
      img: referals,
      name: "My Referrals"
    },
    {
      img: masterSettings,
      name: "Master Settings"
    },
    {
      img: trade,
      name: "My copy Trades"
    },
    {
      img: security,
      name: "Security"
    },
    {
      img: settings,
      name: "Settings"
    },
    {
      img: help,
      name: "Help"
    }
  ]

  const handleLogin = (()=>{
    Navigate("/sign/login")
  })

  return (
    <div className='menu'>
      <div className="menu_container">
        <button className="back_button" type="button" onClick={handleCancel}>&lt;</button>
      </div>
      <div className="menu_container">
        <div>
          <h1 className="title">Welcome to DCC Exchange</h1>
        </div>
        { user ?  
        <div className="menu-profile">
          <div className="user_info">
            <img src={userPhoto} alt="user_photo" />
            <div className="username_id">
              <p>John Doe</p>
              <span>wuidp984579hj38769df87875</span>
            </div>
            <img src={copy} alt="copy_icon" />
          </div>
          <div className="highlights">
            <div className="flex_column">
              <p>Copy</p>
              <span>0</span>
            </div>
            <div className="flex_column">
              <p>Reward</p>
              <span>0</span>
            </div>
            <div className="flex_column">
              <p>Invitees</p>
              <span>0</span>
            </div>
            <div className="flex_column">
              <p>Subscribe</p>
              <span>0</span>
            </div>
          </div>
         </div> : <div className="menu-login">
            <div className="menu-login-container">
                <div className="menu-login-content">
                    <div className="menu-login-email">
                        <button onClick={handleLogin} >Log In With Email</button>
                    </div>
                    <div className="menu-login-middle">
                      <div className="line">
                        <hr />
                      </div>
                       <div className="or"><h4>or</h4></div>
                       <div className="line">
                        <hr />
                      </div>
                    </div>
                    <div className="menu-login-google">
                        <button>Continue with Google</button>
                    </div>
                </div>
            </div>
         </div> }

        <div className="features">
          <div className="features-container">
            {
              features.map((feature) => (
                <div className="feature_contents">
                  <div className="feature_details">
                    <img src={feature.img} alt="icon" />
                    <p>{feature.name}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}
