"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, HelpCircle, Bot } from "lucide-react";
import { Avatar } from "../avatar";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { Input } from "../input";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { FAQPanel } from "./FAQPanel";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatWindowProps {
  onClose: () => void;
  isExpanded: boolean;
  isOpen: boolean;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sessionId: string;
}

export function ChatWindow({
  onClose,
  isExpanded,
  isOpen,
  messages,
  setMessages,
  sessionId,
}: ChatWindowProps) {
  const [input, setInput] = useState("");
  const [showFAQ, setShowFAQ] = useState(false);
  const [isBotLoading, setIsBotLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotLoading]);

  const handleSend = async () => {
    if (!input.trim() || isBotLoading) return;

    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsBotLoading(true);

    try {
      const response = await fetch(
        "https://haycarbapp-ehgfcaesdcc6dscz.southeastasia-01.azurewebsites.net/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionID: sessionId,
            message: userMessage.text,
            Language: "English",
          }),
        }
      );

      const data = await response.json();

      const botMessage: Message = {
        text: data.response || "Sorry, I didn't understand that. 🍵",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        text: "Oops! Something went wrong while contacting the server. 🌐",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chat API error:", error);
    } finally {
      setIsBotLoading(false);
    }
  };

  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      initial="initial"
      animate={isOpen ? "animate" : "exit"}
      exit="exit"
      variants={containerVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bg-[#f8f8f8] rounded-3xl shadow-lg overflow-hidden border border-[#e8e1d7] flex flex-col bottom-4 right-4 z-50"
      style={{
        width: isExpanded ? "calc(100% - 2rem)" : "380px",
        height: isExpanded
          ? "calc(100vh - 2rem)"
          : "min(600px, calc(90vh - 2rem))",
      }}
    >
      <div className="flex items-center gap-3 bg-white p-4 shadow-sm">
        <Bot className="h-6 w-6 text-[#005881]" />

        <div className="flex flex-col items-start">
          <h3 className="font-semibold leading-tight text-[#005881]">
            Haycarb Assistant
          </h3>
          <p className="text-xs text-gray-500">Online</p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="ml-auto rounded-xl text-[#525252] hover:bg-red-500 hover:text-white/80"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              message={msg.text}
              isBot={msg.isBot}
              timestamp={msg.timestamp}
            />
          ))}

          {isBotLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3 flex-row"
            >
              <Avatar className="h-8 w-8 flex items-center justify-center bg-[#005881]">
                <Bot className="h-4 w-4 text-white" />
              </Avatar>
              <div className="flex flex-col max-w-[80%] items-start">
                <div className="rounded-2xl px-4 py-2 bg-[#f5f1eb] text-[#005881]">
                  <TypingIndicator />
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-[#e8e1d7] bg-white">
        <div className="flex gap-2">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowFAQ(!showFAQ)}
            className="text-[#40ad5a] hover:text-[#40ad5a]/80 rounded-xl"
          >
            <HelpCircle className="h-5 w-5" />
          </Button> */}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 rounded-xl bg-white text-black"
          />
          <Button
            onClick={handleSend}
            className="bg-[#005881] hover:bg-[#005881]/90 rounded-xl"
            disabled={isBotLoading}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showFAQ && (
          <FAQPanel
            onQuestionClick={(q) => {
              setInput(q);
              setShowFAQ(false);
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
