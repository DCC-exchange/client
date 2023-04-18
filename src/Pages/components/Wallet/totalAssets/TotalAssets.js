import React from 'react'
import './styles/totalassets.css'
import middle from '../images/middleimg.svg'
import spot from '../images/spot.svg'
import usdt from '../images/usdt.svg'
import lite from '../images/lite.svg'
import coin from '../images/coin.svg'

const TotalAssets = () => {
  return (
    <div className='total-assets'>

      <div className='t-assets-img'>
        <img src={middle} alt='' />
      </div>

      <div className='portfolio'>
        <h3>Portfolio</h3>
        <h4>Hide 0 Balances</h4>
      </div>

      <div className='portfolio-c'>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={spot} alt='' width={'20px'} /> 
          <h2>Spot</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            <h4> = $ 0.00</h4>
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={usdt} alt='' width={'20px'} /> 
          <h2>USDT-M</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            <h4> = $ 0.00</h4>
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={coin} alt='' width={'20px'} /> 
          <h2>COIN-M</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            <h4> = $ 0.00</h4>
          </div>
        </div>
        <div className='portfolio-c-list'>
          <div className='list-img'>
          <img src={lite} alt='' width={'20px'} /> 
          <h2>Lite Contracts</h2>
          </div>
          <div className='list-digit'>
            <h3>0.00 </h3>
            <h4> = $ 0.00</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalAssets
