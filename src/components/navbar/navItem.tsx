import React, { useState } from "react";
import robotImg from "../../assets/navicon.png";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const waveAnimation = {
    background: 'linear-gradient(270deg, #2C043F, #4169E1, #00BFFF, #20B2AA, #8C08A3, #AB6DAA, #6495ED, #2C043F)',
    backgroundSize: '800% 800%',
    animation: 'smoothSeaWave 6s linear infinite'
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "How to Buy", id: "howtobuy" },
    { name: "Road Map", id: "roadmap" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          @keyframes smoothSeaWave {
            0% {
              background-position: 0% 50%;
            }
            20% {
              background-position: 50% 0%;
            }
            40% {
              background-position: 100% 50%;
            }
            60% {
              background-position: 50% 100%;
            }
            80% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <nav className="relative px-4 sm:px-6 lg:px-8 py-4 lg:py-5 text-white font-[iskoola_potha]">
      <div className="flex justify-between  ">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 sm:gap-3 z-50 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={robotImg} alt="BotBuddies Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-lg sm:text-xl font-semibold hidden md:block">BotBuddies</h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 text-base xl:text-lg font-Iskoola-Potha">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-pink-300 cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Buy Now Button */}
        <button className="hidden lg:block justify-end-safe px-4 lg:px-5 py-2 rounded-xl text-white border font-Advent-Pro border-white hover:scale-105 transition-transform duration-200 text-sm lg:text-base" style={waveAnimation}>
          Buy Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 p-2 hover:bg-white/10 rounded-lg transition-colors content-end-safe items-end "
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-gradient-to-b from-purple-900 to-pink-900 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 gap-6">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-4 font-Iskoola-Potha">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-lg hover:text-pink-300 cursor-pointer transition-colors duration-200 py-2 border-b border-white/10"
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Mobile Buy Now Button */}
          
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navbar;