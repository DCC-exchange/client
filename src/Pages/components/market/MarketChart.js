import React from "react";
import './style/marketChart.css';
import Candlestick from './components/Candlestick';
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom';
import reload from "./images/Vector.png";

const MarketChart = () => {
  const location = useLocation();
  const {
    symbol, current_price, high_24h,
    low_24h, price_change_percentage_24h,
  } = location.state;
  return (
    <div className="candlestick_container">
      <div className="chart_container">
        <div className="flex heading_padding">
          <div className="flex_gap">
            <Link to="/market"><BiArrowBack className="back_arrow_icon" /></Link>
            <p className="">{symbol}/USDT</p>
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
            <p className="green coin_amount">{current_price}</p>
            <div className="flex">
              <p className="font_two">{current_price}</p>
              <small className="green">{price_change_percentage_24h}</small>
            </div>
          </div>
          <div>
            <div className="flex">
              <p className="font_one">High</p>
              <p className="font_one">{high_24h}</p>
            </div>
            <div className="flex">
              <p className="font_one">Low</p>
              <p className="font_one">{low_24h}</p>
            </div>
            <div className="flex_gap">
              <p className="font_one">24H</p>
              <p className="font_one">{price_change_percentage_24h} [{symbol}]</p>
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
        <Candlestick />
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