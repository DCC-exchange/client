import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Spot() {

    const Navigate = useNavigate()

    const handleNavigate = ((e)=>{
        if(e === "classic"){
            Navigate("spot-trade/classic")
        }
    })

  return (
    <div className="navbar-spot">
        <div className="navbar-spot-container">
            <div onClick={()=>handleNavigate("classic")} className="navbar-spot-content">
                <div className="heading">
                    <h3>Classic</h3>
                </div>
                <div className="detailed">
                    <h4>Simple and easy trading tools </h4>
                </div>
            </div>
            <div className="navbar-spot-content">
                <div className="heading">
                    <h3>Advanced</h3>
                </div>
                <div className="detailed">
                    <h4>Full access to advance tool </h4>
                </div>
            </div>
            <div className="navbar-spot-content">
                <div className="heading">
                    <h3>Convert</h3>
                </div>
                <div className="detailed">
                    <h4>Convert all crypto in one click </h4>
                </div>
            </div>
        </div>
    </div>
  )
}
