
'use client'
import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import ChatMessage from "./ChatMessage";

export default function Screen({ className }) {
  const { messages } = useContext(ChatContext);

  return (
    <div className={`${className} relative bg-black overflow-auto rounded-3xl`}>
      <div className="text-white text-xl p-4">
        {messages.length === 0 ? (
          <p>ExcelAi: welcome to ExcelAi...</p>
        ) : (
          messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isUser={message.isUser} />
          ))
        )}
      </div>
    </div>
  );
}
