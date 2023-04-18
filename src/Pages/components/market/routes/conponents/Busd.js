import React, { useEffect} from 'react'

import { useCryptoCoins } from "../../../../config/Coins"

export default function Busd() {

  const  { CryptoCoins, Coins, isLoading, error } = useCryptoCoins()

  useEffect(()=>{
    CryptoCoins()
  },[])

  console.log(Coins)

  return (
    <div className='favourite_head_spot'> 
    { Coins && Coins.map((coin)=>(
       <div className='name_last_flex_1_spot'>
       <div className='content-name'>
          <h3>{ coin.symbol } <span className='spaner_spot'>/BUSD</span>
              <span className='ten_spot'>10x</span>
          </h3>
       </div>
       <div className='content-price'>
         <h3>{coin.coin.current_price} <span className='span_block_spot'>${coin.current_price}</span></h3>
       </div>
       <div className='content-percent'>
         <h3>{coin.price_change_percentage_24h}%</h3>
       </div>
   </div> 
    ))}
  </div>
  )
}
