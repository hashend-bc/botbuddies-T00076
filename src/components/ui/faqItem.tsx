import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  // Color alternation for cards per design
  const mainColors = [
    "bg-[#B272DF]",
    "bg-[#AE8CB0]",
    "bg-[#B272DF]",
    "bg-[#AE8CB0]",
    "bg-[#B272DF]",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 25px 70px rgba(178, 114, 223, 0.6), 0 0 40px rgba(178, 114, 223, 0.3)",
        transition: { duration: 0.3 }
      }}
      className={`${mainColors[index % mainColors.length]} rounded-2xl mb-4 transition-all duration-300 shadow-lg relative overflow-hidden`}
      style={{
        boxShadow: "0 10px 30px rgba(178, 114, 223, 0.2)"
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-300/20 to-purple-400/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center p-5 sm:p-6 md:p-7 text-left font-[Irish_Grover] uppercase tracking-wide text-white text-base sm:text-lg md:text-xl font-semibold relative z-10`}
      >
        {question}
        <motion.span 
          className="ml-2 text-purple-300"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <Minus size={24} /> : <Plus size={24} />}
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/90 font-[Advent_Pro] text-sm sm:text-base leading-relaxed overflow-hidden relative z-10"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;