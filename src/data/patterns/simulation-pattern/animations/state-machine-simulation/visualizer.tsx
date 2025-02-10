import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup, useAnimationControls } from 'framer-motion';
import { patterns, stateMachineAnimation } from './data';

const StateMachineVisualizer = () => {
  const [activePattern, setActivePattern] = useState('commandProcessor');
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

  const getCurrentState = () => {
    return patterns[activePattern].data[step];
  };

  const getHistory = () => {
    return patterns[activePattern].data.slice(0, step + 1);
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

  const stateCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
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
                  {icon === 'command' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                  ) : icon === 'vending' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5v14"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    </svg>
                  )}
                </div>
                <span className="font-semibold">{title}</span>
              </div>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* State Transition Diagram */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-lg bg-white/30 p-5 rounded-xl shadow-lg border border-white/50 relative overflow-hidden"
        >
          <h3 className="text-lg font-semibold mb-3 relative">State Transition Diagram</h3>
          <div className="flex flex-wrap gap-4 mb-4 relative">
            <AnimatePresence mode="wait">
              {getHistory().map((state, idx) => (
                <motion.div
                  key={`state-${idx}`}
                  variants={stateCircleVariants}
                  className={`w-24 h-24 flex items-center justify-center rounded-full font-mono text-lg transform transition-all duration-300 ${
                    idx === step ? 'bg-blue-500/80 text-white shadow-lg' : 'bg-white/50'
                  }`}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {state}
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
                ? "const history = ['Home'];" 
                : `history.push('${patterns[activePattern].data[step]}');`}
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

export default StateMachineVisualizer;
