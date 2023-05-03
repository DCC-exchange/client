import React from 'react'
import HomeD from "./view/destop/HomeD";
import HomeM from "./view/mobile/HomeM";

import "./style/home.css";
import "./style/menu.css";
import "./style/navbar.css";
 
// Destop Style
import "./style/desktop/home.css"

export default function HomeIndex() {
  return (
    <div className="landing-page">
      <div className="mobile-view">
          <HomeM />
      </div>
      <div className="destop-view">
         <HomeD />
      </div>
    </div>
  );
}