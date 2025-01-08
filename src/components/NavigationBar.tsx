import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, LogIn, X } from 'lucide-react';
import { useNavigationStore } from '@/store/navigationStore';

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => {
  const patterns = [
    { name: 'Two Pointers', count: 20 },
    { name: 'Fast & Slow Pointers', count: 20 },
    { name: 'Sliding Window', count: 20 },
    // Add other patterns...
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 shadow-xl"
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Patterns</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            {patterns.map((pattern) => (
              <div
                key={pattern.name}
                className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-lg cursor-pointer"
              >
                <span>{pattern.name}</span>
                <span className="text-sm text-gray-400">{pattern.count}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Auth Button Component
const AuthButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleGoogleLogin = async () => {
    // TODO: Implement Google OAuth login
    // This will need to be connected to your Spring Boot backend
    console.log('Initiating Google login...');
  };
  
  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <LogIn className="w-5 h-5" />
      <span>{isAuthenticated ? 'Profile' : 'Sign In'}</span>
    </button>
  );
};

// Navigation Bar Component
export const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
              <span className="text-white font-bold">Interview Patterns</span>
            </div>
            
            <AuthButton />
          </div>
        </div>
      </div>
      
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default NavigationBar;