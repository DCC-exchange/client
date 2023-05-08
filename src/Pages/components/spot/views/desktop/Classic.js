import React from 'react'
import Book from "./orderBook/Book"
import ClassicRoute from './route/ClassicRoute'
import Chart from './chart/Chart'

export default function Classic() {
  return (
    <div className='spot-classic'>
        <div className="spot-classic-container">
            <ClassicRoute />
            <div className="spot-classic-chart">
                <Chart />
            </div>
            <Book />
        </div>
    </div>
  )
}
