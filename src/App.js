import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import React, {useEffect} from "react"
import Welcome from "./Pages/components/welcome/Index";
import Login from "./LoginEngine/login/Login";
import LoginSystem from "./LoginEngine/LoginEngine";
import Signup from "./LoginEngine/signup/Signup";
import Assets from "./Pages/components/Wallet/Assets";
import Overview from "./Pages/components/Wallet/totalAssets/AssetsRec";
import SpotWallet from "./Pages/components/Wallet/spot/Spot";
import FuturesRec from "./Pages/components/Wallet/futures/futuresRec";
import Market from "./Pages/components/market/Market";
import MarketChart from "./Pages/components/market/MarketChart";

import Futures from "./Pages/components/futures/Futures";
import UsdtM from "./Pages/components/futures/route/UsdtM";
import CoinsM from "./Pages/components/futures/route/CoinsM";

// ==========================================================
import { useAuthContext } from "./hooks/useAuthContext";
import HomeIndex from "./Pages/components/home/HomeIndex";
import NavBar from "./component/navbar/NavBar";
import MainMarket from "./Pages/components/market/views/mobile/Routes/MainMarket";
import Search from "./Pages/components/market/views/mobile/Routes/Search";
import Favourite from "./Pages/components/market/views/mobile/Routes/Favourite";
import SpotMarket from "./Pages/components/spot/views/mobile/route/SpotMarket";
import Convert from "./Pages/components/spot/views/mobile/route/Convert";
import Spot from "./Pages/components/spot/Spot";
import Classic from "./Pages/components/spot/views/desktop/Classic";



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
        {/*============== Navbar route ================= */}
          <NavBar />

        {/*======================== Navigate=ion routes ============================ */}
        <Routes>
          {/* Welcome route */}
          <Route path="/welcome" element={<Welcome /> }></Route>
          {/* Home Route */}
            <Route path="/" element={<HomeIndex />}> </Route>

            {/* Spot route */}
            <Route path="/spot-trade" element={<Spot />}>
                <Route index element={<SpotMarket />} />
                <Route path="convert" element={<Convert />} />
                <Route path="spot-market" element={<SpotMarket />} />
                <Route path="classic" element={<Classic />} />
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
                <Route index element={<MainMarket />} />
                <Route path="main" element={<MainMarket />} />
                <Route path="search" element={<Search />} />
                <Route path="favourite" element={<Favourite />} />
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
    </div>
  );
}

export default App;