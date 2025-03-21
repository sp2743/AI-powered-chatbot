// src/utils/validators.js
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
    // At least 6 characters
    return password.length >= 6;
  };
  
  export const validateName = (name) => {
    // At least 2 characters
    return name.length >= 2;
  };

  // src/services/chatService.js
// This is a placeholder for a real chat service that would interact with a backend
// For now, it simulates delays and responses

// Example chat bot responses for different scenarios
const botResponses = {
    greeting: [
      "Hello! How are you feeling today?",
      "Hi there! I'm here to support you. How are you doing?",
      "Welcome! How's your day going so far?"
    ],
    feeling_negative: [
      "I'm sorry to hear you're not feeling well. Would you like to talk about what's bothering you?",
      "That sounds difficult. Can you share more about what's causing these feelings?",
      "I understand that can be challenging. What do you think triggered these emotions?"
    ],
    feeling_positive: [
      "I'm glad to hear you're doing well! What's been going well for you?",
      "That's wonderful! What's contributing to those positive feelings?",
      "Great to hear! What are you looking forward to today?"
    ],
    anxiety: [
      "Anxiety can be really challenging. Have you tried any breathing exercises that might help?",
      "When you feel anxious, it might help to focus on things you can control. Would you like some techniques to try?",
      "I hear you're feeling anxious. Sometimes grounding exercises can help. Would you like to try one together?"
    ],
    depression: [
      "Depression can make everything feel more difficult. Have you been able to talk to anyone else about how you're feeling?",
      "I'm sorry you're experiencing this. Small steps can sometimes help - is there one tiny positive thing you could do today?",
      "That sounds really hard. Remember that your feelings are valid, and it's okay to ask for help."
    ],
    stress: [
      "Stress can be overwhelming. What are some things that have helped you relax in the past?",
      "Managing stress is important. Have you been able to take any breaks or time for yourself?",
      "When you're stressed, sometimes it helps to break things down into smaller tasks. Would that be helpful to try?"
    ],
    general: [
      "Thank you for sharing that with me. How can I best support you right now?",
      "I appreciate you telling me more. What would be most helpful for you at this moment?",
      "I'm here to listen. Would you like to continue talking about this, or would another topic feel better?"
    ]
  };
  
  // Detect the message category based on keywords
  const detectCategory = (message) => {
    const text = message.toLowerCase();
    
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return 'greeting';
    }
    
    if (text.includes('sad') || text.includes('unhappy') || text.includes('bad') || text.includes('down') || text.includes('depressed')) {
      return 'feeling_negative';
    }
    
    if (text.includes('happy') || text.includes('good') || text.includes('great') || text.includes('excellent')) {
      return 'feeling_positive';
    }
    
    if (text.includes('anxious') || text.includes('anxiety') || text.includes('worried') || text.includes('nervous')) {
      return 'anxiety';
    }
    
    if (text.includes('depressed') || text.includes('depression') || text.includes('hopeless')) {
      return 'depression';
    }
    
    if (text.includes('stress') || text.includes('stressed') || text.includes('overwhelming')) {
      return 'stress';
    }
    
    return 'general';
  };
  
  // Get a random response from the appropriate category
  const getRandomResponse = (category) => {
    const responses = botResponses[category] || botResponses.general;
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };
  
  const chatService = {
    // Simulate sending a message and getting a response
    sendMessage: (message) => {
      return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
          const category = detectCategory(message);
          const response = getRandomResponse(category);
          
          resolve({
            id: Date.now(),
            text: response,
            sender: 'bot',
            timestamp: new Date()
          });
        }, 1000);
      });
    },
    
    // Get conversation history (simulated)
    getConversationHistory: () => {
      return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
          resolve([
            {
              id: 1,
              text: "Hi there! I'm MindfulChat, your mental health companion. How are you feeling today?",
              sender: 'bot',
              timestamp: new Date(Date.now() - 1000)
            }
          ]);
        }, 500);
      });
    }
  };
  
  export default chatService;