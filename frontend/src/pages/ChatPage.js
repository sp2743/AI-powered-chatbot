// src/pages/ChatPage.js (Enhanced with Context Integration)
import React, { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import Navbar from '../components/layout/Navbar';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import Button from '../components/common/Button';

const ChatPage = ({ navigateTo }) => {
  const { user, logout } = useAuth();
  const { messages, loading, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLogout = () => {
    logout();
    navigateTo('home');
  };

  const handleSendMessage = (text) => {
    if (!text.trim() || loading) return;
    sendMessage(text);
  };

  const handleNewChat = () => {
    clearChat();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar 
        onLoginClick={() => {}} 
        onHomeClick={handleLogout} 
        isLoggedIn={true} 
      />

      {/* Chat container */}
      <div className="flex-grow overflow-hidden flex flex-col p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-md flex flex-col h-full">
          {/* Chat header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Your Conversation</h2>
              <p className="text-sm text-gray-500">
                Welcome, {user?.name || 'User'}
              </p>
            </div>
            <Button 
              onClick={handleNewChat}
              variant="secondary"
              size="small"
            >
              New Chat
            </Button>
          </div>
          
          {/* Messages area */}
          <div className="flex-grow overflow-y-auto p-4 chat-scrollbar">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatBubble 
                  key={message.id}
                  message={message}
                  isUser={message.sender === 'user'}
                />
              ))}
              
              {/* Typing indicator */}
              {loading && (
                <div className="flex items-center space-x-2 p-2 bg-gray-100 w-20 rounded-lg">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Message input */}
          <ChatInput onSendMessage={handleSendMessage} isDisabled={loading} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;