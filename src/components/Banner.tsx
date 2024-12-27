import { motion } from "framer-motion";
import { Binary, Network, Code2 } from 'lucide-react';
import { BannerBackground } from "./banner/BannerBackground";
import { BinaryTreeSvg } from "./banner/BinaryTreeSvg";
import { BannerPatternVisuals } from "./banner/BannerPatternVisuals";

export const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-black">
      {/* Algo Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <BannerBackground />
        <BannerPatternVisuals />
      </div>
      
      {/* Binary Tree SVG */}
      <BinaryTreeSvg />

      {/* Content Section */}
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
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced Coding Interview Patterns
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300/90 mb-12 max-w-3xl leading-relaxed"
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
