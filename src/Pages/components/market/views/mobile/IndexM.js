import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { CgSearch } from "react-icons/cg";

export default function IndexM() {
  return (
    <div className='market-page'>
      <div className="round_icon"></div>
        <div className="market-page-container">
            <div className="mobile-market-route">
                <div className="mobile-market-route-container">
                    <div className="content">
                        <NavLink to="favourite">
                            favourite
                        </NavLink>
                    </div>
                    <div className="content">
                        <NavLink to="main">
                            Markets
                        </NavLink>
                    </div>
                    <div className="content-search">
                        <NavLink to="search">
                            <CgSearch />
                        </NavLink>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    </div>
  )
}
