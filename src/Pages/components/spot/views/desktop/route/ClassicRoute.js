import React, { useState} from 'react'
import Usdt from './component/Usdt'
import Favourite from './component/Favourite'
import Usd from './component/Usd'
import { CgSearch } from "react-icons/cg";

export default function ClassicRoute() {

    const [ defaultRoute , setDefaultRoute ] = useState(<Usdt />)

    const [ favouriteActice, setFavouriteActive ] = useState(false)
    const [ usdtActive , setUsdtActive ] = useState(true)
    const [ usdsActive, setUsdsActive ] = useState(false)

    const handleSwitch = ((e)=>{
        if(e === 1){
            setDefaultRoute(<Favourite />)
            setFavouriteActive(true)
            setUsdtActive(false)
            setUsdsActive(false)
        }else if(e === 2){
            setDefaultRoute(<Usdt />)
            setFavouriteActive(false)
            setUsdtActive(true)
            setUsdsActive(false)
        }else{
            setDefaultRoute(<Usd />)
            setFavouriteActive(false)
            setUsdtActive(false)
            setUsdsActive(true)
        }
    })

  return (
    <div className="spot-classic-route">
        <div className="spot-classic-route-container">
            <div className="spot-classic-route-content">
                <div onClick={()=>handleSwitch(1)} className={favouriteActice ? "active" : "item"}>
                    <h4>Favourite</h4>
                </div>
                <div onClick={()=>handleSwitch(2)} className={usdtActive ? "active" : "item"}>
                    <h4>USDT</h4>
                </div>
                <div onClick={()=>handleSwitch(3)} className={usdsActive ? "active" : "item"}>
                    <h4>USDS</h4>
                </div>
            </div>
            <div className="search">
                <div className="search-container">
                    <div className="search-content">
                        <div className="input">
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="icon">
                            <h4><CgSearch /></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { defaultRoute }
    </div>
  )
}
