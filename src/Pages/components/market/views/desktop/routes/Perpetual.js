import React, { useState } from 'react'
import Coin from './perpetualRoute/Coin'
import Usdt from './perpetualRoute/Usdt'


export default function Perpetual() {

  const [ usdtActive, setUsdtactive ] = useState(true)
  const [ usdActive, setUsdActive ] = useState(false)

  const [ defaultRoute, setDefault  ] = useState(<Usdt />)

  const handleNavigation = ((e)=>{
      if(e === 1){
          setDefault(<Usdt />)
          setUsdtactive(true)
          setUsdActive(false)
      }else{
          setDefault(<Coin />)
          setUsdtactive(false)
          setUsdActive(true)
      }
  })

  return (
    <div className='destop-market-spot-route'>
    <div className="market-spot-route-contain">
        <div className="navigation-route">
            <div className="navigation-route-container">
                <div className="navigation-route-contents">
                    <button onClick={()=>handleNavigation(1)} className={ usdtActive ? "active" : 'normal' } >USDT-M</button>
                </div>
                <div className="navigation-route-contents">
                    <button onClick={()=>handleNavigation(2)} className={ usdActive ? "active" : 'normal' } >COIN-M</button>
                </div>
            </div>
        </div>

        <div className="market-dropdown-heading">
            <div className="market-dropdown-heading-container">
                <div className="market-dropdown-heading-content">
                    <h4>Pair</h4>
                </div>
                <div className="market-dropdown-heading-content">
                    <h4>Price</h4>
                </div>
                <div className="market-dropdown-heading-content">
                    <h4>24H change%</h4>
                </div>
                <div className="market-dropdown-heading-content">
                    <h4>24H High</h4>
                </div>
                <div className="market-dropdown-heading-content">
                    <h4>24H Low</h4>
                </div>
                <div className="market-dropdown-heading-content">
                    <h4>24H  Volume (USDT)</h4>
                </div>
                <div className="market-dropdown-heading-content">
                    <h4>Trade</h4>
                </div>
            </div>
        </div>
        { defaultRoute }
    </div>
</div>
  )
}
