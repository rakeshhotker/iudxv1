import React from "react";
import iiithLogo from "../images/iiithLogo.png";
import scrcLogo from "../images/SMART_CITY_LOGO.png";
import iudxLogo from "../images/IUDX_logo_white.png";
function Navbar() {
  return (
    <>
      <div className="w-screen h-24  flex justify-evenly items-center border-b-2 justify-items-center">
        <div className="flex w-1/4 mt-1">
          <img src={iiithLogo} className="w-24 h-16" />
          <img src={scrcLogo} className="w-24 h-16" />
        </div>
        <div>
          <p className="text-amber-400 text-4xl mt-1 mr-32">IUDX DASHBOARD</p>
        </div>
        <div className="mt-1">
          <img src={iudxLogo} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
