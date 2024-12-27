import { motion } from "framer-motion";
import { Binary, Network, Code2, Braces, Terminal } from "lucide-react";

export const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Einstein-themed SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1400 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="premium-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a"/>
              <stop offset="50%" stopColor="#1e1b4b"/>
              <stop offset="100%" stopColor="#0f172a"/>
            </linearGradient>
            
            <linearGradient id="neon-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0"/>
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1"/>
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
            </linearGradient>

            <pattern id="algo-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <text x="20" y="20" fill="#818cf8" opacity="0.15" fontSize="12" fontFamily="monospace">while(l &lt; r)</text>
              <text x="100" y="60" fill="#818cf8" opacity="0.15" fontSize="12" fontFamily="monospace">O(log n)</text>
              <text x="40" y="100" fill="#818cf8" opacity="0.15" fontSize="12" fontFamily="monospace">quickSort()</text>
              <text x="120" y="140" fill="#818cf8" opacity="0.15" fontSize="12" fontFamily="monospace">BST.insert()</text>
            </pattern>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>

          <rect width="1400" height="600" fill="url(#premium-bg)"/>
          <rect width="1400" height="600" fill="url(#algo-pattern)" opacity="0.1"/>

          <g transform="translate(700,300)">
            {/* Tree Edges with enhanced glow */}
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
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2, delay: i * 0.3, ease: "easeInOut" }}
              />
            ))}

            {/* Enhanced Tree Nodes */}
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
                fill="rgba(129, 140, 248, 0.1)"
                stroke="#818cf8"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.3, ease: "backOut" }}
              />
            ))}
          </g>

          {/* Enhanced Floating Algorithm Complexity */}
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
                fill="#818cf8"
                fontSize="16"
                fontFamily="monospace"
                textAnchor="middle"
                filter="url(#glow)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 1.5, delay: i * 0.4, ease: "easeOut" }}
              >
                {item.text}
              </motion.text>
            ))}
          </g>
        </svg>
      </div>

      {/* Enhanced Content Section */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="flex items-center gap-6 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <Binary className="w-12 h-12 text-indigo-400 animate-pulse" />
            <div className="absolute inset-0 bg-indigo-400/20 blur-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <Network className="w-12 h-12 text-purple-400 animate-pulse" />
            <div className="absolute inset-0 bg-purple-400/20 blur-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <Code2 className="w-12 h-12 text-blue-400 animate-pulse" />
            <div className="absolute inset-0 bg-blue-400/20 blur-xl" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced Coding Patterns
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300/90 mb-12 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Master 220+ coding interview questions organized in 11 essential patterns
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold shadow-lg shadow-gray-800/30 hover:bg-gray-700 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
