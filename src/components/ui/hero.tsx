import React from 'react';
import robotImg from '../../assets/Hero.png';
import Eclipse from '../../assets/heroeclipse1.png';
import Eclipse2 from '../../assets/heroeclipse2.png';
import EclipseLeft1 from '../../assets/mobileleft1.png';
import EclipseLeft2 from '../../assets/mobileleft2.png';
import EclipseRight1 from '../../assets/mobileright1.png';
import EclipseRight2 from '../../assets/mobileright2.png';

const HeroSection: React.FC = () => {
  const waveAnimation = {
    background: 'linear-gradient(270deg, #2C043F, #4169E1, #00BFFF, #20B2AA, #8C08A3, #AB6DAA, #6495ED, #2C043F)',
    backgroundSize: '800% 800%',
    animation: 'smoothSeaWave 6s linear infinite'
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
        `}
      </style>
      <section className=" relative flex min-h-[80vh] overflow flex-col items-center justify-center  px-2 py-10 text-white sm:px-4 md:min-h-[75vh] md:px-10 md:py-0">
        {/* Desktop Eclipse BG */}
        <img
          src={Eclipse}
          alt="Eclipse"
          className="absolute top-8 md:top-10 lg:top-12 left-[-8vw] z-0 hidden h-[35vw] md:h-[40vw] lg:h-[30vw] max-h-[664px] w-[45vw] md:w-[50vw] lg:w-[40vw] max-w-[781px] opacity-80 md:block"
        />
        <img
          src={Eclipse2}
          alt="Eclipse2"
          className="absolute top-[30vh] md:top-[32vh] lg:top-[34vh] right-[-15vw]  hidden h-[50vw] md:h-[47vw] lg:h-[45vw] max-h-[758px] w-[52vw] md:w-[50vw] lg:w-[48vw] max-w-[760px] opacity-80 md:block z-10"
        />

        {/* Mobile/Tablet Layout */}
        <div className="relative z-0 mt-2 flex w-full flex-col items-center px-3 md:hidden">
          {/* Decorative mobile eclipses (behind content) */}
          <img
            src={EclipseLeft1}
            alt="eclipse-left-1"
            className="absolute top-[200px] -left-2.5 z-0 w-[120px] opacity-90 animate-pulse"
          />
          <img
            src={EclipseLeft2}
            alt="eclipse-left-2"
            className="absolute top-[340px] -left-2.5 z-0 w-[113px] opacity-90 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <img
            src={EclipseRight1}
            alt="eclipse-right-1"
            className="absolute top-[260px] -right-2.5 z-0 w-[115px] opacity-80 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          <img
            src={EclipseRight2}
            alt="eclipse-right-2"
            className="absolute top-[450px] -right-2.5 z-0 w-[135px] opacity-80 animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />

          {/* Robot Image */}
          <img
            src={robotImg}
            alt="Bot Character"
            className="z-10 mt-3 mb-5 h-auto w-[60vw] max-w-[300px] drop-shadow-[0_0_30px_rgba(0,0,255,0.4)] animate-float"
            style={{
              animation: 'float 3s ease-in-out infinite'
            }}
          />
          {/* Text Content */}
          <div className="w-full  text-center z-100">
            <h1 className="mb-4 font-[Irish_Grover] text-4xl font-extrabold text-white/90 section-header sm:text-5xl">
              Bot Buddies
            </h1>
            <p className="mb-8 px-2 font-[Advent_Pro] text-base leading-relaxed text-[#FFFFFF] sm:px-6 sm:text-lg">
              This is a short explanation. BotBuddies is a fun and interactive
              platform. Keep it short, clear, and engaging to capture attention.
              This is a short explanation. Make it short and clear to keep
              students attentive.
            </p>
            <button className="mb-4 rounded-xl border border-white px-6 py-3 font-[Advent_Pro] text-lg font-medium transition hover:scale-105" style={waveAnimation}>
              Buy Now
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="z-10 hidden w-full max-w-7xl items-center justify-center gap-6 md:gap-8 lg:gap-10 md:flex md:flex-row xl:gap-8">
          {/* Left - Robot Image */}
          <div className="relative top-12 md:top-16 lg:top-20 -ml-6 md:-ml-8 lg:-ml-12 shrink-0 z-50">
            <img
              src={robotImg}
              alt="Bot Character"
              className="z-50 h-auto w-[35vw] md:w-[32vw] lg:w-[30vw] max-w-[650px] drop-shadow-[0_0_25px_rgba(0,0,255,0.4)] transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(0,0,255,0.6)]"
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            />
          </div>
          {/* Right - Text Content */}
          <div className="max-w-xl md:max-w-lg lg:max-w-2xl">
            <h1 className="mb-3 md:mb-4 lg:mb-5 font-[Irish_Grover] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white/90 section-header xl:text-7xl">
              Bot Buddies
            </h1>
            <p className="mb-6 md:mb-7 lg:mb-8 font-[Advent_Pro] text-sm md:text-base lg:text-lg leading-relaxed text-[#FFFFFF] xl:text-xl">
              This is a short explanation. BotBuddies is a fun and interactive
              platform. Keep it short, clear, and engaging to capture attention.
              This is a short explanation. Make it short and clear to keep
              students attentive. This is a short explanation. BotBuddies is a fun
              and interactive platform. Keep it short, clear, and engaging to
              capture attention. This is a short explanation. Make it short and
              clear to keep students attentive.
            </p>
            <button className="rounded-xl border border-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 font-[Advent_Pro] text-sm md:text-base lg:text-lg font-medium transition hover:scale-105" style={waveAnimation}>
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;