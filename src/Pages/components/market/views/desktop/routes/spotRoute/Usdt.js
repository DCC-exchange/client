import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Usdt() {

    const [ starred, setStarred ] = useState(false)

    const handleStarred = (()=>{
      if(starred){
        setStarred(false)
      }else{
        setStarred(true)
      }
    })


  return (
    <div className='desktop-market-coins'>
        <div className="desktop-market-coins-container">
            <div className="logo-pairs">
                <div className="star">
                    <h3 onClick={handleStarred}> { starred ? <AiFillStar /> : <AiOutlineStar /> } </h3>
                </div>
                <div className="logo">
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                </div>
                <div className="pair">
                    <h4>BTC<span>/USDT</span></h4>
                </div>
            </div>
            <div className="price">
                <h4>23,456.00</h4>
            </div>
            <div className="change-percent">
                <h4>2.34%</h4>
            </div>
            <div className="high">
                <h4>23,456.00</h4>
            </div>
            <div className="high">
                <h4>23,456.00</h4>
            </div>
            <div className="high">
                <h4>23,456.00</h4>
            </div>
            <div className="trade">
                <h4>Trade</h4>
            </div>
        </div>
    </div>
  )
}
