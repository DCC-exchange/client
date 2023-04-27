import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { useLocation } from 'react-router-dom';

const Candlestick = () => {
  const calculateCandlestickColor = (open, close) => {
    if (close > open) {
      return 'color: green';
    } else {
      return 'color: red';
    }
  };
  const location = useLocation();
  const {
    current_price, high_24h,
    low_24h
  } = location.state;
  const [price, setPrice] = useState(null);
  const [highPrice, setHighPrice] = useState(null);
  const [lowPrice, setLowPrice] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const fetchPrice = () => {
      setPrice(current_price);
      if (highPrice === null || price > highPrice) {
        setHighPrice(price);
      }
      if (lowPrice === null || price < lowPrice) {
        setLowPrice(price);
      }
      setCurrentDate(new Date());
    }
    const intervalId = setInterval(() => {
      fetchPrice();
    }, 5000);
    fetchPrice();
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [highPrice, lowPrice, price])

  const data = [
    ['Day', 'a', 'b', 'c', 'd', { role: 'style' }],
    [
      currentDate.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      lowPrice,
      high_24h,
      low_24h,
      highPrice,
      calculateCandlestickColor(lowPrice, highPrice),
    ],
  ];
  return (
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
          width: '75%',
          height: '80%',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

export default Candlestick;