import React from 'react'
import { TbFileReport } from "react-icons/tb";
import Orders from './routes/Orders';

export default function Index() {



  return (
    <div className="position-switch">
        <div className="position-switch-container">
             <div className="position-switch-content">
                <div  className={"positionRoute"} >
                    <h4>Orders</h4>
                </div>
             </div>
             <div className="report-container">
                <div className="report-content">
                    <h4><TbFileReport /> </h4>
                </div>
             </div>
        </div>
        <Orders /> 
    </div>
  )
}
