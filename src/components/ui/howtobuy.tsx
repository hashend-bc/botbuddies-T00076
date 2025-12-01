// import React from "react";
// import { motion } from "framer-motion";
// import StepCard from "../../components/ui/stepcard";
// import robot from "../../assets/howtobuyimg.png";
// import Eclipse from "../../assets/Howtobuyeclipse.png";
// import MobileBackground from "../../assets/Mobilebghowtobuy.png";

// const HowToBuy: React.FC = () => {
//   return (
//     <section className="relative w-full min-h-screen text-white py-10 md:py-5 lg:py-0 overflow-hidden">
//       {/* Desktop Eclipse BG */}
//       <img
//         src={Eclipse}
//         alt="Eclipse Background"
//         className="hidden md:block absolute inset-0 h-[90vh] md:h-[95vh] lg:h-[99vh] w-full object-cover mx-auto z-0"
//       />

//       {/* Mobile Background */}
//       <img
//         src={MobileBackground}
//         alt="Mobile Background"
//         className="md:hidden absolute inset-0 w-full h-[1250px] object-cover z-0"
//       />

//       {/* Mobile Layout */}
//       <div className="md:hidden relative z-10 flex flex-col items-center min-h-screen">
//         <div className="text-center mb-8 mt-5">
//           <h1 className="text-4xl font-bold font-[Irish_Grover] mb-3 section-header">
//             How To Buy
//           </h1>
//         </div>

//         <div className="flex flex-col gap-5 w-full px-4 mb-10">
//           {[1, 2, 3, 4].map((step) => (
//             <motion.div
//               key={step}
//               className={`w-full flex ${step % 2 === 1 ? 'justify-start' : 'justify-end'}`}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="relative group">
//                 <div className="absolute inset-0 rounded-2xl opacity-60 blur-md bg-gradient-to-r from-[#b75eeb] to-[#4f0563] group-hover:opacity-100 transition-all duration-500"></div>
//                 <div className="relative z-10">
//                   <StepCard
//                     step={`0${step}`}
//                     title={
//                       step === 1
//                         ? "Make wallet"
//                         : step === 2
//                         ? "Get some ETH"
//                         : step === 3
//                         ? "Switch ETH for Telang"
//                         : "Go to Uniswap"
//                     }
//                     description="This is a short explanation. Make it short and clear to keep students attentive."
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Robot Image - Mobile */}
//         <motion.div
//           className="flex self-start mt-[-90px] mb-5"
//           animate={{
//             y: [0, -10, 0],
//             rotate: [0, 2, -2, 0],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 4,
//             ease: "easeInOut",
//           }}
//         >
//           <img
//             src={robot}
//             alt="Robot mascot"
//             className="w-[190px] sm:w-36 h-auto drop-shadow-[0_0_25px_rgba(183,94,235,0.6)]"
//           />
//         </motion.div>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden md:flex relative z-10 flex-col">
//         <div className="text-center pt-[8%] md:pt-[9%] lg:pt-[10%] mb-0">
//           <h1 className="justify-self-start px-10 md:px-15 lg:px-20 text-4xl md:text-5xl lg:text-6xl xl:text-[128px] font-bold font-[Irish_Grover] mb-2 absolute left-10 md:left-15 lg:left-20 md:top-[9%] lg:top-[10%] xl:top-[11%]">
//             How To Buy
//           </h1>
//         </div>

//         <div className="flex flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6 xl:gap-20 px-10 md:px-15 lg:px-20 pt-0 flex-1">
//           {/* Left - Robot */}
//           <motion.div
//             className="flex justify-center items-center md:w-[300px] lg:w-[400px] xl:w-[650px] pt-20 md:pt-25 lg:pt-30"
//             animate={{
//               y: [0, -15, 0],
//               rotate: [0, 2, -2, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "easeInOut",
//             }}
//           >
//             <img
//               src={robot}
//               alt="Robot mascot"
//               className="w-[250px] md:w-[300px] lg:w-[400px] xl:w-auto h-auto drop-shadow-[0_0_35px_rgba(183,94,235,0.8)]"
//             />
//           </motion.div>

//           {/* Right - Steps */}
//           <div className="flex-1 flex justify-center items-center">
//             <div className="grid grid-cols-2 grid-rows-2 max-w-[45vw] md:max-w-[50vw] lg:max-w-[40vw] max-h-[60vh] md:max-h-[60vh] lg:max-h-[53vh] gap-20 md:gap-12 lg:gap-40 xl:mb-66 mr-20 md:mr-8 lg:mr-0">
//               {[1, 2, 3, 4].map((step) => (
//                 <motion.div
//                   key={step}
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative group"
//                 >
//                   <div className="absolute inset-0 rounded-2xl opacity-60  blur-md bg-gradient-to-r from-[#b75eeb] to-[#4f0563] group-hover:opacity-100 transition-all duration-500"></div>
//                   <div className="relative z-10">
//                     <StepCard
//                       step={`0${step}`}
//                       title={
//                         step === 1
//                           ? "Make wallet"
//                           : step === 2
//                           ? "Get some ETH"
//                           : step === 3
//                           ? "Switch ETH for Telang"
//                           : "Go to Uniswap"
//                       }
//                       description="This is a short explanation. Make it short and clear to keep students attentive."
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToBuy;

import React from "react";
import { motion } from "framer-motion";
import StepCard from "../../components/ui/stepcard";
import robot from "../../assets/howtobuyimg.png";
import Eclipse from "../../assets/Howtobuyeclipse.png";
import MobileBackground from "../../assets/Mobilebghowtobuy.png";

const HowToBuy: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen text-white py-10 lg:py-0 overflow-hidden">
      {/* Desktop Eclipse BG */}
      <img
        src={Eclipse}
        alt="Eclipse Background"
        className="hidden lg:block absolute inset-0 h-[90vh] lg:h-[99vh] w-full object-cover mx-auto z-0"
      />

      {/* Mobile + Tablet Background */}
      <img
        src={MobileBackground}
        alt="Mobile Background"
        className="lg:hidden md:rounded-full lg:rounded-none absolute inset-0 w-full h-[1250px] md:h-[1200px] md:w-[800px] object-cover z-0"
      />

      {/* Mobile + Tablet Layout */}
      <div className="lg:hidden relative z-10 flex flex-col items-center min-h-screen">
        <div className="text-center mb-8 mt-5">
          <h1 className="text-4xl font-bold font-[Irish_Grover] mb-3 section-header">
            How To Buy
          </h1>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-5 w-full px-4 mb-12">
          {[1, 2, 3, 4].map((step) => (
            <motion.div
              key={step}
              className={`w-full flex ${step % 2 === 1 ? "justify-start" : "justify-end"}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl opacity-60 blur-md bg-gradient-to-r from-[#b75eeb] to-[#4f0563] group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative z-10">
                  <StepCard
                    step={`0${step}`}
                    title={
                      step === 1
                        ? "Make wallet"
                        : step === 2
                        ? "Get some ETH"
                        : step === 3
                        ? "Switch ETH for Telang"
                        : "Go to Uniswap"
                    }
                    description="This is a short explanation. Make it short and clear to keep students attentive."
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Robot Image - Mobile/Tablet */}
        <motion.div
          className="flex self-start mt-[-90px] mb-5"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <img
            src={robot}
            alt="Robot mascot"
            className="w-[190px] sm:w-36 h-auto drop-shadow-[0_0_25px_rgba(183,94,235,0.6)] md:w-[250px]"
          />
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative z-10 flex-col">
        <div className="text-center pt-[7%] mb-0">
          <h1 className="justify-self-start px-10 lg:px-20 text-4xl lg:text-6xl xl:text-[128px] font-bold font-[Irish_Grover] mb-2 absolute left-10 lg:left-20 top-[10%]">
            How To Buy
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 lg:gap-6 xl:gap-20 px-10 lg:px-20 flex-1">
          {/* Left - Robot */}
          <motion.div
            className="flex justify-center items-center lg:w-[400px] xl:w-[650px] pt-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <img
              src={robot}
              alt="Robot mascot"
              className="w-[300px] lg:w-[400px] xl:w-auto h-auto drop-shadow-[0_0_35px_rgba(183,94,235,0.8)]"
            />
          </motion.div>

          {/* Right - Steps */}
          <div className="flex-1 flex justify-center items-center">
            <div className="grid grid-cols-2 grid-rows-2 max-w-[45vw] lg:max-w-[40vw] max-h-[60vh] gap-20 lg:gap-40 mr-0">
              {[1, 2, 3, 4].map((step) => (
                <motion.div
                  key={step}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-60 blur-md bg-gradient-to-r from-[#b75eeb] to-[#4f0563] group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <StepCard
                      step={`0${step}`}
                      title={
                        step === 1
                          ? "Make wallet"
                          : step === 2
                          ? "Get some ETH"
                          : step === 3
                          ? "Switch ETH for Telang"
                          : "Go to Uniswap"
                      }
                      description="This is a short explanation. Make it short and clear to keep students attentive."
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
