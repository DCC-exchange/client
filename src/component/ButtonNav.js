import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiChart } from "react-icons/bi";
import { HiChartBar } from "react-icons/hi";
import { CiWallet } from "react-icons/ci";
import spotImg from './image/logodcc.svg'
import "./style/buttomNav.css";
import React from "react";

export default function ButtomNav() {
  return (
    <>
      <div className="Navbar-down">
        <div className="NavBar-display-main-flex">
        <NavLink to="/hot">
            <div className="NavBar-display-main-flex1">
                <h1><AiOutlineHome /></h1>
            </div>
        </NavLink>
        <NavLink to="market/spot">
            <div className="NavBar-display-main-flex1">
                <h1><HiChartBar /></h1>
            </div>
        </NavLink>
        <NavLink to="spot-trade/spot-market">
          <div className="NavBar-display-main-flex3">
            <img src={spotImg} alt="copy logo" />
            <h1>Spot</h1>
          </div>
        </NavLink>
        <NavLink to="/hot">
            <div className="NavBar-display-main-flex1">
                <h1><BiChart /></h1>
            </div>
        </NavLink>
        <NavLink to="/wallet/over-view">
            <div className="NavBar-display-main-flex1">
                <h1><CiWallet /></h1>
            </div>
        </NavLink>
      </div>
    </div>
    </>
  );
}
