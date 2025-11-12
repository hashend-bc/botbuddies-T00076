import React from "react";

interface TokenomicsCardProps {
  title: string;
  subtitle: string;
}

const TokenomicsCard: React.FC<TokenomicsCardProps> = ({ title, subtitle }) => {
  return (
    <>
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(162, 53, 181, 0.4),
                          0 0 40px rgba(162, 53, 181, 0.2);
            }
            50% {
              box-shadow: 0 0 30px rgba(162, 53, 181, 0.6),
                          0 0 60px rgba(162, 53, 181, 0.4),
                          0 0 80px rgba(162, 53, 181, 0.2);
            }
          }
          
          @keyframes float-card {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes rotate-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div className="
        relative
        w-[180px] h-[180px]
        sm:w-[200px] sm:h-[200px]
        md:w-[280px] md:h-[280px]
        lg:w-[330px] lg:h-[330px]
        xl:w-[400px] xl:h-[400px]
        flex justify-center items-center
        mb-12 sm:mb-0
        transition-all duration-300
        hover:scale-110
      "
      style={{
        animation: 'float-card 3s ease-in-out infinite'
      }}
      >
        {/* Outer Layer with Glow */}
        <div 
          className="absolute inset-0 rounded-[50%] bg-[#A235B5] z-0 transition-all duration-300" 
          style={{
            animation: 'pulse-glow 2s ease-in-out infinite, rotate-slow 20s linear infinite'
          }}
        />
        
        {/* Inner Circle and Text */}
        <div className="
          absolute
          rounded-[50%]
          bg-[#D9D9D9]
          border-2 border-[#621F82]
          flex flex-col items-center justify-center
          w-[75%] h-[75%]
          left-[12.5%] top-[12.5%] z-10
          transition-all duration-300
          hover:bg-gradient-to-br hover:from-[#E9E9E9] hover:to-[#D9D9D9]
          hover:border-[#A235B5]
        ">
          <p className="mb-2 font-[Adamina] text-[#621F82] text-[22px] sm:text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] transition-all duration-300 hover:scale-110">
            {title}
          </p>
          <p className="font-bold font-[Aclonica] text-lg sm:text-base md:text-xl lg:text-2xl text-[#6D289C] transition-all duration-300 hover:scale-110 hover:text-[#A235B5]">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default TokenomicsCard;