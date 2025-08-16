"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { Avatar } from "../avatar";

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
  timestamp: Date;
}

export function ChatMessage({
  message,
  isBot = false,
  timestamp,
}: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-2 ${
        isBot ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Avatar
        className={`h-8 w-8 flex items-center justify-center ${
          isBot ? "bg-[#005881]" : "bg-[#005881]"
        }`}
      >
        {isBot ? (
          <Bot className="h-4 w-4 text-white" />
        ) : (
          <User className="h-4 w-4 text-white" />
        )}
      </Avatar>
      <div
        className={`flex flex-col  ${
          isBot ? "items-start max-w-[80%]" : "items-end max-w-[75%]"
        }`}
      >
        <div
          className={`rounded-2xl w-fit text-justify ${
            isBot
              ? "bg-[#ffffff] text-[#000] shadow-sm"
              : "bg-[#005881] text-white"
          }`}
        >
          {isBot ? (
            <div className="text-sm text-left px-4 py-2">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-2xl font-bold mb-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-xl font-bold mb-3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-lg font-bold mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal ml-4 mb-2 space-y-1"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="mb-1" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-blue-400 hover:text-blue-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold" {...props} />
                  ),
                  em: ({ node, ...props }) => (
                    <em className="italic" {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className="bg-black/30 rounded px-1 py-0.5"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-primary/50 pl-4 italic my-2"
                      {...props}
                    />
                  ),
                }}
              >
                {message}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="text-sm px-4 text-left py-2 w-fit">{message}</div>
          )}
        </div>
        <span className="text-xs text-muted-foreground mt-1">
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
}
