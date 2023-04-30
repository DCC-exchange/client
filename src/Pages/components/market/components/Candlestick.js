import React, { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { createChart } from 'lightweight-charts';

const Candlestick = () => {
  const location = useLocation();
  const { id } = location.state;
  const myRef = useRef(null);

  const fetchOhlcData = async (newDiv) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?days=1&vs_currency=usd`);
    const data = response.data;
    const cData = data.map((d) => {
      return { time: d[0]/1000, open: d[1], high: d[2], low: d[3], close: d[4] }
    });
    const chartOptions = { height: 400, layout: { textColor: 'white', background: { type: 'solid', color: 'transparent' } } };
    const chart = createChart(newDiv, chartOptions);
    const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
    chart.timeScale().fitContent();
    candlestickSeries.setData(cData);
    console.log(cData[0]);
  }

  useEffect(() => {
    const newNode = myRef.current;
    const newDiv = newNode.appendChild(document.createElement('div'));
    
    fetchOhlcData(newDiv);
  }, [id])

  return (
    <div ref={myRef}>
    </div>
  )
}

export default Candlestick;