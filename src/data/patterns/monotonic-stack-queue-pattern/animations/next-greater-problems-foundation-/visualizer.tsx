import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup, useAnimationControls } from 'framer-motion';
import { patterns } from './data';

const NextGreaterVisualizer = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    let timer;
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

  const getStack = () => {
    const curr = patterns[activePattern].data.slice(0, step);
    return curr.reduce((stack, num) => {
      while (stack.length && stack[stack.length - 1] < num) {
        stack.pop();
      }
      stack.push(num);
      return stack;
    }, []);
  };

  const getNextGreater = () => {
    const curr = patterns[activePattern].data.slice(0, step);
    return curr.map((num, i) => {
      const next = curr.slice(i + 1).find(x => x > num);
      return next || -1;
    });
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
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const stackItemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { 
      x: 100, 
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50/30 to-purple-50/30 min-h-screen">
      <LayoutGroup>
        {/* Pattern Selection Tabs */}
        <motion.div 
          className="flex space-x-2 mb-6 overflow-x-auto pb-2"
          layout
        >
          <AnimatePresence mode="wait">
            {Object.entries(patterns).map(([key, { title, desc, color }]) => (
              <motion.button
                key={key}
                layoutId={`tab-${key}`}
                onClick={() => {
                  setActivePattern(key);
                  setStep(0);
                  setIsPlaying(false);
                }}
                className={`px-4 py-2 rounded-lg transition-all flex-shrink-0 backdrop-blur-md ${
                  activePattern === key 
                    ? 'bg-blue-500/90 text-white shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-sm font-medium">{title}</div>
                <div className="text-xs opacity-75">{desc}</div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          {/* Array Visualization */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-lg bg-white/30 p-5 rounded-xl shadow-lg border border-white/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(191, 219, 254, 0.2), rgba(233, 213, 255, 0.2))",
                  "linear-gradient(to bottom right, rgba(233, 213, 255, 0.2), rgba(191, 219, 254, 0.2))"
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
            <h3 className="text-lg font-semibold mb-3 relative">Input Array</h3>
            <div className="flex flex-wrap gap-2 mb-4 relative">
              <AnimatePresence mode="wait">
                {patterns[activePattern].data.map((val, idx) => (
                  <motion.div
                    key={`${idx}-${val}`}
                    variants={itemVariants}
                    className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg transform transition-all duration-300
                      ${idx < step ? 'bg-blue-500/80 text-white shadow-lg' : 'bg-white/50'}`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: 10,
                      rotateY: 10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {val}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Stack Visualization */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-lg bg-white/30 p-5 rounded-xl shadow-lg border border-white/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-blue-200/20"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(233, 213, 255, 0.2), rgba(191, 219, 254, 0.2))",
                  "linear-gradient(to bottom right, rgba(191, 219, 254, 0.2), rgba(233, 213, 255, 0.2))"
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
            <h3 className="text-lg font-semibold mb-3 relative">Monotonic Stack</h3>
            <div className="flex flex-col-reverse gap-2 relative">
              <AnimatePresence mode="wait">
                {getStack().map((val, idx) => (
                  <motion.div
                    key={`stack-${idx}-${val}`}
                    variants={stackItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full h-12 flex items-center justify-center rounded-lg bg-purple-500/80 text-white font-mono text-lg shadow-lg"
                    whileHover={{
                      scale: 1.02,
                      rotateX: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {val}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Result Visualization */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-lg bg-white/30 p-5 rounded-xl shadow-lg border border-white/50 mb-4 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-blue-200/20"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(187, 247, 208, 0.2), rgba(191, 219, 254, 0.2))",
                "linear-gradient(to bottom right, rgba(191, 219, 254, 0.2), rgba(187, 247, 208, 0.2))"
              ],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
          <h3 className="text-lg font-semibold mb-3 relative">Next Greater Elements</h3>
          <div className="flex flex-wrap gap-2 relative">
            <AnimatePresence mode="wait">
              {getNextGreater().map((val, idx) => (
                <motion.div
                  key={`result-${idx}-${val}`}
                  variants={itemVariants}
                  className="min-w-[3rem] px-3 h-12 flex items-center justify-center rounded-lg bg-green-500/80 text-white font-mono text-lg shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotateX: 10,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {val}
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
                ? "stack = []" 
                : `# Process ${patterns[activePattern].data[step-1]}
while stack and stack[-1] < ${patterns[activePattern].data[step-1]}:
    result[stack.pop()] = ${patterns[activePattern].data[step-1]}
stack.append(${patterns[activePattern].data[step-1]})`}
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

export default NextGreaterVisualizer;
