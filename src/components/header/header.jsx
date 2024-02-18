import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-start p-3 bg-slate-600">
      <img src={Logo} alt="trello logo" className="w-[46px]" />
      <h2 className="text-white font-bold">Trello</h2>
    </div>
  );
};

export default Header;
