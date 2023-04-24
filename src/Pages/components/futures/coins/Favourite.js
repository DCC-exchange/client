import React, { useState } from 'react'
import UsdtM from './route/UsdtM'
import CoinM from './route/CoinM'

export default function Favourite() {

    const [ ActiveRoute1, setActive1] = useState('coin')
    const [ ActiveRoute2, setActive2] = useState('fave')

    const [ changeRoute , setChangeRoute ] = useState(true)

    const handleActive = ((e)=>{
        if(e === 1){
            setChangeRoute(true)
            setActive1("coin")
            setActive2("fa")
        }else{
            setActive2("coin")
            setActive1("fa")
            setChangeRoute(false)
        }
    })

  return (
    <div className="features-all-page">
        <div className="features-all-page-container">
            <div className="features-all-page-heading">
                <div onClick={()=> handleActive(1)} className={ActiveRoute1}>
                    <h3>Coin-M</h3>
                </div>
                <div onClick={()=> handleActive(2)} className={ActiveRoute2}>
                    <h3>Usdt-M</h3>
                </div>
            </div>
            <div className="search-coin-wrap">
                <div className="search-coin-wrap-container">
                    <div className="search-coin-wrap-header">
                        <div className="search-coin-wrap-header-content">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="price">
                                <h4>Last Price/ 24H chg%</h4>
                            </div>
                        </div>
                    </div>
                      {  changeRoute ? <CoinM /> : <UsdtM />  }
                </div>
            </div>
        </div>
    </div>
  )
}