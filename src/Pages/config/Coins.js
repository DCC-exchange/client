import { useState } from "react";
import axios from "axios"

export const useCryptoCoins = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [Coins, setCoins] = useState('');

  const CryptoCoins = async () => {
    setIsLoading(true);
    setError(null);
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
        .then(res =>{
            setCoins(res.data)
            setIsLoading(false);
        }).catch(error =>{
            setIsLoading(false);
            setError(error)
        })
  };        
  return { CryptoCoins, Coins, isLoading, error };
};
