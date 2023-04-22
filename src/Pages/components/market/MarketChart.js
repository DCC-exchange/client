import React from 'react';
import './style/marketChart.css';
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const cryptoCoin = location.state;

  const data = [
    ['Day', 'a', 'b', 'c', 'd', { role: 'style' }],
    ['Mon', 20, 28, 38, 45, calculateCandlestickColor(20, 45)],
    ['Tue', 31, 38, 55, 66, calculateCandlestickColor(31, 66)],
    ['Wed', 50, 55, 77, 80, calculateCandlestickColor(50, 80)],
    ['Thu', 77, 77, 66, 50, calculateCandlestickColor(77, 50)],
    ['Fri', 68, 66, 22, 15, calculateCandlestickColor(68, 15)],
    ['sat', 80, 66, 42, 25, calculateCandlestickColor(68, 15)],
    ['sun', 48, 66, 42, 15, calculateCandlestickColor(68, 15)],
  ];
  return (
    <div className="candlestick_container">
      <div className="chart_container">
        <div className="flex heading_padding">
          <div className="flex_gap">
            <Link to="/market"><BiArrowBack className="back_arrow_icon" /></Link>
            <p className="">{cryptoCoin.symbol}/USDT</p>
          </div>
          <div>
            <AiOutlineStar className="star_icon" />
          </div>
        </div>
      </div>
      <hr />
      <div className="chart_container">
        <div className="flex_start body_padding">
          <div>
            <p className="green coin_amount">23,061.81</p>
            <div className="flex">
              <p className="font_two">$ 23,061.8 1</p>
              <small className="green">+0.78%</small>
            </div>
          </div>
          <div>
            <div className="flex">
              <p className="font_one">High</p>
              <p className="font_one">23,152.60</p>
            </div>
            <div className="flex">
              <p className="font_one">Low</p>
              <p className="font_one">22,636.77</p>
            </div>
            <div className="flex_gap">
              <p className="font_one">24H</p>
              <p className="font_one">246,938.98 [BTC]</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="chart_container">
        <ul className="flex body_padding">
          <li>Line</li>
          <li>15m</li>
          <li>1H</li>
          <li>4H</li>
          <li>1D</li>
          <li>More</li>
        </ul>
      </div>
      <div className="chart_container">
        <Chart
          width={'100%'}
          height={450}
          chartType="CandlestickChart"
          loader={<div>Loading Chart...</div>}
          data={data}
          options={{
            legend: 'none',
            backgroundColor: 'transparent',
            hAxis: {
              textStyle: {
                color: 'white',
              },
            },
            vAxis: {
              textStyle: {
                color: 'white',
              },
              gridlines: {
                color: '#ffffffa4'
              }
            },
            chartArea: {
              width: '90%',
              height: '80%',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className="chart_container">
        <ul className="flex body_padding">
          <li>MA</li>
          <li>EMA</li>
          <li>BOLL</li>
          <li>|</li>
          <li>VOL</li>
          <li>MACD</li>
          <li>RSI</li>
        </ul>
      </div>
      <hr />
      <div className="chart_container">
        <ul className="flex heading_padding outline_list">
          <li>Order Book</li>
          <li>Market History</li>
          <li><span className="coin_boost">125x</span>BTCUSDT</li>
        </ul>
      </div>
      <hr className="line" />
      <div className="chart_container">
        <div className="flex body_padding">
          <div className="flex_gap">
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
                <li className="green">22,003.86</li>
                <li className="green">20,856.06</li>
              </ul>
            </div>
          </div>
          <div className="flex_gap">
            <div>
              <p>Price</p>
              <ul>
                <li className="red">22,003.86</li>
                <li className="red">20,856.06</li>
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
      </div>
      <div className="chart_container">
        <div className="flex heading_padding trade_coin">
          <div>
            <img src={reload} alt="reload_icon" />
          </div>
          <div className="btn_container">
            <button className="buttons BGgreen" type="button">Buy</button>
            <button className="buttons BGred" type="button">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketChart;