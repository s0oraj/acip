import { motion } from "framer-motion";

export const BinaryTreeSvg = () => {
  return (
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
      
      {/* Enhanced glow effect */}
      <filter id="enhanced-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      
      {/* Binary Tree Visualization with enhanced glow */}
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
    </svg>
  );
};
