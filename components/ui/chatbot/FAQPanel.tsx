"use client";

import { motion } from "framer-motion";

const FAQ_QUESTIONS = [
  "Example FAQ Question",
  "Example FAQ Question",
  "Example FAQ Question",
  "Example FAQ Question",
  "Example FAQ Question",
];

interface FAQPanelProps {
  onQuestionClick: (question: string) => void;
}

export function FAQPanel({ onQuestionClick }: FAQPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="absolute bottom-16 left-4 bg-white rounded-2xl shadow-lg border border-[#e8e1d7] w-64 p-3"
    >
      <h4 className="text-sm font-semibold mb-2 text-[#40ad5a]">Frequently Asked Questions</h4>
      <ul className="space-y-1">
        {FAQ_QUESTIONS.map((question, idx) => (
          <li key={idx}>
            <button
              onClick={() => onQuestionClick(question)}
              className="text-sm text-left w-full px-2 py-1.5 rounded-xl hover:bg-[#f8f8f8] transition-colors"
            >
              {question}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}