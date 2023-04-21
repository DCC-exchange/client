import React, {useState} from 'react'
import "../style/MarketSpot.css";
import Busd from './conponents/Busd';
import Usdt from './conponents/Usdt';


export default function MarketSpot() {

  const [ ActiveClass1, setActiveClass1 ] = useState('spot_busd active_spot')
  const [ ActiveClass2, setActiveClass2 ] = useState('spot_usdt')

  const [ composition, setComposition ] = useState(<Busd />)

  const handleMarketSwitch = ((e)=>{
    if(e === "usdt"){
      setActiveClass1("spot_busd active_spot")
      setActiveClass2("spot_usdt")
      setComposition(<Busd />)
    }else{
      setActiveClass1("spot_usdt")
      setActiveClass2("spot_busd active_spot")
      setComposition(<Usdt />)
    }
  })

  return (
    <div className='market_favourite_header_spot'>
      <div className='spot_flex'>
          <div onClick={()=> handleMarketSwitch("usdt")} className={ActiveClass1}>
              <h3>USDT</h3>
          </div>
          <div onClick={()=> handleMarketSwitch("usd")} className={ActiveClass2} >
            <h3>USD</h3>
          </div>
       </div>
       { composition }
    </div>
  );
}