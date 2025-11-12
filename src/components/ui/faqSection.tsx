import React from "react";
import { motion } from "framer-motion";
import FAQItem from "../ui/faqItem";
import Robot1 from "../../assets/Group 9.png";
import Robot2 from "../../assets/bottomimg.png";
import MobileArt from "../../assets/faqmobileiamge1.png";
import MobileArt2 from "../../assets/faqmobileimage2.png";
import MobileArt3 from "../../assets/faqmobileimage3.png";

const faqs = [
  {
    question: "Where can I get Bot Buddies NFTs?",
    answer: "This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation. Make it short and clear to keep students attentive.",
  },
  {
    question: "What make Bot Buddies Coin unique?",
    answer: "Each coin integrates AI-based mechanics and interactive NFTs, creating a unique ecosystem for users and investors.",
  },
  {
    question: "How can I participate in airdrops?",
    answer: "Follow our community channels and complete the required engagement tasks to qualify for upcoming airdrops.",
  },
  {
    question: "Is there a presale for Bot Buddies Coin?",
    answer: "Yes! Stay tuned to our website and official Discord for whitelist and presale announcements.",
  },
  {
    question: "What's the future of Bot Buddies Coin?",
    answer: "We aim to build a full metaverse integration, empowering users to trade, play, and grow their digital identity.",
  },
];

const FAQSection: React.FC = () => (
  <section className="relative md:py-16 lg:py-20 -mt-[8%] flex flex-col items-center justify-center">
    {/* Title with glowing animation */}
    <motion.h2 
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="top-15 z-30 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-[Irish_Grover] text-white tracking-wider section-header - md:mb-0 lg:mb-[-50px] text-center absolute"
      style={{
        textShadow: "0 0 20px rgba(178, 114, 223, 0.8), 0 0 40px rgba(178, 114, 223, 0.6), 0 0 60px rgba(178, 114, 223, 0.4)"
      }}
    >
      <motion.span
        animate={{
          textShadow: [
            "0 0 20px rgba(178, 114, 223, 0.8), 0 0 40px rgba(178, 114, 223, 0.6)",
            "0 0 30px rgba(178, 114, 223, 1), 0 0 60px rgba(178, 114, 223, 0.8), 0 0 80px rgba(255, 255, 255, 0.4)",
            "0 0 20px rgba(178, 114, 223, 0.8), 0 0 40px rgba(178, 114, 223, 0.6)"
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        FAQS
      </motion.span>
    </motion.h2>

    {/* FAQ Container with scale animation */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="
        w-full
        max-w-[350px] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
        bg-[#34033D] border-2 border-[#5A207D] rounded-2xl shadow-2xl
        p-6 sm:p-8 md:p-12 lg:p-16
        relative
        mt-2 md:mt-10 lg:mb-10 z-20 top-25 md:top-0
      "
    >
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
      ))}
    </motion.div>

    {/* Desktop robot - floating upper-right with glow */}
    <motion.div 
      initial={{ opacity: 0, x: 100, y: -50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      animate={{ 
        y: [0, -20, 0],
      }}
      className="hidden xl:block absolute top-[-110px] right-[18%] z-50"
      style={{
        filter: "drop-shadow(0 0 30px rgba(178, 114, 223, 0.6))"
      }}
    >
      <motion.img
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        animate={{
          filter: [
            "drop-shadow(0 0 20px rgba(178, 114, 223, 0.6))",
            "drop-shadow(0 0 40px rgba(178, 114, 223, 0.9)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))",
            "drop-shadow(0 0 20px rgba(178, 114, 223, 0.6))"
          ]
        }}
        src={Robot1}
        alt="Robot1"
        className="w-[387px] pointer-events-none"
      />
    </motion.div>

    {/* Desktop robot - bottom right with glow */}
    <motion.div 
      initial={{ opacity: 0, x: 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, -3, 0, 3, 0]
      }}
      className="hidden xl:block absolute -bottom-30 right-10 2xl:right-120 z-60"
      style={{
        filter: "drop-shadow(0 0 30px rgba(174, 140, 176, 0.7))"
      }}
    >
      <motion.img
        whileHover={{ scale: 1.15, rotate: -10 }}
        transition={{ duration: 0.3 }}
        animate={{
          filter: [
            "drop-shadow(0 0 25px rgba(174, 140, 176, 0.7))",
            "drop-shadow(0 0 45px rgba(174, 140, 176, 1)) drop-shadow(0 0 65px rgba(255, 255, 255, 0.4))",
            "drop-shadow(0 0 25px rgba(174, 140, 176, 0.7))"
          ]
        }}
        src={Robot2}
        alt="Robot2"
        className="w-[320px] xl:w-[410px] h-auto pointer-events-none z-60"
      />
    </motion.div>

    {/* Mobile Robot - below FAQ box with glow */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, 0, -5, 0]
      }}
      className="xl:hidden w-[500px] flex left-40 bottom-[10] relative z-150"
      style={{
        filter: "drop-shadow(0 0 25px rgba(174, 140, 176, 0.8))"
      }}
    >
      <motion.img
        animate={{
          filter: [
            "drop-shadow(0 0 20px rgba(174, 140, 176, 0.7))",
            "drop-shadow(0 0 40px rgba(174, 140, 176, 1)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))",
            "drop-shadow(0 0 20px rgba(174, 140, 176, 0.7))"
          ]
        }}
        src={Robot2}
        alt="Robot2"
        className="w-[316px] h-[316px] opacity-95 pointer-events-none"
      />
    </motion.div>

    {/* Mobile art backgrounds with staggered fade-in */}
    <div className="xl:hidden relative w-full pointer-events-none">
      <motion.img 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.85, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        src={MobileArt} 
        alt="faq-art-1" 
        className="block sm:hidden absolute left-0 bottom-[150px] w-50" 
      />
      <motion.img 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.85, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        src={MobileArt2} 
        alt="faq-art-2" 
        className="block sm:hidden absolute left-1/2 -translate-x-1/2 bottom-[100px] w-55" 
      />
      <motion.img 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.85, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        src={MobileArt3} 
        alt="faq-art-3" 
        className="block sm:hidden absolute left-0 bottom-[-30px] w-60" 
      />
    </div>
  </section>
);

export default FAQSection;