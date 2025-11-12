import React, { useState, useEffect } from "react";
import RoadStep from "../ui/roadStep";
import Roadpath from "../../assets/RoadmapImg.png";
import Robot from "../../assets/Group 9.png";
import Roadpathmobile from "../../assets/Roadmapmobile.png";
import Mobilearrowleft from "../../assets/Arrowleft.png";
import Mobilearrowright from "../../assets/Arrowright.png";
import { motion } from "framer-motion";

const stepData = [
  { stepId: "S1", title: "Step 01", description: "This is a short explanation. Make it short and clear to keep students attentive." },
  { stepId: "S2", title: "Step 02", description: "This is a short explanation. Make it short and clear to keep students attentive." },
  { stepId: "S3", title: "Step 03", description: "This is a short explanation. Make it short and clear to keep students attentive." },
  { stepId: "S4", title: "Step 04", description: "This is a short explanation. Make it short and clear to keep students attentive." },
];

const RoadMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState("S1");

  // Loop through each step with delay to simulate lighting passing
  useEffect(() => {
    const steps = ["S1", "S2", "S3", "S4"];
    let index = 0;
    const interval = setInterval(() => {
      setActiveStep(steps[index]);
      index = (index + 1) % steps.length;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24 -mt-[8%] overflow-hidden text-white">
      {/* Section title */}
      <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-center font-[Irish_Grover] mb-8 md:mb-12 lg:mb-16 px-4 section-header">
        Road Map
      </h2>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center w-full px-0 relative">
        <img
          src={Roadpathmobile}
          alt="Road Path Mobile"
          className="w-full mb-4 z-0"
        />

        <div className="flex flex-col gap-4 w-full z-10 relative -mt-15 md:px-54 px-4">
          {stepData.map((step, idx) => (
            <React.Fragment key={step.stepId}>
              <motion.div
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: activeStep === step.stepId ? 1 : 0.7,
                  scale: activeStep === step.stepId ? 1.05 : 1,
                  filter:
                    activeStep === step.stepId
                      ? "drop-shadow(0 0 15px rgba(183,94,235,0.9))"
                      : "none",
                }}
                transition={{ duration: 0.6 }}
                className={`w-full flex ${
                  idx % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="w-[222px] h-[100px] rounded-2xl p-2 gap-4 flex flex-col justify-self-center bg-[#4F0563] border border-white/10">
                  <div className="text-sm font-bold font-[Irish_Grover] text-[#FFFFFF]">
                    {step.title}
                  </div>
                  <div className="text-xs text-[#FFFFFF] line-clamp-2 font-[Inria_Serif]">
                    {step.description}
                  </div>
                </div>
              </motion.div>

              {idx < stepData.length - 1 && (
                <div
                  className={`w-full flex ${
                    idx % 2 === 0
                      ? "justify-start pl-5 sm:pl-20 md:pl-0 -mt-19"
                      : "justify-end pr-5  sm:pr-20  md:pr-5 -mt-19"
                  }`}
                >
                  <motion.img
                    src={
                      idx % 2 === 0 ? Mobilearrowleft : Mobilearrowright
                    }
                    alt={`arrow-${idx}`}
                    className="w-24 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]"
                    animate={{
                      x: [0, 10, -10, 0],
                      y: [0, -8, 8, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2 + idx * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Robot Animation */}
        <motion.div
          className="flex justify-center items-end relative mt-2 w-full h-28"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <img
            src={Robot}
            alt="Bot"
            className="w-[279px] h-[205px] -mb-20 drop-shadow-[0_0_25px_rgba(183,94,235,0.6)] absolute bottom-0 z-50"
          />
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full min-h-[440px] xl:min-h-[500px]">
        {/* Curved Path */}
        <img
          src={Roadpath}
          alt="Road Path"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full xl:w-full h-auto z-0 opacity-80"
        />

        {/* Steps */}
        <div className="relative flex flex-row justify-center items-start gap-16 xl:gap-28 z-10   mx-auto pt-32">
          <div className="flex flex-col items-center mt-40">
            <RoadStep {...stepData[0]} activeStep={activeStep} />
          </div>
          <div className="flex flex-col items-center mt-24">
            <RoadStep {...stepData[1]} activeStep={activeStep} />
          </div>
          <div className="flex flex-col items-center mt-8">
            <RoadStep {...stepData[2]} activeStep={activeStep} />
          </div>
          <div className="flex flex-col items-center mt-0">
            <RoadStep {...stepData[3]} activeStep={activeStep} />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default RoadMap;
