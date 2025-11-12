import React from "react";
import TokenomicsCard from "../ui/tokenomicsCard";
import MobileRobo1 from "../../assets/mobileRobo1.png";
import MobileRobo2 from "../../assets/mobileRobo2.png";

const Tokenomics: React.FC = () => {
  return (
    <section className="relative w-full text-white min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] py-10 md:py-12 lg:py-16 xl:py-20">
      {/* Mobile-only robo images */}
      <img src={MobileRobo1} 
        alt="Mobile Robo 1" 
        className="absolute left-4 top-[370px] w-30 opacity-80 pointer-events-none block sm:hidden z-40" />
      <img src={MobileRobo2} 
        alt="Mobile Robo 2" 
        className="absolute right-2 bottom-[200px] w-30 opacity-70 pointer-events-none block sm:hidden z-200" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 -mt-[9%]">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px] md:mt-40 font-bold mb-4 md:mb-5 lg:mb-0 font-[Irish_Grover] section-header">
          Tokenomics
        </h2>
        {/* Description */}
        <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-sm sm:text-base md:text-base lg:text-lg text-[#ffffff] font-[Advent_Pro] leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 px-4">
          This is a short explanation. BotBuddies is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive.
        </p>

        {/* Cards */}
        <div className="
          flex flex-col sm:flex-row
          items-center justify-center
          gap-12 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 text-[#621F82] w-full max-w-6xl
        ">
          {/* On mobile, stack vertically with margin between cards and robo images */}
          <div className="flex flex-col items-center w-full sm:hidden sm:w-auto">
            <div className="relative">
              <TokenomicsCard title="0%" subtitle="Buy Tax" />
              {/* On mobile, first robo image above this card via absolute positioning */}
            </div>
            <div className="relative">
              <TokenomicsCard title="0%" subtitle="Sell Tax" />
            </div>
            <div className="relative">
              <TokenomicsCard title="Burnt" subtitle="Liquidity" />
              {/* On mobile, second robo image below this card via absolute positioning */}
            </div>
          </div>

          {/* On desktop, show the row layout */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-6 md:gap-7 lg:gap-8 xl:gap-10 w-full">
            <TokenomicsCard title="0%" subtitle="Buy Tax" />
            <TokenomicsCard title="0%" subtitle="Sell Tax" />
            <TokenomicsCard title="Burnt" subtitle="Liquidity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
