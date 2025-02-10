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

  const StateBox = ({ state, isActive, isNext }: { state: string; isActive: boolean; isNext: boolean }) => (
    <motion.div
      className={`px-4 py-2 rounded-lg font-mono text-sm ${
        isActive ? 'bg-blue-500 text-white' 
        : isNext ? 'bg-blue-100 border border-blue-200' 
        : 'bg-gray-100'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {state}
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

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">State Transitions</h3>
          <div className="space-y-6">
            {/* Current State Display */}
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Current State</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-mono text-lg inline-block"
                >
                  {patterns[activePattern].states[step]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* State Timeline */}
            <div className="space-y-2">
              <div className="text-sm text-gray-500">State Timeline</div>
              <div className="flex items-center gap-2">
                {patterns[activePattern].states.map((state, idx) => (
                  <StateBox
                    key={state + idx}
                    state={state}
                    isActive={idx === step}
                    isNext={idx === step + 1}
                  />
                ))}
              </div>
            </div>

            {/* Transition Display */}
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Current Transition</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-sm inline-block"
                >
                  {step > 0 ? patterns[activePattern].transitions[step - 1] : 'Initial State'}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Step {step + 1}</span>
              <span>of {patterns[activePattern].states.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((step + 1) / patterns[activePattern].states.length) * 100}%` 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gray-800 p-4">
            <h3 className="text-lg font-semibold text-white mb-2">State Machine Code</h3>
            <div className="font-mono text-sm text-gray-300">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2"
                >
                  <div className="text-blue-400">// Current State</div>
                  <div>const currentState = '{patterns[activePattern].states[step]}';</div>
                  {step > 0 && (
                    <>
                      <div className="text-blue-400">// Last Transition</div>
                      <div>const lastAction = '{patterns[activePattern].transitions[step - 1]}';</div>
                      <div className="text-blue-400">// State History</div>
                      <div>const history = [</div>
                      {patterns[activePattern].states.slice(0, step + 1).map((s, i) => (
                        <div key={i} className="ml-4">'{s}',</div>
                      ))}
                      <div>];</div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
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
