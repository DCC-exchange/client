import React from 'react'
import ButtomNav from './mobile/ButtonNav'
import TopNavBar from './desktop/TopNavBar'

export default function NavBar() {
  return (
    <div className="navbar-component">
        <div className="mobile-view">
          <ButtomNav />
        </div>
        <div className="destop-view">
            <TopNavBar />
        </div>
    </div>
  )
}
