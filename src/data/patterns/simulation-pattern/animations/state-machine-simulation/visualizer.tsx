import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Package, Edit, Cpu, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('commandProcessor');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'history': return <History className="w-5 h-5" />;
      case 'package': return <Package className="w-5 h-5" />;
      case 'edit': return <Edit className="w-5 h-5" />;
      case 'cpu': return <Cpu className="w-5 h-5" />;
      default: return <History className="w-5 h-5" />;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < patterns[activePattern].states.length - 1) {
      timer = setTimeout(() => setStep(s => s + 1), 1500);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const handleNext = () => {
    const patternKeys = Object.keys(patterns);
    const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
    setActivePattern(patternKeys[nextIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const patternKeys = Object.keys(patterns);
    const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
    setActivePattern(patternKeys[prevIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  const StateNode: React.FC<{ state: string; isActive: boolean; x: number; y: number }> = ({ state, isActive, x, y }) => (
    <motion.div
      className={`absolute rounded-lg p-4 ${
        isActive ? 'bg-blue-500 text-white' : 'bg-white'
      } shadow-lg`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x,
        y,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {state}
    </motion.div>
  );

  const Transition: React.FC<{ from: { x: number; y: number }, to: { x: number; y: number }, label: string }> = 
    ({ from, to, label }) => (
    <motion.div
      className="absolute h-px bg-gray-300"
      style={{
        width: Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)),
        transform: `rotate(${Math.atan2(to.y - from.y, to.x - from.x)}rad)`,
        transformOrigin: '0 0',
        left: from.x,
        top: from.y
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-xs text-gray-500">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
          <button
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
          >
            <div className="flex items-center gap-3 mb-2">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                {getIcon(icon)}
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="relative h-96">
          <AnimatePresence>
            {patterns[activePattern].states.map((state, index) => {
              const radius = 150;
              const angle = (2 * Math.PI * index) / patterns[activePattern].states.length;
              const x = Math.cos(angle) * radius + radius + 50;
              const y = Math.sin(angle) * radius + radius;

              return (
                <React.Fragment key={state}>
                  <StateNode
                    state={state}
                    isActive={index === step}
                    x={x}
                    y={y}
                  />
                  {index > 0 && (
                    <Transition
                      from={{
                        x: Math.cos((2 * Math.PI * (index - 1)) / patterns[activePattern].states.length) * radius + radius + 50,
                        y: Math.sin((2 * Math.PI * (index - 1)) / patterns[activePattern].states.length) * radius + radius
                      }}
                      to={{ x, y }}
                      label={patterns[activePattern].transitions[index - 1]}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-gray-800 p-3 rounded-lg mb-4">
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {`// Current State: ${patterns[activePattern].states[step]}
${step > 0 ? `// Transition: ${patterns[activePattern].transitions[step - 1]}` : ''}
currentState = '${patterns[activePattern].states[step]}';`}
          </code>
        </pre>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        <button
          onClick={() => {
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
