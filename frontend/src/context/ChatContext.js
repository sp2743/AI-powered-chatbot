import React, { createContext, useState, useEffect, useContext } from 'react';
import chatService from '../services/chatService';
import { useAuth } from './AuthContext';

// Create context
const ChatContext = createContext();

// Create custom hook to use the chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

// Provider component
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  // Load initial messages
  useEffect(() => {
    if (isAuthenticated) {
      loadInitialMessages();
    }
  }, [isAuthenticated]);

  // Load conversation history
  const loadInitialMessages = async () => {
    setLoading(true);
    try {
      const history = await chatService.getConversationHistory();
      setMessages(history);
    } catch (error) {
      console.error('Failed to load messages:', error);
      // Set a default welcome message if loading fails
      setMessages([
        {
          id: 1,
          text: "Hi there! I'm MindfulChat, your mental health companion. How are you feeling today?",
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Send a message and get a response
  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    // Add user message to state
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Get bot response
    setLoading(true);
    try {
      const botResponse = await chatService.sendMessage(text);
      setMessages(prevMessages => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Failed to get response:', error);
      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble responding right now. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Clear chat history
  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        text: "Hi there! I'm MindfulChat, your mental health companion. How are you feeling today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      loading,
      sendMessage,
      clearChat
    }}>
      {children}
    </ChatContext.Provider>
  );
};