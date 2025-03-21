import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FeatureCard from '../components/common/FeatureCard';
import Button from '../components/common/Button';

const HomePage = ({ navigateTo }) => {
  const handleGetStarted = () => {
    navigateTo('login');
  };

  const handleLoginClick = () => {
    navigateTo('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col">
      <Navbar onLoginClick={handleLoginClick} onHomeClick={() => {}} isLoggedIn={false} />

      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Companion for <span className="text-indigo-600">Mental Wellbeing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Connect with MindfulChat, your personal AI assistant designed to support your 
            mental health journey through compassionate conversations.
          </p>
          <Button 
            onClick={handleGetStarted} 
            variant="primary"
            size="large"
          >
            Get Started
          </Button>
          <div className="mt-8 text-gray-500">
            No registration required to try a demo chat
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How MindfulChat Helps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🧠" 
              title="24/7 Support" 
              description="Access supportive conversations whenever you need them, day or night." 
            />
            <FeatureCard 
              icon="🔒" 
              title="Private & Secure" 
              description="Your conversations are confidential and protected with state-of-the-art security." 
            />
            <FeatureCard 
              icon="📈" 
              title="Track Progress" 
              description="Monitor your mental wellness journey with insights and gentle guidance." 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;