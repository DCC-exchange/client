import HomeD from "./view/destop/HomeD";
import HomeM from "./view/mobile/HomeM";

import "./style/home.css";
import "./style/menu.css";
import "./style/navbar.css";

// Destop Style
import "./style/desktop/home.css"
import "./style/desktop/navbar.css"

export default function Home() {

  return (
    <>
      <div className="mobile-view">
          <HomeM />
      </div>
      <div className="destop-view">
         <HomeD />
      </div>
    </>
  );
}
