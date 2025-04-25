import React from "react";
import { useState } from "react";
import {
  FaRegChartBar,
  FaBars,
  FaTimes,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="rajdhani flex justify-between items-center px-8 py-4 text-white absolute top-0 left-0 right-0 w-full z-50 font-boldoa">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" width={70} height={78} />
      </div>
    </nav>
  );
};

export default Navbar;
