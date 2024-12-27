import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      {/* Neural Network Visualization */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1400 600">
          <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Neural Network Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${200 + i * 50},100 Q${700},${300 + Math.sin(i) * 100} ${1200 - i * 50},500`}
              stroke="url(#glow)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
          
          {/* Nodes */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={300 + (i % 5) * 200}
              cy={200 + Math.floor(i / 5) * 150}
              r="8"
              fill="#60a5fa"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="inline-block mb-6 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl opacity-30 animate-pulse" />
          <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl shadow-lg">
            <Brain className="w-14 h-14 text-white animate-bounce-slow" />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Advanced Coding Interview Patterns
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master 220 coding interview questions organized in 11 essential patterns
        </motion.p>
      </div>
    </div>
  );
};
