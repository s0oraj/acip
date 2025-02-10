// src/data/patterns/simulation-pattern/animations/grid-movement-simulation/visualizer.tsx
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { gridPatterns, gridMovementAnimation } from './data';

const GridMovementVisualizer = () => {
  const [activePattern, setActivePattern] = useState('basicRobot');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const currentPosition = calculatePosition(gridPatterns[activePattern].data.slice(0, step + 1));
  const currentDirection = gridMovementAnimation.steps
    .find(s => s.title === gridPatterns[activePattern].title)?.phases[step]?.counter.dir || 0;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < gridPatterns[activePattern].data.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const generateGrid = () => {
    const grid = [];
    for (let i = -2; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        const isRobot = i === currentPosition[0] && j === currentPosition[1];
        grid.push(
          <motion.div
            key={`${i},${j}`}
            className={`w-12 h-12 border flex items-center justify-center
              ${isRobot ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isRobot ? '🤖' : `${i},${j}`}
          </motion.div>
        );
      }
    }
    return grid;
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Pattern Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(gridPatterns).map(([key, { title, desc, color }]) => (
          <motion.button
            key={key}
            onClick={() => { setActivePattern(key); setStep(0); }}
            className={`p-4 rounded-xl ${activePattern === key ? 'bg-white shadow-lg' : 'bg-gray-100'}`}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ color }} className="text-lg font-semibold">{title}</div>
            <div className="text-sm text-gray-600">{desc}</div>
          </motion.button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-5 gap-1 mb-6">
        {generateGrid()}
      </div>

      {/* Direction Indicator */}
      <motion.div 
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6"
        animate={{ rotate: currentDirection * 90 }}
        transition={{ type: 'spring' }}
      >
        <div className="text-2xl">↑</div>
      </motion.div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white"
          whileHover={{ scale: 1.1 }}
        >
          {isPlaying ? <Pause /> : <Play />}
        </motion.button>
        <motion.button
          onClick={() => setStep(0)}
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <RotateCcw />
        </motion.button>
      </div>
    </div>
  );
};

export default GridMovementVisualizer;
