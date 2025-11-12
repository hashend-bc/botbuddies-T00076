import React from "react";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
  <div className="bg-[#B75EEB] rounded-2xl px-3   py-5 shadow-lg text-left w-[220px] lg:w-[220px] md:w-[300px] 2xl:w-[350px] h-[220px]">
    <div className="bg-[#7B058F] rounded-xl px-4 py-2 mb-2 font-[Irish_Grover] text- sm:text-2xl 2xl:text-2xl font-bold tracking-wide text-white text-start">
      {step} {title}
    </div>
    <div className="font-[Advent_Pro] text-base 2xl:text-3xl px-4 text-white/90 leading-relaxed ">
      {description}
    </div>
  </div>
);

export default StepCard;
