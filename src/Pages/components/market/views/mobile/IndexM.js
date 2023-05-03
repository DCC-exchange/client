import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import search from "../../images/search.svg";

export default function IndexM() {
  return (
    <div className='market'>
    <div className='market-container'>
        <div className='search_header'>
            <img  src={search} alt="search"/>
            <input type="text"  placeholder='Search Coin'/>
        </div>
        <div className='round_icon'> </div>
        <div className='market-routes'>
          <div className='market-routes-container'>
            <div className="market-route-content">
                  <NavLink to='market-favourites'>Favourites</NavLink>
            </div>
            <div className="market-route-content">
                <NavLink to='spot'>Spot</NavLink>
            </div>
            <div className="market-route-content">
               <NavLink to='market-features'>Features</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="Market-contents-display">
        <Outlet />
      </div>
  </div>
  )
}
