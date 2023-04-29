import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Candlestick = () => {
  const location = useLocation();
  const { id } = location.state;

  const fetchOhlcData = async() => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?days=1&vs_currency=usd`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        vs_currency: 'usd',
      })
    })
    console.log(response)
  }

  useEffect(() => {
    fetchOhlcData();
  }, [id])

  return (
    <div>
      <p>Candlestick</p>
    </div>
  )
}

export default Candlestick;