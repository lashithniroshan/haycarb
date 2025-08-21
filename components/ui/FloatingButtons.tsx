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
interface FloatingButtonsProps {
  isPlaying: boolean;
  toggleAudio: () => void;
   isHomePage?: boolean;
}

const INITIAL_MESSAGE: Message = {
  text: "You’re welcome to ask your questions in any language you prefer. I’ll do my best to guide you through the Annual Report!",
  isBot: true,
  timestamp: new Date(),
};

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ isPlaying, toggleAudio, isHomePage }) => {
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
  const handleplay = () => {
  
  };

  return (
    <>
      {/* Left: User Button */}
      /

      {/* Right: Chat Button */}
      <AnimatePresence mode="wait">
       <>
        {isHomePage && (
           <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            className={`${styles.floatingbtnsoundplay} ${styles.rightbtn}`}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            onClick={toggleAudio}
          >
            <Image
              src={isPlaying ? "/icons/soundPause.png" : "/icons/soundplay.png"}
              alt={isPlaying ? "Pause" : "Play"}
              width={38}
              height={38}
              className="object-contain h-full"
            />
          </button>
        </motion.div>
        )}
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
        </>
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
