import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import "../style/coinRoute.css"
import { CgSearch } from "react-icons/cg";

export default function CoinRoute({handleShowCoinSlide}) {

    const handleClear = (()=>{
        handleShowCoinSlide()
    })

  return (
    <div className='coin-route'>
        <div className="coin-route-container">
            <div className="close">
                <div className="close-container" onClick={handleClear} >
                    <h3><RiCloseLine /></h3>
                </div>
            </div>
            <div className="coin-route-content">
                <div className="heading">
                    <h1>Futures</h1>
                </div>
                <div className="search-engine">
                    <div className="search-engine-container">
                        <div className="search-engine-content">
                            <h4><CgSearch /></h4>
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
