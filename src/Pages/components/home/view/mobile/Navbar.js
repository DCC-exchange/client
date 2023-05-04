import React from "react";
import Ellipse from "../../images/Ellipse 31.svg";
import { CgSearch } from "react-icons/cg";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function Navbar({hideMenu}) {

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="profile-navbar">
          <div onClick={hideMenu} className="profile-navbar-container">
              <img src={Ellipse} alt="Ellipse" width={"30px"} />
          </div>
        </div>
        <div className="search-navbar">
          <div className="search-navbar-container">
            <div className="icon">
                <h4><CgSearch /></h4>
            </div>
            <div className="input">
                <h4>Search</h4>
            </div>
          </div>
        </div>
        <div className="contact-navbar">
          <div className="contact-navbar-container">
              <h4><TfiHeadphoneAlt /></h4>
          </div>
        </div>
    </div>
  </div>
  )
}
