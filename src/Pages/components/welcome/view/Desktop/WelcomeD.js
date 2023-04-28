import React from 'react'
import wallet from "../../images/wallet purse.svg";

export default function WelcomeD({ handleContinue}) {

    const handleProceed = (()=>{
        handleContinue()
    })
  
  return (
    <div className="welcome-page">
        <div className="welcome-page-container">
            <div className="welcome-page-content">
                <div className="text-field">
                    <div className="header">
                        <h2>Manage Your Wallet</h2>
                    </div>
                    <div className="middle-text">
                        <h4>Manage your app with DCC Exchange. With our app it’s easy and secured. </h4>
                    </div>
                    <div className="welcome-btn">
                        <button onClick={handleProceed}>Get Start</button>
                    </div>
                </div>
                <div className="wallet-field">
                    <div className="wallet-field-container">
                        <div className="round-circle"></div>
                        <div className="wallet-img">
                            <img src={wallet} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
