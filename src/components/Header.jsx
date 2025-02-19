import React from "react";
import netflixLogo from "../assets/netflixlogo.png";

const Header = () => {
  return (
    <div className="absolute h-16 px-8 py-2 bg-gradient-to-b from-black w-full z-50">
      <img src={netflixLogo} alt="" className="h-12" />
    </div>
  );
};

export default Header;
