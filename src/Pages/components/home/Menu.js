import React from 'react'
import "./style/menu.css"

export default function Menu({cancel}) {

  const handleCancel = (()=>{
    cancel()
  })

  return (
    <div className='menu'>
      <div className="menu-container">
        	<h2 onClick={handleCancel}>Menu</h2>
      </div>
    </div>
  )
}
