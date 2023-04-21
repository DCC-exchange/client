import React from 'react';
import './style/marketChart.css';
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import Chart from "react-google-charts";
import reload from "./images/Vector.png";

const MarketChart = () => {
  const calculateCandlestickColor = (open, close) => {
    if (close > open) {
      return 'color: green';
    } else {
      return 'color: red';
    }
  };

  const data = [
    ['Day', 'a', 'b', 'c', 'd', { role: 'style' }],
    ['Mon', 20, 28, 38, 45, calculateCandlestickColor(20, 45)],
    ['Tue', 31, 38, 55, 66, calculateCandlestickColor(31, 66)],
    ['Wed', 50, 55, 77, 80, calculateCandlestickColor(50, 80)],
    ['Thu', 77, 77, 66, 50, calculateCandlestickColor(77, 50)],
    ['Fri', 68, 66, 22, 15, calculateCandlestickColor(68, 15)],
  ];
  return (
    <div className="chart_container">
      <div className="heading">
        <div>
          <BiArrowBack />
          <p>BTC/USDT</p>
        </div>
        <div>
          <AiOutlineStar />
        </div>
      </div>
      <hr />
      <div className="subheading">
        <div>
          <p>23,061.81</p>
          <div>
            <p>$ 23,061.8 1</p>
            <span>+0.78%</span>
          </div>
        </div>
        <div>
          <div>
            <p>High</p>
            <p>23,152.60</p>
          </div>
          <div>
            <p>Low</p>
            <p>22,636.77</p>
          </div>
          <div>
            <p>24H</p>
            <p>246,938.98 [BTC]</p>
          </div>
        </div>
      </div>
      <hr />
      <ul className="chart_outline">
        <li>Line</li>
        <li>15m</li>
        <li>1H</li>
        <li>4H</li>
        <li>1D</li>
        <li>More</li>
      </ul>
      <Chart
        width={'100%'}
        height={450}
        chartType="CandlestickChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          legend: 'none',
          backgroundColor: 'white',
          // chartArea: {
          //   left: 10,
          //   top: 10,
          //   width: '90%',
          //   height: '80%',
          // },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      <ul className="chart_outline">
        <li>MA</li>
        <li>EMA</li>
        <li>BOLL</li>
        <li>|</li>
        <li>VOL</li>
        <li>MACD</li>
        <li>RSI</li>
      </ul>
      <hr />
      <ul>
        <li>Order Book</li>
        <li>Market History</li>
        <li><span>125x</span>BTCUSDT</li>
      </ul>
      <hr />
      <div>
        <div>
          <div>
            <p>Amount</p>
            <ul>
              <li>0.003896</li>
              <li>0.856706</li>
            </ul>
          </div>
          <div>
            <p>Price</p>
            <ul>
              <li>22,003.86</li>
              <li>20,856.06</li>
            </ul>
          </div>
        </div>
        <div>
        <div>
            <p>Price</p>
            <ul>
              <li>22,003.86</li>
              <li>20,856.06</li>
            </ul>
          </div>
          <div>
            <p>Amount</p>
            <ul>
              <li>0.003896</li>
              <li>0.856706</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={reload} alt="reload_icon" />
        </div>
        <div>
          <button type="button">Buy</button>
          <button type="button">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default MarketChart;