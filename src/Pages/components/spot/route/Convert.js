import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { RiArrowDropDownFill } from "react-icons/ri";
import "../styles/convert.css"

export default function Convert() {

  const navigate = useNavigate()
  const handleClose = (()=>{
      navigate(-1)
  })

  return (
    <div className="convert-page">
      <div className="route"></div>
      <div className="convert-page-container">
          <div className="navigate-back"  onClick={handleClose}>
            <h3><FaAngleLeft /></h3>
          </div>
          <div className="heading">
              <h4>Convert</h4>
          </div>
          <div className="convert-page-content">
          <div className="spend-coin">
            <div className="spend-coin-container">
                <div className="label">
                  <div className="spend">
                    <h4>Spend</h4>
                  </div>
                  <div className="available">
                    <h4>Available 0 BTC</h4>
                  </div>
                </div>
            </div>
            <div className="spend-input">
              <div className="spend-input-container">
                  <div className="spend-coin-name">
                      <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                      <h4>BTC</h4>
                      <h4><RiArrowDropDownFill /></h4>
                  </div>
                  <div className="spend-coin-input">
                      <input type="text" placeholder='Convert 0.00000000' />
                  </div>
                  <div className="spend-coin-maximum">
                      <p>Max</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="spend-coin">
            <div className="spend-coin-container">
                <div className="label">
                  <div className="spend">
                    <h4>Receive</h4>
                  </div>
                </div>
            </div>
            <div className="spend-input">
              <div className="spend-input-container">
                  <div className="spend-coin-name">
                      <img src="" alt="" />
                      <h4>BTC</h4>
                  </div>
                  <div className="spend-coin-input">
                      <input type="text" placeholder='Amount' />
                  </div>
              </div>
            </div>
          </div>

          <div className="ref-price">
              <div className="ref-price-container">
                  <h4>Reference Price <span className='priec'>1BTC = 34.98 USDT</span> </h4>
              </div>
          </div>
          <div className="convert-submit-btn">
              <div className="convert-submit-btn-container">
                  <p>Confirm</p>
              </div>
          </div>
          </div>
       
          <div className="convert-buttom-bal">
              <h4>Balance</h4>
          </div>
      </div>
    </div>
  )
}
