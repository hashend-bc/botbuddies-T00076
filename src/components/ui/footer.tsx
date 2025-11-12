import React from "react";
import Robot from "../../assets/Footer.png";
import Telegram from "../../assets/Telegram.png";
import Twitter from "../../assets/Twitter (2).png";
import Market from "../../assets/market.png";
import AWS from "../../assets/aws.png";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-[#2C043F] py-7 md:py-10 lg:py-10 px-0 relative text-white overflow-hidden">
      <div
        className="
          w-full max-w-7xl mx-auto
          flex flex-col md:flex-row justify-center md:justify-between items-center
          px-4 md:px-8 lg:px-12
          gap-y-4 md:gap-y-0
        "
      >
        {/* Left Side - Robot + Socials */}
        <div className="flex flex-col items-center min-w-[120px]">
          <img
            src={Robot}
            alt="Robot"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-1 block animate-float-glow"
          />
          <span className="text-xs sm:text-sm font-[Irish_Grover] mb-2 text-center block">
            Get Involved
          </span>
          <div className="flex flex-row items-center gap-4 mt-2">
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={Telegram} alt="Telegram" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={Twitter} alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://market.com/yourmarket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={Market} alt="Market" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://aws.com/youraws"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={AWS} alt="AWS" className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        {/* Center - Navigation links */}
        <nav className="w-auto">
          <ul className="grid flex-wrap md:flex text-center mt-10 items-center justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 text-xs sm:text-sm md:text-base lg:text-base font-[Irish_Grover]">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-purple-300 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-purple-300 transition-colors"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="hover:text-purple-300 transition-colors"
              >
                Tokenomics
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("howtobuy")}
                className="hover:text-purple-300 transition-colors"
              >
                How to Buy
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="hover:text-purple-300 transition-colors"
              >
                Road Map
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center text-[11px] sm:text-sm text-gray-300 mt-8 px-2 font-[Irish_Grover]">
        © Copyright 2025 All rights reserved by{" "}
        <span className="text-purple-400 font-semibold">Bot Buddies</span>
      </div>
    </footer>
  );
};

export default Footer;
