import React  from 'react'
import UsdtM from './route/UsdtM'

export default function All({isLoading, error, Coins, UpdateCoin}) {

  return (
    <div className="features-all-page">
        <div className="features-all-page-container">
            <div className="search-coin-wrap">
                <div className="search-coin-wrap-container">
                    <div className="search-coin-wrap-header">
                        <div className="search-coin-wrap-header-content">
                            <div className="name">
                                <h4>Name</h4>
                            </div>
                            <div className="price">
                                <h4>Last Price/ 24H chg%</h4>
                            </div>
                        </div>
                    </div>
                      <UsdtM Coins={Coins} isLoading={isLoading} error={error} UpdateCoin={UpdateCoin} /> 
                </div>
            </div>
        </div>
    </div>
  )
}