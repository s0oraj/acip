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
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <BannerBackground />
      <BinaryTreeSvg />
      <BannerPatternVisuals />

      <div className="relative z-10 text-center translate-y-[15%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center space-x-12 mb-12"
        >
          <Binary className="w-16 h-16 text-purple-500" />
          <Network className="w-16 h-16 text-blue-500" />
          <Code2 className="w-16 h-16 text-green-500" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold text-white mb-6"
        >
          Advanced Coding Interview Patterns
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-12"
        >
          Master 220 coding interview questions organized in 11 essential patterns
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
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

