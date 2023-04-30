import React from "react";
import "./style/mobile/welcome.css"
import "./style/destop/welcomeD.css"

import { useNavigate } from "react-router";
import WelcomeM from "./view/Mobile/WelcomeM";
import WelcomeD from "./view/Desktop/WelcomeD";

export default function Welcome() {
  const navigate = useNavigate();

  const handleContinue = (()=>{
    localStorage.setItem('firstHit', true)
    navigate("/hot") 
  })

  return (
    <>
      <div className="mobile-view">
          <WelcomeM handleContinue={handleContinue} />
      </div>
      <div className="destop-view">
          <WelcomeD handleContinue={handleContinue} />
      </div>
    </>
  );
}