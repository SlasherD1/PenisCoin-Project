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
    <nav className="rajdhani flex justify-between items-center px-8 py-1 text-white absolute top-0 left-0 right-0 w-full z-50 font-boldoa">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" width={70} height={78} />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-8">
        <a
          href="https://x.com/BlobjackCoin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <FaXTwitter size={20} color="#A3A3A3" />{" "}
          </div>
          <span className="text-4xl font-boldoa2">X: LINK</span>
        </a>
        <a
          href="https://t.me/BlobJack"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <FaTelegramPlane size={20} color="#A3A3A3" />
          </div>
          <span className="text-4xl font-boldoa2">TELEGRAM: LINK</span>
        </a>
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <FaRegChartBar size={40} color="#ffffff" />{" "}
          </div>
          <span className="text-4xl font-boldoa2">CHART: LINK</span>
        </a>
      </ul>

      {/* Mobile toggle */}
      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 md:hidden">
          <a
            href="https://x.com/BlobjackCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <FaXTwitter size={20} color="#A3A3A3" />{" "}
            </div>
            <span className="text-4xl font-boldoa2">X: LINK</span>
          </a>
          <a
            href="https://t.me/BlobJack"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <FaTelegramPlane size={20} color="#A3A3A3" />{" "}
            </div>
            <span className="text-4xl font-boldoa2">TELEGRAM: LINK</span>
          </a>
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <FaRegChartBar size={20} color="#A3A3A3 bg-black" />{" "}
            </div>
            <span className="text-4xl font-boldoa2">CHART: LINK</span>
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
