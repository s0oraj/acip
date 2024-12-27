import { motion } from "framer-motion";
import { Binary, Network, Code2 } from 'lucide-react';
import { BannerBackground } from "./banner/BannerBackground";
import { BinaryTreeSvg } from "./banner/BinaryTreeSvg";
import { BannerPatternVisuals } from "./banner/BannerPatternVisuals";

export const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-black">
      <div className="absolute inset-0 pointer-events-none">
        <BannerBackground />
        <BannerPatternVisuals />
      </div>
      
      <BinaryTreeSvg />
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="flex items-center gap-6 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <Binary className="w-12 h-12 text-blue-400 animate-pulse" />
            <div className="absolute inset-0 bg-blue-400/20 blur-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <Network className="w-12 h-12 text-purple-400 animate-pulse" />
            <div className="absolute inset-0 bg-purple-400/20 blur-xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="relative">
            <Code2 className="w-12 h-12 text-indigo-400 animate-pulse" />
            <div className="absolute inset-0 bg-indigo-400/20 blur-xl" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-white bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced Coding Interview Patterns
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-transparent mb-12 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Master 220 coding interview questions organized in 11 essential patterns
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
