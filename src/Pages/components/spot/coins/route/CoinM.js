import React, { useState} from 'react'
import { MdOutlineContentPasteSearch} from "react-icons/md";

export default function CoinM() {

  const [ data ] = useState(false)

  return (
    <div className='coin-drop-list'>
        <div className="coin-drop-list-container">

            { data ?     <div className="coin-drop-list-content">
                <div className="image-name-container">
                    <div className="image">
                      <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                    </div>
                    <div className="pair">
                        <h4>BTC <span>/USDT</span> </h4>
                    </div>
                </div>
                <div className="lastprice-container">
                    <div className="price">
                        <h4>27,9087</h4>
                    </div>
                    <div className="percent">
                        <h4>-3.57 </h4>
                    </div>
                </div>
            </div> :<div className="no-data">
                <div className="no-data-container">
                  <div className="no-data-content">
                      <h4>No data</h4>
                      <h3><MdOutlineContentPasteSearch /></h3>
                  </div>
                </div>
            </div> }

        </div>
    </div>
  )
}
