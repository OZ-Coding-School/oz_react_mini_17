import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-wrap bg-black">
      <Link to="/">
        <img src={LogoImg} alt="Logo" className="w-80 h-28 p-3" />
      </Link>
    </div>
  );
};

export default Navbar;
