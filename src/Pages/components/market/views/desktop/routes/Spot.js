import React, { useState } from 'react'
import Usdt from './spotRoute/Usdt'
import Usd from './spotRoute/Usd'

export default function Spot() {

    const [ usdtActive, setUsdtactive ] = useState(true)
    const [ usdActive, setUsdActive ] = useState(false)

    const [ defaultRoute, setDefault  ] = useState(<Usdt />)


    const handleNavigation = ((e)=>{
        if(e === 1){
            setDefault(<Usdt />)
            setUsdtactive(true)
            setUsdActive(false)
        }else{
            setDefault(<Usd />)
            setUsdtactive(false)
            setUsdActive(true)
        }
    })

  return (
    <div className='market-spot-route'>
        <div className="market-spot-route-container">
            <div className="navigation-route">
                <div className="navigation-route-container">
                    <div className="navigation-route-contents">
                        <button onClick={()=>handleNavigation(1)} className={ usdtActive ? "active" : 'normal' } >USDT</button>
                    </div>
                    <div className="navigation-route-contents">
                        <button onClick={()=>handleNavigation(2)} className={ usdActive ? "active" : 'normal' } >USDs</button>
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
