import { Route, Routes } from "react-router-dom";
import React from "react"
import Welcome from "./Pages/components/welcome/Index";
import Home from "./Pages/components/home/Index";
import Favourite from "./Pages/components/home/pageNavigation/Favourite";
import Hot from "./Pages/components/home/pageNavigation/Hot";
import Gainers from "./Pages/components/home/pageNavigation/Gainers";
import Losers from "./Pages/components/home/pageNavigation/Losers";
import Volume from "./Pages/components/home/pageNavigation/Volume";
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
// import TransferSelect from "./Pages/components/Wallet/overview/TransferSelect";


function App() {

  return (
    <div className="App">
      <ButtomNav />
        <Routes>
          {/* Welcome route */}
          <Route path="/welcome" element={<Welcome />}></Route>

          {/* Home Route */}
            <Route path="/" element={<Home />}>
                <Route index element={<Hot /> }/>
                <Route path="favourite" element={<Favourite />} />
                <Route path="hot" element={<Hot />} />
                <Route path="gainers" element={<Gainers />} />
                <Route path="losers" element={<Losers />} />
                <Route path="volume" element={<Volume />} />
            </Route>

            {/* Spot route */}
            <Route path="/spot-trade" element={<Spot />}>
                <Route index element={<SpotMarket />} />
                <Route path="convert" element={<Convert />} />
                <Route path="spot-market" element={<SpotMarket />} />
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
                <Route path="market-chart" element={<MarketChart />} />                
            </Route>
            
            {/* Wallet routes */}
            <Route path="wallet" element={<Assets />}>
                <Route index element={<Overview />} />s
                <Route path="over-view" element={<Overview />} />
                <Route path="spot" element={<SpotWallet />} />
                <Route path="futures" element={<FuturesRec />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;