import { motion } from "framer-motion";
import { Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const SpaceButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        variant="outline"
        size="lg"
        onClick={onClick}
        className="relative overflow-hidden bg-transparent border-2 border-purple-500 text-purple-100 hover:text-white font-semibold text-lg px-10 py-7 rounded-full transition-all duration-300 flex items-center gap-3 w-[320px]"
      >
        {/* Space Background with Planet */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-black via-slate-900 to-black">
            {/* Planet */}
            <motion.div
              className="absolute left-[80px] top-[40px]"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: 'center center' }}
            >
              <div className="w-[50px] h-[50px] rounded-full bg-indigo-500/25" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-3 border-2 border-purple-400 rounded-full -rotate-15" />
            </motion.div>

            {/* UFO */}
            <motion.div
              className="absolute left-[240px] top-[10px]"
              animate={{ y: [-2, 2, -2], x: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-4 h-1.5 bg-indigo-500/90 rounded-full" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400" />
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-200/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Stars */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${40 + Math.random() * 220}px`,
                  top: `${10 + Math.random() * 60}px`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Button Content */}
        <motion.div
          className="relative flex items-center gap-2 ml-auto"
          whileHover={{ x: 5 }}
        >
          <motion.div whileHover={{ rotate: 15 }} className="relative">
            <Rocket className="w-6 h-6 relative z-10" />
            <motion.div
              className="absolute inset-0 blur-lg"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>
          Enter the Roadmap Galaxy
        </motion.div>
      </Button>
    </motion.div>
  );
};