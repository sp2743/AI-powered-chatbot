import React from 'react';
import ChatBubble from './ChatBubble';

const ChatHistory = ({ messages, isTyping, userId }) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatBubble 
          key={message.id}
          message={message}
          isUser={message.sender === userId || message.sender === 'user'}
        />
      ))}
      
      {/* Typing indicator */}
      {isTyping && (
        <div className="flex items-center space-x-2 text-gray-500">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      )}
    </div>
  );
};

export default ChatHistory;