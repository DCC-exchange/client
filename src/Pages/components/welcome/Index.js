import React, { useState } from "react";
import "./style/welcome.css";
import dccLogo from "./images/dcc logo.svg";
import wallet from "./images/wallet purse.svg";

import { useNavigate } from "react-router";

export default function Welcome() {
  const [loading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = (()=>{
    localStorage.setItem('firstHit', true)
    navigate("/hot") 
  })


  if (loading) {
    return (
      <div className="mobile-preloader">
        <div className="mobile-loader">
          <img src={dccLogo} alt="Profile logo" />
        </div>
      </div>
    );
  }
  return (
    <div className="welcome-display">
      <div className="welcome-page-display">
        <img src={wallet} alt="wallet" width={"220px"} />
      </div>
      <div className="welcome-display-footer">
        <h1>
          Manage <br /> Your Wallet
        </h1>
        <div className="welcome-display-footer2">
          <h3>
            Manage your app with DCC <br /> Exchange.
          </h3>
          <h3>
            {" "}
            With our app it’s easy and <br /> secured.
          </h3>
        </div>
        <button onClick={handleContinue}>
          Get Started
        </button>
      </div>
    </div>
  );
}