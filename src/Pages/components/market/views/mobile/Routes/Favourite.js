import React, { useState } from 'react'
import Spot from './component/favoutite/Spot'
import Features from './component/favoutite/Features'

export default function Favourite() {

  const [defaultRoute, setDefaultRoute ] = useState(<Spot />)

  const [ spotActive , setSpotActive ] = useState(true)
  const [ usdtActive, setUsdtActive ] = useState(false)

  const handleSwitch = ((e)=>{
      if(e === 1){
          setSpotActive(true)
          setUsdtActive(false)
          setDefaultRoute(<Spot />)
      }else{
          setSpotActive(false)
          setUsdtActive(true)
          setDefaultRoute(<Features />) 
      }
  })

  return (
    <div className="main-market">
    <div className="main-market-container">
        <div className="main-market-switch">
            <div className="main-market-switch-container">
                <div onClick={()=>handleSwitch(1)} className={spotActive ? "active" : "content"}>
                    <h4>Spot</h4>
                </div>
                <div onClick={()=>handleSwitch(2)}   className={usdtActive ? "active" : "content"}>
                    <h4>Futures</h4>
                </div>
            </div>
        </div>
        { defaultRoute }
    </div>
</div>
  )
}
