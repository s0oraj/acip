import { motion } from "framer-motion";
import { Binary, Network } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      {/* Einstein-themed SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1400 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Premium Gradients */}
            <linearGradient id="premium-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000"/>
              <stop offset="50%" stopColor="#1e1b4b"/>
              <stop offset="100%" stopColor="#000000"/>
            </linearGradient>
            
            <linearGradient id="neon-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>

            {/* Algorithm Pattern */}
            <pattern id="algo-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <text x="20" y="20" fill="#4f46e5" opacity="0.15" fontSize="12" fontFamily="monospace">while(l < r)</text>
              <text x="100" y="60" fill="#4f46e5" opacity="0.15" fontSize="12" fontFamily="monospace">O(log n)</text>
              <text x="40" y="100" fill="#4f46e5" opacity="0.15" fontSize="12" fontFamily="monospace">quickSort()</text>
              <text x="120" y="140" fill="#4f46e5" opacity="0.15" fontSize="12" fontFamily="monospace">BST.insert()</text>
            </pattern>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
            </filter>
          </defs>

          {/* Base Background */}
          <rect width="1400" height="600" fill="url(#premium-bg)"/>
          <rect width="1400" height="600" fill="url(#algo-pattern)" opacity="0.1"/>

          {/* Binary Tree Visualization */}
          <g transform="translate(700,300)">
            {/* Tree Edges */}
            {[
              "M0,-100 L-200,0",
              "M0,-100 L200,0",
              "M-200,0 L-300,100",
              "M-200,0 L-100,100",
              "M200,0 L100,100",
              "M200,0 L300,100"
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="url(#neon-glow)"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            ))}

            {/* Tree Nodes */}
            {[
              [0, -100],
              [-200, 0], [200, 0],
              [-300, 100], [-100, 100], [100, 100], [300, 100]
            ].map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="15"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              />
            ))}
          </g>

          {/* Floating Algorithm Complexity */}
          <g transform="translate(700,300)">
            {[
              { text: "O(1)", x: -250, y: -150 },
              { text: "O(n)", x: 250, y: -150 },
              { text: "O(log n)", x: -350, y: 50 },
              { text: "O(n log n)", x: 350, y: 50 }
            ].map((item, i) => (
              <motion.text
                key={i}
                x={item.x}
                y={item.y}
                fill="#60a5fa"
                fontSize="16"
                fontFamily="monospace"
                textAnchor="middle"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: i * 0.3 }}
              >
                {item.text}
              </motion.text>
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Binary className="w-12 h-12 text-blue-400 animate-pulse" />
          <Network className="w-12 h-12 text-purple-400 animate-pulse" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Advanced Coding Patterns
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master 220+ coding interview questions organized in 11 essential patterns
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
