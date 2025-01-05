import { motion } from "framer-motion";
import { Binary, Network, Code2, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BannerBackground } from "./banner/BannerBackground";
import { BinaryTreeSvg } from "./banner/BinaryTreeSvg";
import { BannerPatternVisuals } from "./banner/BannerPatternVisuals";
import { useNavigationStore } from "@/store/navigationStore";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  const navigate = useNavigate();
  const { setCurrentScene } = useNavigationStore();
  const handleEnterGalaxy = () => {
    setCurrentScene('galaxy');
    navigate('/galaxy');
  };

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
          className="text-xl md:text-2xl text-gray-300/90 mb-8 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Master 220 coding interview questions organized in 11 essential patterns
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleEnterGalaxy}
            className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 flex items-center gap-3 group"
          >
            <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            Enter the Roadmap Galaxy
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
