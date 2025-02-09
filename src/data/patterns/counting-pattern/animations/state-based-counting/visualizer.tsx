
// visualizer.tsx
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
    const curr = Array.from(patterns[activePattern].data).slice(0, step);
    return curr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <LayoutGroup>
        {/* Pattern Selection Tabs */}
        <div className="flex gap-2 mb-8">
          {Object.entries(patterns).map(([key, { title, desc, color, leetcode, codeforces }]) => (
            <motion.button
              key={key}
              layoutId={`tab-${key}`}
              onClick={() => {
                setActivePattern(key);
                setStep(0);
                setIsPlaying(false);
              }}
              className={`relative px-6 py-3 rounded-lg text-left transition-all ${
                activePattern === key 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-white hover:bg-white/90'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-sm font-medium">{title}</div>
              <div className="text-xs opacity-80">{desc}</div>
              {leetcode && (
                <a 
                  href={`https://leetcode.com/problems/${leetcode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1 right-1 text-xs opacity-70 hover:opacity-100"
                >
                  LC #{leetcode}
                </a>
              )}
              {codeforces && (
                <a 
                  href={`https://codeforces.com/problemset/problem/${codeforces}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1 right-1 text-xs opacity-70 hover:opacity-100"
                >
                  CF #{codeforces}
                </a>
              )}
            </motion.button>
          ))}
        </div>

        {/* Input Sequence */}
        <motion.div 
          layout
          className="bg-white p-6 rounded-xl shadow-lg mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">Input Sequence</h3>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence mode="wait">
              {Array.from(patterns[activePattern].data).map((val, idx) => (
                <motion.div
                  key={`${idx}-${val}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg ${
                    idx < step ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  {val}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* State Counter */}
        <motion.div 
          layout
          className="bg-white p-6 rounded-xl shadow-lg mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">State Counter</h3>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence mode="wait">
              {Object.entries(getCounter()).map(([key, value]) => (
                <motion.div
                  key={`counter-${key}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="px-4 h-12 flex items-center justify-center rounded-lg bg-green-500 text-white font-mono text-lg"
                >
                  {key}: {value}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Code Display */}
        <motion.div 
          layout
          className="bg-gray-900 p-4 rounded-lg mb-6"
        >
          <motion.pre 
            className="text-sm text-white font-mono"
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
        <motion.div layout className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setStep(0);
              setIsPlaying(false);
            }}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isPlaying ? 'bg-gray-100 hover:bg-gray-200' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setStep(s => Math.min(s + 1, patterns[activePattern].data.length - 1))}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default StateBasedCountingVisualizer;
