import React from 'react'
import Book from "./orderBook/Book"
import ClassicRoute from './route/ClassicRoute'

export default function Classic() {
  return (
    <div className='spot-classic'>
        <div className="spot-classic-container">
            <ClassicRoute />
            <div className="spot-classic-chart">
              <div className="spot-classic-chart-container">
                  <h3>Candle chart</h3>
              </div>
            </div>
            <Book />
        </div>
    </div>
  )
}
