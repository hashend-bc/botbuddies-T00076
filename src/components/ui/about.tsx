import React from "react";
import robotImg from "../../assets/aboutimg.png";
import Rectangle from "../../assets/Rectangleabout.png";
import mobileRectangle1 from "../../assets/mobilerectangle1.png";
import mobileRectangle2 from "../../assets/mobileRectangle2.png";

const AboutSection: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes tilt {
            0%, 100% {
              transform: rotate(0deg) translateY(0px);
            }
            25% {
              transform: rotate(-2deg) translateY(-10px);
            }
            75% {
              transform: rotate(2deg) translateY(-10px);
            }
          }
        `}
      </style>
      <section className="relative text-white md:px-6 lg:px-10 xl:px-24 py-0 md:py-0 min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] z-10">
        {/* Rectangle BG - Desktop only */}
        <img
          src={Rectangle}
          alt="Rectangle Background"
          className="hidden md:block absolute w-full top-60 md:top-64 lg:top-72 xl:top-80 left-0 object-cover h-[300px] md:h-[350px] lg:h-[400px] xl:h-[516px]"
        />

        {/* Mobile & Tablet Layout */}
        <div className="md:hidden flex flex-col items-center justify-center relative z-10 pt-10">
          {/* Decorative mobile rectangles */}
          <img
            src={mobileRectangle1}
            alt="mobile-rect-1"
            className="block sm:hidden absolute top-[25%] w-[500px] h-[40%] opacity-70 z-0 pointer-events-none animate-pulse"
          />
          <img
            src={mobileRectangle2}
            alt="mobile-rect-2"
            className="block sm:hidden absolute w-screen opacity-60 z-0 pointer-events-none -bottom-[18%] animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div className=" rounded-xl py-5 px-3 w-full max-w-sm mx-auto  relative z-10 ">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold font-[Irish_Grover] mb-4 text-center section-header">
              About Us
            </h2>
            {/* Content */}
            <p className="text-sm sm:text-base leading-relaxed text-white font-[Advent_Pro] text-center mb-6 px-15 sm:px-0">
              This is a short explanation. BotBuddies is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation. BotBuddies is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive.
            </p>
            {/* Robot Image */}
            <div className="flex justify-center items-center mb-1">
              <img
                src={robotImg}
                alt="Bot Character"
                className="w-[500px] h-[360px] drop-shadow-[0_0_25px_rgba(0,0,255,0.4)] mt-2"
                style={{
                  animation: 'tilt 4s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop & Large Layout */}
        <div className="hidden md:flex flex-row items-center justify-between max-w-7xl mx-auto relative z-0 min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[650px]">
          {/* Left - Text */}
          <div className="flex-1 pr-4 md:pr-6 lg:pr-8 xl:pr-16 -mt-20 md:-mt-28 lg:-mt-36 xl:-mt-40">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold font-[Irish_Grover] mb-4 md:mb-5 lg:mb-6 drop-shadow-md">
              About Us
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-white font-[Advent_Pro] max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              This is a short explanation. BotBuddies is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. BotBuddies is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation. BotBuddies is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive.
            </p>
          </div>
          {/* Right - Image */}
          <div className="flex-1 flex justify-end items-center -mt-32 md:-mt-40 lg:-mt-52 xl:-mt-60 -mr-20 md:-mr-20 lg:-mr-20 xl:-mr-30">
            <img
              src={robotImg}
              alt="Bot Character"
              className="w-[300px] md:w-[350px] lg:w-[450px] xl:w-[600px] 2xl:w-[800px] z-70 h-auto drop-shadow-[0_0_25px_rgba(0,0,255,0.4)] transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(0,0,255,0.6)]"
              style={{
                animation: 'tilt 4s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;