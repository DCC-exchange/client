import React, { useState } from 'react'
import Spot from './favouriteRoute/Spot'
import Coin from './favouriteRoute/Coin'
import Usdt from './favouriteRoute/Usdt'


export default function Favourite() {

  const [ spotActive, setSpotactive ] = useState(true)
  const [ usdtActive, setUsdtactive ] = useState(false)
  const [ coinActive, setCoinActive ] = useState(false)

  const [ defaultRoute, setDefault  ] = useState(<Usdt />)

  const handleNavigation = ((e)=>{
      if(e === 1){
          setDefault(<Spot />)
          setSpotactive(true)
          setUsdtactive(false)
          setCoinActive(false)
      }else if(e === 2) {
          setDefault(<Usdt />)
          setSpotactive(false)
          setUsdtactive(true)
          setCoinActive(false)
      }else{
        setDefault(<Coin />)
        setSpotactive(false)
        setUsdtactive(false)
        setCoinActive(true)
      }
  })

  return (
    <div className='destop-market-spot-route'>
    <div className="market-spot-route-contain">
        <div className="navigation-route">
            <div className="navigation-route-container">
                <div className="navigation-route-contents">
                    <button onClick={()=>handleNavigation(1)} className={ spotActive ? "active" : 'normal' } >Spot</button>
                </div>
                <div className="navigation-route-contents">
                    <button onClick={()=>handleNavigation(2)} className={ usdtActive ? "active" : 'normal' } >USDT-M</button>
                </div>
                <div className="navigation-route-contents">
                    <button onClick={()=>handleNavigation(3)} className={ coinActive ? "active" : 'normal' } >COIN-M</button>
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
