"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQCardProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="py-4 cursor-pointer select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between">
        <h5 className="text-lg font-bold text-neutral-20 leading-6">{question}</h5>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-neutral-20"
        >
          {isOpen ? "−" : "+"}
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 text-neutral-20 leading-[19.2px] overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQCard;
