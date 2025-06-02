import { useState, useEffect } from "react";
import logo from "../assets/images/Vector1.svg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="max-w-[1380px] mx-auto"
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 capitalize ${
      //   scrolled
      //     ? "bg-[#6629DE] shadow-md rounded-full top-3 max-w-[1380px] mx-auto px-4 py-1"
      //     : "bg-white"
      // }`}
    >
      <div className="h-[80px] flex items-center justify-between capitalize">
        {/* Logo */}
        <Link to="/home" className="text-center flex items-center justify-center gap-2">
          <img className="h-12" src={logo} alt="" />
          <h1
            className={`text-xl font-bold font-amiko cursor-pointer uppercase ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            Worksy
          </h1>
        </Link>

        {/* Links */}
        <ul className="hidden lg:flex items-center justify-center space-x-6 ml-7">
          {["home", "features", "resources", "contact us"].map((item) => (
            <li
              key={item}
              className={`text-md font-bold cursor-pointer flex items-center justify-center  gap-1 ${
                scrolled ? "text-white hover:underline" : "text-black hover:text-[#6629DE]"
              }`}
            >
              <NavLink
                to={`/${item}`}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <Link
            to="/login"
            className={`cursor-pointer bg-transparent text-amiko text-center rounded-2xl px-8 py-2.5 text-sm font-normal transition duration-300
              ${
                scrolled
                  ? "text-white"
                  : "text-[#6629DE] hover:bg-[#6629DE] hover:text-white"
              }`}
          >
            sign in
          </Link>

          <Link
            to="/workspace"
            className={`cursor-pointer rounded-2xl px-8 py-2.5 text-amiko font-normal text-sm text-center 
              hover:opacity-90 transition-opacity duration-300
              ${
                scrolled ? "bg-white text-[#6629DE]" : "bg-[#6629DE] text-white"
              }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu + Search Icon */}
        <div className="flex items-center gap-4 lg:hidden">
          <i
            className={`ri-menu-line text-2xl cursor-pointer ${
              scrolled ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(true)}
          ></i>
        </div>

        {/* Sidebar Menu (Mobile) */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-500 flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6">
            <img src={logo} alt="navImg" className="h-8" />
            <i
              className="ri-close-line text-2xl cursor-pointer text-black font-bold"
              onClick={() => setMenuOpen(false)}
            ></i>
          </div>

          {/* Menu items */}
          <ul className="flex flex-col items-start px-6 py-4 space-y-6">
            <li className="text-black text-xl font-bold w-full cursor-pointer flex justify-between">
              Features <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="text-black text-xl font-bold w-full cursor-pointer flex justify-between">
              Solutions <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="text-black text-xl font-bold w-full cursor-pointer">
              Enterprise
            </li>
            <li className="text-black text-xl font-bold w-full">Resources</li>
            <li className="text-black text-xl font-bold w-full cursor-pointer flex justify-between">
              Pricing <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="text-[#1264a3] text-xl font-bold cursor-pointer">
              Watch Demo
            </li>
          </ul>

          <div className="mt-auto px-6 pb-6">
            <button className="border-[#4A154B] text-[#4A154B] border-2 rounded-lg px-6 py-2 text-md transition">
              TALK TO SALES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
