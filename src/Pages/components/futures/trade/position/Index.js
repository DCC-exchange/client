import React, { useState } from 'react'
import { TbFileReport } from "react-icons/tb";
import Position from './routes/Position';
import Orders from './routes/Orders';

export default function Index() {

  const [ positionRoute, setPositionRoute ] = useState(true)
  const [ orderRoute, setOrderRoute ] = useState(false)

  const [ switchState, setSwitchState ] = useState(true)

  const handleSwitchRoute = ((e)=>{
      if(e === 1){
        setSwitchState(true)
        setPositionRoute(true)
        setOrderRoute(false)
      }else{
        setSwitchState(false)
        setPositionRoute(false)
        setOrderRoute(true)
      }
  })

  return (
    <div className="position-switch">
        <div className="position-switch-container">
             <div className="position-switch-content">
                <div onClick={()=>handleSwitchRoute(1)} className={positionRoute ? "active" : "positionRoute"} >
                    <h4>Position(0)</h4>
                </div>
                <div onClick={()=>handleSwitchRoute(2)}  className={orderRoute ? "active" : "positionRoute"} >
                    <h4>Orders(0) </h4>
                </div>
             </div>
             <div className="report-container">
                <div className="report-content">
                    <h4><TbFileReport /> </h4>
                </div>
             </div>
        </div>
        { switchState ? <Position /> : <Orders /> }
    </div>
  )
}
