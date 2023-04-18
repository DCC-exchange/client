import React, {useState} from 'react'
import "../style/MarketSpot.css";
import Busd from './conponents/Busd';
import Bnb from './conponents/Bnb';
import Usdt from './conponents/Usdt';
import Btc from './conponents/Btc';

export default function MarketSpot() {

  const [ ActiveClass1, setActiveClass1 ] = useState('spot_busd active_spot')
  const [ ActiveClass2, setActiveClass2 ] = useState('spot_usdt')
  const [ ActiveClass3, setActiveClass3 ] = useState('spot_usdt')
  const [ ActiveClass4, setActiveClass4 ] = useState('spot_usdt')

  const [ composition, setComposition ] = useState(<Busd />)

  const handleMarketSwitch = ((e)=>{
    if(e === "busd"){
        setActiveClass1("spot_busd active_spot")
        setActiveClass2("spot_usdt")
        setActiveClass3("spot_usdt")
        setActiveClass4("spot_usdt")
        setComposition(<Busd />)
    }else if(e === "btc"){
      setActiveClass1("spot_usdt")
      setActiveClass2("spot_usdt")
      setActiveClass3("spot_usdt")
      setActiveClass4("spot_busd active_spot")
      setComposition(<Btc />)
    }else if(e === "usdt"){
      setActiveClass1("spot_usdt")
      setActiveClass2("spot_busd active_spot")
      setActiveClass3("spot_usdt")
      setActiveClass4("spot_usdt")
      setComposition(<Bnb />)
    }else{
      setActiveClass1("spot_usdt")
      setActiveClass2("spot_usdt")
      setActiveClass3("spot_busd active_spot")
      setActiveClass4("spot_usdt")
      setComposition(<Usdt />)
    }
  })

  return (
    <div className='market_favourite_header_spot'>
      <div className='spot_flex'>
          <div onClick={()=> handleMarketSwitch("busd")} className={ActiveClass1}>
              <h3>BUSD</h3>
          </div>
          <div onClick={()=> handleMarketSwitch("usdt")} className={ActiveClass2} >
            <h3>USDT</h3>
          </div>
          <div onClick={()=> handleMarketSwitch("bnb")} className={ActiveClass3}>
            <h3>BNB</h3>
          </div>
          <div onClick={()=> handleMarketSwitch("btc")} className={ActiveClass4}>
            <h3>BTC</h3>
          </div>
       </div>
        { composition }
    </div>
  );
}