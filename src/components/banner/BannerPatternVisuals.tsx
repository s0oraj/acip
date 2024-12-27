import { motion } from "framer-motion";

export const BannerPatternVisuals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left - Counting Pattern */}
      <motion.div 
        className="absolute top-10 left-10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <svg width="200" height="100" viewBox="0 0 200 100">
          {[...Array(5)].map((_, i) => (
            <motion.rect
              key={i}
              x={i * 30 + 10}
              y={50 - i * 8}
              width="20"
              height={10 + i * 8}
              fill="none"
              stroke="rgba(96, 165, 250, 0.4)"
              initial={{ height: 0 }}
              animate={{ height: 10 + i * 8 }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Top Right - Monotonic Stack */}
      <motion.div 
        className="absolute top-10 right-10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        <svg width="150" height="100" viewBox="0 0 150 100">
          <motion.path
            d="M10 90 L30 70 L50 80 L70 40 L90 30 L110 20"
            fill="none"
            stroke="rgba(96, 165, 250, 0.4)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Bottom Left - Segment Tree */}
      <motion.div 
        className="absolute bottom-10 left-10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        <svg width="200" height="150" viewBox="0 0 200 150">
          {/* Segment Tree Lines */}
          {[
            "M100,10 L50,50", "M100,10 L150,50",
            "M50,50 L25,90", "M50,50 L75,90",
            "M150,50 L125,90", "M150,50 L175,90"
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="rgba(96, 165, 250, 0.4)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Bottom Right - Graph Pattern */}
      <motion.div 
        className="absolute bottom-10 right-10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        <svg width="150" height="150" viewBox="0 0 150 150">
          {/* Nodes */}
          {[
            [75, 25], [25, 75], [125, 75], [75, 125]
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="rgba(96, 165, 250, 0.4)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
          {/* Edges */}
          {[
            "M75,25 L25,75", "M75,25 L125,75",
            "M25,75 L75,125", "M125,75 L75,125"
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="rgba(96, 165, 250, 0.4)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Center Left - Linear Sort */}
      <motion.div 
        className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        <svg width="100" height="200" viewBox="0 0 100 200">
          {[...Array(8)].map((_, i) => (
            <motion.rect
              key={i}
              x={10}
              y={i * 25 + 10}
              width={80 - i * 10}
              height="15"
              fill="none"
              stroke="rgba(96, 165, 250, 0.4)"
              initial={{ width: 0 }}
              animate={{ width: 80 - i * 10 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};
