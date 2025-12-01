import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Stepicon1 from "../../assets/Step1.png";
import Stepicon2 from "../../assets/Step2.png";
import Stepicon3 from "../../assets/Step3.png";
import Stepicon4 from "../../assets/Step4.png";

interface RoadStepProps {
  stepId: string;
  title: string;
  description: string;
  activeStep?: string; // used to know which step to highlight
}

const RoadStep: React.FC<RoadStepProps> = ({ stepId, title, description, activeStep }) => {
  const controls = useAnimation();

  // Trigger glow when this step becomes active
  useEffect(() => {
    if (activeStep === stepId) {
      controls.start({
        filter: [
          "drop-shadow(0 0 0px rgba(183,94,235,0))",
          "drop-shadow(0 0 25px rgba(183,94,235,1))",
          "drop-shadow(0 0 0px rgba(183,94,235,0))",
        ],
        scale: [1, 1.08, 1],
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    }
  }, [activeStep, stepId, controls]);

  const getStepIcon = () => {
    switch (stepId) {
      case "S1":
        return Stepicon1;
      case "S2":
        return Stepicon2;
      case "S3":
        return Stepicon3;
      case "S4":
        return Stepicon4;
      default:
        return Stepicon1;
    }
  };

  return (
    <div className="flex flex-col items-center text-start w-full">
      <motion.div animate={controls} className="relative flex flex-col items-center -mt-45">
        <img
          src={getStepIcon()}
          alt={`Step ${stepId} Icon`}
          className="w-40 h-40 object-contain transition-all duration-500"
        />
      </motion.div>

      <h3 className="font-[Irish_Grover] text-base sm:text-lg font-bold -ml-10 mt-2 text-white">
        {title}
      </h3>
      <p className="font-[Advent_Pro]  text-xs sm:text-base mt-1 text-white/90 ml-38   ">
        {description}
      </p>
    </div>
  );
};

export default RoadStep;
