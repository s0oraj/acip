import { motion } from "framer-motion";
import { Menu, LogIn, X } from 'lucide-react';
import { useState } from "react";

const Sidebar = ({ isOpen, onClose, userPhoto }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
      
      <motion.div
        className="fixed inset-y-0 right-0 w-72 bg-black/90 border-l border-indigo-500/20 backdrop-blur-sm z-50"
        initial={{ x: 288 }}
        animate={{ x: isOpen ? 0 : 288 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              {userPhoto ? (
                <img 
                  src={userPhoto} 
                  alt="User profile" 
                  className="w-8 h-8 rounded-full border border-indigo-500/20"
                />
              ) : null}
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-indigo-500/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
          {!userPhoto && (
            <motion.button
              className="w-full flex items-center justify-center gap-2 p-3 mb-8 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogIn className="w-5 h-5 text-indigo-400 group-hover:text-blue-400" />
              <span className="text-gray-300 group-hover:text-white">Sign In with Google</span>
            </motion.button>
          )}
          <div className="space-y-2">
            <div className="p-3 hover:bg-indigo-500/10 rounded-lg cursor-pointer transition-colors">
              <div className="text-gray-300">Two Pointers</div>
            </div>
            <div className="p-3 hover:bg-indigo-500/10 rounded-lg cursor-pointer transition-colors">
              <div className="text-gray-300">Fast & Slow Pointers</div>
            </div>
            {/* Add more patterns... */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const Navigation = ({ userPhoto }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <>
      <div className="absolute top-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-end gap-3">
            {userPhoto && (
              <img 
                src={userPhoto} 
                alt="User profile"
                className="w-8 h-8 rounded-full border border-indigo-500/20" 
              />
            )}
            <motion.button
              className="p-2 rounded-lg hover:bg-indigo-500/10 transition-colors group"
              onClick={() => setIsSidebarOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6 text-indigo-400 group-hover:text-blue-400" />
            </motion.button>
          </div>
        </div>
      </div>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        userPhoto={userPhoto}
      />
    </>
  );
};

export default Navigation;