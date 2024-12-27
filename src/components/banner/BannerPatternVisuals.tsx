import { motion } from "framer-motion";

const patterns = [
  { name: "Counting", icon: "📊", x: "-600", y: "-200" },
  { name: "Monotonic", icon: "📈", x: "600", y: "-200" },
  { name: "Simulation", icon: "🎮", x: "-500", y: "200" },
  { name: "Linear Sorting", icon: "📋", x: "500", y: "200" },
  { name: "Meet in Middle", icon: "🤝", x: "-400", y: "-150" },
  { name: "Mo's Algorithm", icon: "🔄", x: "400", y: "-150" },
  { name: "Serialize", icon: "💾", x: "-300", y: "150" },
  { name: "Clone", icon: "🔄", x: "300", y: "150" },
  { name: "Articulation", icon: "🔗", x: "-200", y: "-100" },
  { name: "Segment Tree", icon: "🌳", x: "200", y: "-100" },
  { name: "Binary Tree", icon: "🌲", x: "0", y: "-250" },
];

export const BannerPatternVisuals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {patterns.map((pattern, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `calc(50% + ${pattern.x}px)`,
            top: `calc(50% + ${pattern.y}px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl opacity-20">{pattern.icon}</span>
            <span className="text-xs text-indigo-400/20 font-mono">{pattern.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
