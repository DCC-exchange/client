import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState} from "react";
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
// import TransferSelect from "./Pages/components/Wallet/overview/TransferSelect";


function App() {
  const navigate = useNavigate()
  const [ user, setUser] = useState(null)

  useEffect(()=>{
      if(user){
          navigate('/hot')
      }else{
        navigate('/welcome')
      }
  },[user, navigate])

  const HomeFuction = (()=>{
    setUser(true)
  })

  return (
    <div className="App">
      <ButtomNav />
        <Routes>
          {/* Welcome route */}
        <Route path="/welcome" element={<Welcome handleHome={HomeFuction} />}></Route>

          {/* Home Route */}
            <Route path="/" element={<Home />}>
                <Route index={<Hot /> }/>
                <Route path="favourite" element={<Favourite />} />
                <Route path="hot" element={<Hot />} />
                <Route path="gainers" element={<Gainers />} />
                <Route path="losers" element={<Losers />} />
                <Route path="volume" element={<Volume />} />
            </Route>

            {/* Login route */}
            <Route path="/sign" element={<LoginSystem />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
            
            {/* Wallet routes */}
            <Route path="wallet" element={<Assets />}>
                <Route path="over-view" element={<Overview />} />
                <Route path="spot" element={<SpotWallet />} />
                <Route path="futures" element={<FuturesRec />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;