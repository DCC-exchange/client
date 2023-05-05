import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import merry from "../../images/merry dcc.svg";
// import mining from "../../images/mining dcc.svg";
// import convert from "../../images/convert dcc.svg";
// import position from "../../images/position dcc.svg";
// import deposit from "../../images/depositdcc.svg";
import trade from "../../images/trade exchange.svg";
import laptop from "../../images/laptop dcc.svg";
import bitcoin from "../../images/bitcoin dcc.svg";
// import home2 from "../../images/home2 img.svg";
import Menu from "./Menu";

import { TfiAnnouncement, TfiMenuAlt } from "react-icons/tfi";

import "swiper/swiper.min.css";

import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import Navbar from "./Navbar";
import HotSpot from "./route/HotSpot";
import HotFutures from "./route/HotFutures";
import Gainers from "./route/Gainers";
import Losers from "./route/Losers";

import "../../style/home.css"

SwiperCore.use([Autoplay]);

export default function HomeM() {

    const [openMenu, setOpenMenu] = useState(false);

    const hideMenu = (()=>{
        if(openMenu){
          setOpenMenu(false);
        }else{
          setOpenMenu(true);
        }
    })

    const [ defaultRoute , setDefaultRoute ] = useState(<HotSpot />)

    const [ spotActive, setSpotActive] = useState(true)
    const [ futuresActive, setFuturesActive ] = useState(false)
    const [ gainersActive, setGainersActive ] = useState(false)
    const [ losersActive, setLosersActive ] = useState(false)

    const handleSwitch = ((e)=>{
      if(e === 1){
        setDefaultRoute(<HotFutures />)
        setSpotActive(false)
        setFuturesActive(true)
        setGainersActive(false)
        setLosersActive(false)
      }else if( e === 2){
        setDefaultRoute(<HotSpot />)
        setSpotActive(true)
        setFuturesActive(false)
        setGainersActive(false)
        setLosersActive(false)
      }else if( e === 3){
        setDefaultRoute(<Gainers />)
        setSpotActive(false)
        setFuturesActive(false)
        setGainersActive(true)
        setLosersActive(false)
      }else{
        setDefaultRoute(<Losers />)
        setSpotActive(false)
        setFuturesActive(false)
        setGainersActive(true)
        setLosersActive(true)
      }
    })


  return (
    <div className="homePage">
      <Navbar hideMenu={hideMenu} />
    { openMenu && <Menu cancel={hideMenu} /> }
      <div className="homePage-container">
          <div className="home-login-display">
            <div className="home-login-display-container">
                <div className="text">
                  <h4>Welcome Gifts worth $2000!!!</h4>
                </div>
                <div className="regi-btn">
                    <button>Register/Login</button>
                </div>
            </div>
          </div>  

    <div className="home-sliding-images">
      <div className="home-sliding-images-container">
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="home-display-cover">
                  <img src={bitcoin} alt="bitcoin" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="home-display-cover">
                <img src={laptop} alt="laptop" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="home-display-cover">
                <img src={merry} alt="merry" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="home-display-cover">
                <img src={trade} alt="trade" />
              </div>
              </SwiperSlide>
            </Swiper>
          </div>
      </div>

      <div className="home-annountment">
        <div className="home-annountment-container">
              <div className="icon">
                  <h4><TfiAnnouncement /></h4>
              </div>
              <div className="text">
                <h4>Announcement from the management will be swapping here</h4>
              </div>
              <div className="notification-menu">
                  <h4><TfiMenuAlt /></h4>
              </div>
        </div>

      </div>

      {/* <div className="home-main-lists-first-flex">
        <div className="home-main-lists-first-flex2">
          <NavLink to="">
            <div className="image">
              <img src={mining} alt="mining"  />
            </div>
            <div className="text">
                <h3>Lite</h3>
            </div>
          </NavLink>
        </div>
        <div className="home-main-lists-first-flex2">
          <NavLink to="">
            <div className="image">
                <img src={convert} alt="mining"  />
              </div>
              <div className="text">
                  <h3>Convert</h3>
              </div>
          </NavLink>
        </div>
        <div className="home-main-lists-first-flex2">
          <NavLink to="">
          <div className="image">
              <img src={position} alt="mining"  />
            </div>
            <div className="text">
                <h3>Copy Trading</h3>
            </div>
          </NavLink>
        </div>
        <div className="home-main-lists-first-flex2">
          <NavLink to="">
          <div className="image">
              <img src={deposit} alt="mining"  />
            </div>
            <div className="text">
                <h3>Deposit</h3>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="home-second-image">
        <img src={home2} alt="home2" />
      </div> */}

      <div className="home-coin-section">
        <div className="home-coin-section-container">
            <div className="home-coin-section-heading">
                <div className="home-coin-section-heading-container">
                    <div onClick={()=>handleSwitch(1)} className={futuresActive ? "active" : "content"}>
                        <h4>Hot Futures</h4>
                    </div>
                    <div onClick={()=>handleSwitch(2)} className={spotActive ? "active" : "content"}>
                        <h4>Hot Spot</h4>
                    </div>
                    <div onClick={()=>handleSwitch(3)} className={gainersActive ? "active" : "content"}>
                        <h4>Gainers</h4>
                    </div>
                    <div onClick={()=>handleSwitch(4)} className={losersActive ? "active" : "content"}>
                        <h4>Losers</h4>
                    </div>
                </div>
            </div>

            { defaultRoute }
        </div>
      </div>
    </div>
  </div>
  )
}
