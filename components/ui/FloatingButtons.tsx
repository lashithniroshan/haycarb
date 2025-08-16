import React, { useEffect, useState } from "react";
import styles from "./FloatingButtons.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChatWindow } from "./chatbot/ChatWindow";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  text: "Hello! I'm your test chatbot. How can I help you today?",
  isBot: true,
  timestamp: new Date(),
};

const FloatingButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const generateSessionId = () => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return Array.from(
        { length: 30 },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("");
    };
    setSessionId(generateSessionId());
  }, []);

  const handleOpen = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return (
    <>
      {/* Left: User Button */}
      <button
        className={`${styles.floatingbtn} ${styles.leftbtn}`}
        aria-label="User"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg> */}
        <Image
          src="/icons/assumability.png"
          alt="assumability"
          width={38}
          height={38}
          className="object-contain h-full"
        />
      </button>

      {/* Right: Chat Button */}
      <AnimatePresence mode="wait">
        {isVisible ? (
          <ChatWindow
            onClose={handleClose}
            isExpanded={isExpanded}
            isOpen={isOpen}
            messages={messages}
            setMessages={setMessages}
            sessionId={sessionId}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <button
              className={`${styles.floatingbtn} ${styles.rightbtn}`}
              aria-label="Chat"
              onClick={handleOpen}
            >
              {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg> */}
              <Image
                src="/icons/ChatBot.png"
                alt="assumability"
                width={38}
                height={38}
                className="object-contain h-full"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
