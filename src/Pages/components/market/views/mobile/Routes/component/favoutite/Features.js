import React from 'react'
import { MdOutlineContentPasteSearch} from "react-icons/md";

export default function Features() {
  return (
    <div className="market-spot-main">
    <div className="market-spot-main-container">
    <div className="header">
        <div className="header-container">
            <div className="content">
                <h4>Name</h4>
            </div>
            <div className="content">
                <h4>Last Price / Volume</h4>
            </div>
            <div className="percent">
                <h4>24H change%</h4>
            </div>
        </div>
    </div>
    <div className="body">
      <div className="body-container">
        <div className="no-data">
            <div className="no-data-container">
                 <h3><MdOutlineContentPasteSearch /></h3>
                <h4>No data</h4>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
  )
}
