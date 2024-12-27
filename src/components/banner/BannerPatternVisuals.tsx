import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const patterns = [
  {
    name: "Binary Search",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M3 12h18M12 3v18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
    description: "O(log n)",
    color: "from-blue-400/20 to-blue-600/20"
  },
  {
    name: "Two Pointers",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M4 4L20 20M4 20L20 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
    description: "O(n)",
    color: "from-purple-400/20 to-purple-600/20"
  },
  {
    name: "Tree Patterns",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <motion.circle cx="12" cy="5" r="2" fill="currentColor" />
        <motion.circle cx="6" cy="12" r="2" fill="currentColor" />
        <motion.circle cx="18" cy="12" r="2" fill="currentColor" />
        <motion.path
          d="M12 7L6 10M12 7L18 10"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
    description: "O(n)",
    color: "from-emerald-400/20 to-emerald-600/20"
  },
  {
    name: "Graph Algorithms",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <motion.circle cx="5" cy="12" r="2" fill="currentColor" />
        <motion.circle cx="19" cy="12" r="2" fill="currentColor" />
        <motion.circle cx="12" cy="5" r="2" fill="currentColor" />
        <motion.circle cx="12" cy="19" r="2" fill="currentColor" />
        <motion.path
          d="M5 12h14M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
    description: "O(V + E)",
    color: "from-pink-400/20 to-pink-600/20"
  },
  {
    name: "Dynamic Programming",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M4 4h16v16H4z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M4 12h16M12 4v16"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </svg>
    ),
    description: "O(n²)",
    color: "from-orange-400/20 to-orange-600/20"
  }
];

export const BannerPatternVisuals = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto h-full place-content-center p-8">
        {patterns.map((pattern, i) => (
          <motion.div
            key={pattern.name}
            className={`
              relative p-6 rounded-xl
              backdrop-blur-xl backdrop-brightness-125
              border border-white/10
              bg-gradient-to-br ${pattern.color}
              shadow-lg
            `}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: i * 0.1
              }
            } : {}}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/5"
              initial={{ scale: 0 }}
              animate={inView ? {
                scale: [1, 1.2, 1],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              } : {}}
            />
            
            <div className="relative flex flex-col items-center gap-4">
              <div className="text-white/80">
                {pattern.icon}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white/90 mb-1">
                  {pattern.name}
                </h3>
                <p className="text-sm text-white/60 font-mono">
                  {pattern.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
