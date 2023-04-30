import React from "react";
import { NavLink } from "react-router-dom";
import notify from "../../images/notify dcc.svg";
import contact from "../../images/conatct dcc.svg";
import Ellipse from "../../images/Ellipse 31.svg";
import { CgMenuLeftAlt } from "react-icons/cg";

export default function Navbar({hideMenu}) {

  let notification = [4, 4, 3, 4, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3];
  
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="home-top-flex1">
      <div onClick={hideMenu}
        className="menu-home-icon">
        <CgMenuLeftAlt />
      </div>
    </div>
    <div className="home-top-flex2">
      <div className="profile-nav">
        <img src={Ellipse} alt="Ellipse" width={"30px"} />
      </div>
      <NavLink to='/sign/login'>
        <img src={contact} alt="contact" />
      </NavLink>
      <NavLink to="/sign/login">
        <div className="notification-count">
          <img src={notify} alt="Profile logo" />
          <div className="notification-count-num">
            <h3>{notification.length}</h3>
          </div>
        </div>
      </NavLink>
    </div>
    </div>
  </div>
  )
}
