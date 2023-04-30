import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import React, {useEffect} from "react"
import Welcome from "./Pages/components/welcome/Index";

import ButtomNav from "./component/ButtonNav";
import Login from "./LoginEngine/login/Login";
import LoginSystem from "./LoginEngine/LoginEngine";
import Signup from "./LoginEngine/signup/Signup";
import Assets from "./Pages/components/Wallet/Assets";
import Overview from "./Pages/components/Wallet/totalAssets/AssetsRec";
import SpotWallet from "./Pages/components/Wallet/spot/Spot";
import FuturesRec from "./Pages/components/Wallet/futures/futuresRec";
import Market from "./Pages/components/market/Market";
import MarketChart from "./Pages/components/market/MarketChart";
import MarketSpot from "./Pages/components/market/routes/MarketSpot";
import MarketFavorite from "./Pages/components/market/routes/MarketFavorite";
import Future from "./Pages/components/market/routes/Future";
import Spot from "./Pages/components/spot/Spot";
import Convert from "./Pages/components/spot/route/Convert";
import SpotMarket from "./Pages/components/spot/route/SpotMarket";
import Futures from "./Pages/components/futures/Futures";
import UsdtM from "./Pages/components/futures/route/UsdtM";
import CoinsM from "./Pages/components/futures/route/CoinsM";

// ==========================================================
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./Pages/components/home/Index";
import Hot from "./Pages/components/home/view/mobile/route/Hot";
import Losers from "./Pages/components/home/view/mobile/route/Losers";
import Gainers from "./Pages/components/home/view/mobile/route/Gainers";
import Volume from "./Pages/components/home/view/mobile/route/Volume";
import Favourite from "./Pages/components/spot/coins/Favourite";

function App() {

  const navigation = useNavigate()

  // Welcome first timer
  useEffect(()=>{
  const first = JSON.parse(localStorage.getItem("firstHit"));
    if(!first){
      navigation('/welcome')
    }
  },[navigation])

  const { user } = useAuthContext()

  return (
    <div className="App">
        <Routes>
          {/* Welcome route */}
          <Route path="/welcome" element={<Welcome /> }></Route>
          {/* Home Route */}
            <Route path="/" element={<Home />}>
                <Route index element={<Hot />} />
                <Route path="hot" element={<Hot />} />
                <Route path="loser" element={<Losers />} />
                <Route path="gainer" element={<Gainers />} />
                <Route path="volume" element={<Volume />} />
                <Route path="favourite" element={<Favourite />} />
            </Route>

            {/* Spot route */}
            <Route path="/spot-trade" element={<Spot />}>
                <Route index element={<SpotMarket />} />
                <Route path="convert" element={<Convert />} />
                <Route path="spot-market" element={<SpotMarket />} />
            </Route>

            {/* Futures route */}
            <Route path="/futures" element={<Futures />}>
                <Route index element={<UsdtM />} />
                <Route path="coin-m" element={<CoinsM />} />
                <Route path="usdt-m" element={<UsdtM />} />
            </Route>

            {/* Login route */}
              <Route path="/sign" element={<LoginSystem />}>
                <Route Index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>

            {/* Market route */}
            <Route path="/market" element={<Market />}>
                <Route index element={<MarketSpot />} />
                <Route path="spot" element={<MarketSpot />} />
                <Route path="market-favourites" element={<MarketFavorite />} />
                <Route path="market-features" element={<Future />} />
            </Route>

            {/* Market Chart */}
            <Route path="/marketChart" element={<MarketChart />} />
            
            {/* Wallet routes */}
            <Route path="wallet" element={user ? <Assets /> : <Navigate to="/sign/login" /> }>
                <Route index element={user ? <Overview /> : <Navigate to="/sign/login" />  } />
                <Route path="over-view" element={ user ? <Overview /> : <Navigate to="/sign/login" />  } />
                <Route path="spot" element={user ? <SpotWallet /> : <Navigate to="/sign/login" />  } />
                <Route path="futures" element={ user ? <FuturesRec /> : <Navigate to="/sign/login" /> } />
            </Route>
            
        </Routes>
      <ButtomNav />
    </div>
  );
}

export default App;