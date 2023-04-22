import React, { useState } from 'react'
import { RiCloseLine } from "react-icons/ri";
import "../style/coinRoute.css"
import { CgSearch } from "react-icons/cg";
import All from './All';
import Favourite from './Favourite';

export default function CoinRoute({handleShowCoinSlide}) {

    const [ ActiveRoute1, setActive1] = useState('favourite1')
    const [ ActiveRoute2, setActive2] = useState('favourite')

    const [ changeRoute, setChangeRoute ] = useState(true)

    const handleClear = (()=>{
        handleShowCoinSlide()
    })

    const handleActive = ((e)=>{
        if(e === 1){
            setChangeRoute(false)
            setActive1("favourite")
            setActive2("favourite1")
        }else{
            setActive2("favourite")
            setActive1("favourite2")
            setChangeRoute(true)
        }
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

                <div className="route-psa">
                    <div className="route-psa-container">
                        <div onClick={()=>handleActive(1)} className={ActiveRoute1}>
                            <h4>Favourite</h4>
                        </div>
                        <div onClick={()=>handleActive(2)} className={ActiveRoute2} >
                            <h4>All</h4>
                        </div>
                    </div>
                </div>
                <div className="coin-drop">
                    { changeRoute ? <All /> : <Favourite /> }
                </div>
            </div>
        </div>
    </div>
  )
}
