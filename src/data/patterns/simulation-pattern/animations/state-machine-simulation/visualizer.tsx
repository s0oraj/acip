import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Package, Edit, Cpu, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('commandProcessor');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

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
      timer = setTimeout(() => setStep(s => s + 1), 2000);
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

  // Calculate positions for state nodes in a circle
  const getNodePosition = (index: number, total: number, radius: number) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2;
    return {
      x: radius + radius * Math.cos(angle),
      y: radius + radius * Math.sin(angle)
    };
  };

  // Calculate path between two nodes
  const getPathBetweenNodes = (startX: number, startY: number, endX: number, endY: number) => {
    const dx = endX - startX;
    const dy = endY - startY;
    const dr = Math.sqrt(dx * dx + dy * dy);
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const offset = 30;
    
    const controlX = midX - dy * offset / dr;
    const controlY = midY + dx * offset / dr;
    
    return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  };

  const currentStates = patterns[activePattern].states;
  const radius = 120;
  const centerX = radius + 40;
  const centerY = radius + 40;

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

      <div className="grid grid-cols-2 gap-6 h-[400px]">
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden">
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 320 320">
            {/* Draw connection paths */}
            {currentStates.map((_, index) => {
              const start = getNodePosition(index, currentStates.length, radius);
              const end = getNodePosition((index + 1) % currentStates.length, currentStates.length, radius);
              const path = getPathBetweenNodes(start.x, start.y, end.x, end.y);
              const isActive = index === step;
              
              return (
                <g key={`path-${index}`}>
                  <path
                    d={path}
                    fill="none"
                    stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                    strokeWidth="2"
                    className="transition-colors duration-300"
                  />
                  {isActive && step < currentStates.length - 1 && (
                    <motion.circle
                      r="4"
                      fill="#3B82F6"
                      initial={{ offset: 0 }}
                      animate={{ offset: 1 }}
                      transition={{
                        duration: 1,
                        ease: "linear",
                        repeat: Infinity
                      }}
                    >
                      <animateMotion
                        dur="1s"
                        repeatCount="indefinite"
                        path={path}
                      />
                    </motion.circle>
                  )}
                  {/* Transition label */}
                  <motion.text
                    x={(start.x + end.x) / 2}
                    y={(start.y + end.y) / 2}
                    dy="-10"
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0.3 }}
                  >
                    {patterns[activePattern].transitions[index]}
                  </motion.text>
                </g>
              );
            })}

            {/* Draw state nodes */}
            {currentStates.map((state, index) => {
              const pos = getNodePosition(index, currentStates.length, radius);
              const isActive = index === step;
              const isPast = index < step;

              return (
                <g key={`state-${index}`}>
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="30"
                    fill={isActive ? "#3B82F6" : isPast ? "#93C5FD" : "#F3F4F6"}
                    stroke={isActive ? "#2563EB" : "#E5E7EB"}
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.1
                    }}
                  />
                  <motion.text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dy=".3em"
                    className={`text-sm ${isActive ? 'fill-white' : 'fill-gray-700'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {state}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-white mb-4">State Machine Code</h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-mono text-sm text-gray-300 space-y-2"
            >
              <div className="text-blue-400">// Current State</div>
              <div>const currentState = '{currentStates[step]}';</div>
              {step > 0 && (
                <>
                  <div className="text-blue-400 mt-4">// Last Transition</div>
                  <div>const lastAction = '{patterns[activePattern].transitions[step - 1]}';</div>
                  <div className="text-blue-400 mt-4">// State History</div>
                  <div>const history = [</div>
                  {currentStates.slice(0, step + 1).map((s, i) => (
                    <div key={i} className="ml-4">'{s}',</div>
                  ))}
                  <div>];</div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
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
