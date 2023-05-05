import React from 'react'
import { MdOutlineContentPasteSearch} from "react-icons/md";

export default function Coin() {
  return (
    <div className="no-data">
        <div className="no-data-container">
            <div className="no-data-content">
                <h4>No data</h4>
                <h3><MdOutlineContentPasteSearch /></h3>
            </div>
        </div>
    </div>
  )
}
