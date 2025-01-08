import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, LogIn, X } from 'lucide-react';

// Sidebar Component with space theme
const Sidebar = ({ isOpen, onClose }) => {
  const patterns = [
    { name: 'Two Pointers', count: 20 },
    { name: 'Fast & Slow Pointers', count: 20 },
    { name: 'Sliding Window', count: 20 },
    // Add other patterns...
  ];

  return (
    <>
      {/* Backdrop with blur effect */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Space-themed Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-72 z-50"
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="h-full bg-gradient-to-b from-indigo-950/95 to-black/95 backdrop-blur-md border-r border-indigo-500/10">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">Patterns</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-2">
              {patterns.map((pattern) => (
                <motion.div
                  key={pattern.name}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-indigo-500/10 transition-colors"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {pattern.name}
                  </span>
                  <span className="text-sm text-indigo-400">{pattern.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Auth Button with space theme
const AuthButton = () => {
  const handleGoogleLogin = async () => {
    // TODO: Implement Google OAuth login
    console.log('Initiating Google login...');
  };
  
  return (
    <button
      onClick={handleGoogleLogin}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 backdrop-blur-sm border border-indigo-500/20 transition-all duration-200 group"
    >
      <div className="flex items-center gap-2">
        <LogIn className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
        <span className="text-gray-200 group-hover:text-white">Sign In</span>
      </div>
    </button>
  );
};

// Minimal Navigation Bar
export const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 backdrop-blur-sm border border-indigo-500/20 transition-all duration-200"
          >
            <Menu className="w-6 h-6 text-indigo-400" />
          </button>

          <AuthButton />
        </div>
      </div>
      
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default NavigationBar;