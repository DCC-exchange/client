import React, { useState } from 'react'
import Spot from './component/main/Spot'
import Usdt from './component/main/Usdt'
import Coin from './component/main/Coin'



export default function MainMarket() {

    const [defaultRoute, setDefaultRoute ] = useState(<Spot />)

    const [ spotActive , setSpotActive ] = useState(true)
    const [ usdtActive, setUsdtActive ] = useState(false)
    const [ coinActive , setCoinActive ] = useState(false)

    const handleSwitch = ((e)=>{
        if(e === 1){
            setSpotActive(true)
            setUsdtActive(false)
            setCoinActive(false)
            setDefaultRoute(<Spot />)
        }else if (e === 2) {
            setSpotActive(false)
            setUsdtActive(true)
            setCoinActive(false)
            setDefaultRoute(<Usdt />)
        }else{
            setSpotActive(false)
            setUsdtActive(false)
            setCoinActive(true)
            setDefaultRoute(<Coin />) 
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
                        <h4>USDT-M</h4>
                    </div>
                    <div onClick={()=>handleSwitch(3)}   className={coinActive ? "active" : "content"}>
                        <h4>COIN-M</h4>
                    </div>
                </div>
            </div>
            { defaultRoute }
        </div>
    </div>
  )
}
