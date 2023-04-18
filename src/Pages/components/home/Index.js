import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style/home.css";
import merry from "./images/merry dcc.svg";
import mining from "./images/mining dcc.svg";
import convert from "./images/convert dcc.svg";
import position from "./images/position dcc.svg";
import deposit from "./images/depositdcc.svg";
import trade from "./images/trade exchange.svg";
import laptop from "./images/laptop dcc.svg";
import bitcoin from "./images/bitcoin dcc.svg";
import annouceIcon from "./images/announce.svg";
import home2 from "./images/home2 img.svg";
import Menu from "./Menu";

import "swiper/swiper.min.css";

import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import Navbar from "./Navbar";

SwiperCore.use([Autoplay]);

export default function Home() {

  const [openMenu, setOpenMenu] = useState(false);

  const hideMenu = (()=>{
      if(openMenu){
        setOpenMenu(false);
      }else{
        setOpenMenu(true);
      }
  })


  return (
    <div className="homePage">
        <Navbar hideMenu={hideMenu} />
        { openMenu && <Menu cancel={hideMenu} /> }
      {/* <div className="desktop-cover">
        <div className="desktop-cover-inner">
          <div className="desktop-top-second">
            <NavLink to="/">
              <h3>Lite</h3>
            </NavLink>
            <NavLink to="/">
              <h3>Deposit</h3>
            </NavLink>
            <NavLink to="/">
              <h3>Copy Trading</h3>
            </NavLink>
            <NavLink to="/">
              <h3>Convert</h3>
            </NavLink>
          </div>

          <div className="desktop-home">
            <div className="desktop-main-display">
              <div className="desktop-main-display-text">
                <h1>Invest Better</h1>
                <h2>
                  Trade crypto on an easy-to-use platform. Bitcoin, Ethereum,
                  and 50+ other crypto assets at your fingertips
                </h2>
                <NavLink to="/">
                  <h3>Start Trading now</h3>
                </NavLink>
              </div>
              <div className="desktop-main-display-image">
                <img src={main} alt="main" width={"400px"} />
              </div>
            </div>

            <div
              onClick={() => setDesktopchat(!desktopchat)}
              className="chat-link"
            >
              <div className="chat-link-inner">
                <h3>&#9993;</h3>
                <h4>Support</h4>
              </div>
            </div>

            {desktopchat && (
              <div className="chat-display-cover">
                <div className="chat-first">
                  <div className="chat-display-top">
                    <img src={logo} alt="logo" width={"30px"} />
                    <h3>DCC</h3>
                  </div>
                </div>
                <div className="chat-second">
                  <div className="chat-second-1">
                    <div className="chat-date">
                      <h3>{weekday}</h3>
                    </div>
                    <div className="chat-display-body">
                      <div className="chat-display-chatting">
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                        <h3>hello</h3>
                      </div>
                    </div>
                  </div>

                  <div className="chat-display-bottom">
                    <textarea name="text" id="" cols="30" rows="10"></textarea>
                    <h1>&#10147;</h1>
                  </div>
                </div>
              </div>
            )}

            <div className="coin-swipe-section-cover">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="coin-swipe-section">
                    {coins &&
                      coins.map((coin) => (
                        <div className="coin-swipe-section-inner">
                          <h3>
                            {coin.coin1}/{coin.coin2}{" "}
                            <span>+{coin.profit}%</span>
                          </h3>
                          <h3>{coin.price} </h3>
                          <h4>{coin.volume}</h4>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="coin-swipe-section">
                    {coins &&
                      coins.map((coin) => (
                        <div className="coin-swipe-section-inner">
                          <h3>
                            {coin.coin1}/{coin.coin2}{" "}
                            <span>+{coin.profit}%</span>
                          </h3>
                          <h3>{coin.price} </h3>
                          <h4>{coin.volume}</h4>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="coin-swipe-section">
                    {coins &&
                      coins.map((coin) => (
                        <div className="coin-swipe-section-inner">
                          <h3>
                            {coin.coin1}/{coin.coin2}{" "}
                            <span>+{coin.profit}%</span>
                          </h3>
                          <h3>{coin.price} </h3>
                          <h4>{coin.volume}</h4>
                        </div>
                      ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="desktop-home-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="desktop-home-slider-inner">
                  <div className="desktop-home-slider-inner1">
                    <img src={bitcoin} alt="bitcoin" />
                  </div>
                  <div className="desktop-home-slider-inner2">
                    <img src={laptop} alt="laptop" />
                  </div>
                  <div className="desktop-home-slider-inner3">
                    <img src={trade} alt="trade" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="annountment-desktop">
            <div className="annouceIcon-desktop">
              <h4>Latest News</h4>
            </div>
            <div className="home-page-display-text">
              <div className="home-page-display-text1">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day.
                </h3>
              </div>
              <div className="home-page-display-text2">
                <h3>Trading all kinds of crypto asset on spot</h3>
              </div>
              <div className="home-page-display-text3">
                <h3>Dcc Exchange, bringing the best trading AI</h3>
              </div>
            </div>
            <div className="annouceIcon-desktop">
              <h4>Latest</h4>
            </div>
            <div className="home-page-display-text-second">
              <div className="home-page-display-text-second1">
                <h3>Trading all kinds of crypto asset on spot.</h3>
              </div>
              <div className="home-page-display-text2">
                <h3>Dcc Exchange, bringing the best trading AI</h3>
              </div>
              <div className="home-page-display-text3">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day
                </h3>
              </div>
            </div>
            <div className="annouceIcon-desktop">
              <h4>News</h4>
            </div>
            <div className="home-page-display-text-third">
              <div className="home-page-display-text-third1">
                <h3>Dcc Exchange, bringing the best trading AI.</h3>
              </div>
              <div className="home-page-display-text2">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day
                </h3>
              </div>
              <div className="home-page-display-text3">
                <h3>Trading all kinds of crypto asset on spot</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="home-display">
          <div className="home-page">
            <div className="home-page-container">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="home-display-cover">
                   <img src={merry} alt="merry" />
                </div>
              </SwiperSlide>
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

          <div className="annountment">
            <div className="annouceIcon">
              <img src={annouceIcon} alt="" />
            </div>
            <div className="home-page-display-text">
              <div className="home-page-display-text1">
                <h3>Dcc Exchange, bringing the best trading AI.</h3>
              </div>
              <div className="home-page-display-text2">
                <h3>Trading all kinds of crypto asset on spot</h3>
              </div>
              <div className="home-page-display-text3">
                <h3>
                  Our support team are ready to give you 100% support 24hrs all
                  day
                </h3>
              </div>
            </div>
          </div>

          <div className="home-main-lists-first-flex">
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
          </div>

          <div className="home-main-trade-display">
            <div className="home-main-trade-text">
              <NavLink to="favourite">Favourite</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="hot">Hot</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="gainers">Gainers</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="losers">Losers</NavLink>
            </div>
            <div className="home-main-trade-text">
              <NavLink to="volume">Volume</NavLink>
            </div>
          </div>
        </div>
        <div className="coin-height">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
