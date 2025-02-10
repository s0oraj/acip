import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup, useAnimationControls } from 'framer-motion';
import { patterns } from './data';

const StateBasedCountingVisualizer = () => {
  const [activePattern, setActivePattern] = useState('stateTransition');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < patterns[activePattern].data.length) {
      timer = setTimeout(() => {
        setStep(s => s + 1);
        controls.start({
          scale: [1, 1.2, 1],
          transition: { duration: 0.3 }
        });
      }, 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const getCounter = () => {
    const curr = patterns[activePattern].data.slice(0, step);
    return curr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const barVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (height: number) => ({ 
      scaleY: 1, 
      opacity: 1,
      height: `${height * 20}px`,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50/30 to-purple-50/30 min-h-screen">
      <LayoutGroup>
        {/* Pattern Selection Tabs */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          layout
        >
          {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
            <motion.button
              key={key}
              onClick={() => {
                setActivePattern(key);
                setStep(0);
                setIsPlaying(false);
              }}
              className={`p-4 rounded-xl transition-all ${
                activePattern === key 
                  ? 'bg-white shadow-lg scale-105' 
                  : 'bg-gray-50 hover:bg-white hover:shadow'
              }`}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                  {icon === 'transition' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H4a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M8 3v18m0 0h10a2 2 0 0 0 2-2v-4M8 21H4a2 2 0 0 1-2-2v-4"/>
                    </svg>
                  ) : icon === 'cycle' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                      <path d="M21 3v5h-5"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H4a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M8 3v18m0 0h10a2 2 0 0 0 2-2v-4M8 21H4a2 2 0 0 1-2-2v-4"/>
                    </svg>
                  )}
                </div>
                <span className="font-semibold">{title}</span>
              </div>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Array Visualization */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-lg bg-white/30 p-5 rounded-xl shadow-lg border border-white/50 relative overflow-hidden"
        >
          <h3 className="text-lg font-semibold mb-3 relative">Input Sequence</h3>
          <div className="flex flex-wrap gap-2 mb-4 relative">
            <AnimatePresence mode="wait">
              {patterns[activePattern].data.map((val, idx) => (
                <motion.div
                  key={`${idx}-${val}`}
                  variants={itemVariants}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg transform transition-all duration-300 ${
                    idx < step ? 'bg-blue-500/80 text-white shadow-lg' : 'bg-white/50'
                  }`}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {val}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 3D Bar Chart Visualization */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-lg bg-white/30 p-5 rounded-xl shadow-lg border border-white/50 mb-4 relative overflow-hidden"
        >
          <h3 className="text-lg font-semibold mb-3 relative">State Count Visualization</h3>
          <div className="flex items-end gap-4 h-48 relative">
            <AnimatePresence mode="wait">
              {Object.entries(getCounter()).map(([key, value]) => (
                <motion.div
                  key={`bar-${key}`}
                  variants={barVariants}
                  custom={value}
                  className="w-12 bg-blue-500/80 rounded-t-lg relative"
                  whileHover={{
                    scaleY: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 text-center text-white font-mono text-sm">
                    {key}: {value}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Code Display */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-md bg-gray-900/90 p-3 rounded-lg mb-4 shadow-xl"
        >
          <motion.pre 
            className="text-sm text-white overflow-x-auto"
            animate={controls}
          >
            <code>
              {step === 0 
                ? "const stateCounter = {};" 
                : `stateCounter['${patterns[activePattern].data[step - 1]}']++;`}
            </code>
          </motion.pre>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="flex justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: ChevronLeft, action: () => {
              const patternKeys = Object.keys(patterns);
              const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
              setActivePattern(patternKeys[prevIndex]);
              setStep(0);
              setIsPlaying(false);
            }},
            { icon: isPlaying ? Pause : Play, action: () => setIsPlaying(!isPlaying) },
            { icon: RotateCcw, action: () => {
              setStep(0);
              setIsPlaying(false);
            }},
            { icon: ChevronRight, action: () => {
              const patternKeys = Object.keys(patterns);
              const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
              setActivePattern(patternKeys[nextIndex]);
              setStep(0);
              setIsPlaying(false);
            }}
          ].map((button, index) => (
            <motion.button
              key={index}
              onClick={button.action}
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                button.icon === (isPlaying ? Pause : Play)
                  ? 'bg-blue-500/90 hover:bg-blue-600/90 text-white'
                  : 'bg-white/40 hover:bg-white/60 text-gray-700'
              } shadow-lg`}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <button.icon className="w-5 h-5" />
            </motion.button>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default StateBasedCountingVisualizer;
