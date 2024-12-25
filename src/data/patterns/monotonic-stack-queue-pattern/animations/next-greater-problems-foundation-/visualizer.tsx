import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns } from './data';

const NextGreaterVisualizer = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < patterns[activePattern].data.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
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

  return (
    <div className="p-6">
      {/* Pattern Selection Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {Object.entries(patterns).map(([key, { title, desc, color }]) => (
          <button
            key={key}
            onClick={() => {
              setActivePattern(key);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`px-4 py-2 rounded-lg transition-all flex-shrink-0 ${
              activePattern === key 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="text-sm font-medium">{title}</div>
            <div className="text-xs opacity-75">{desc}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        {/* Array Visualization */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Input Array</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {patterns[activePattern].data.map((val, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                  ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* Stack Visualization */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Monotonic Stack</h3>
          <div className="flex flex-col-reverse gap-2">
            {getStack().map((val, idx) => (
              <div
                key={idx}
                className="w-full h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-800 font-mono text-lg"
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result Visualization */}
      <div className="bg-white p-5 rounded-xl shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-3">Next Greater Elements</h3>
        <div className="flex flex-wrap gap-2">
          {getNextGreater().map((val, idx) => (
            <div
              key={idx}
              className="min-w-[3rem] px-3 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-800 font-mono text-lg"
            >
              {val}
            </div>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <div className="bg-gray-800 p-3 rounded-lg mb-4">
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {step === 0 
              ? "stack = []" 
              : `# Process ${patterns[activePattern].data[step-1]}
while stack and stack[-1] < ${patterns[activePattern].data[step-1]}:
    result[stack.pop()] = ${patterns[activePattern].data[step-1]}
stack.append(${patterns[activePattern].data[step-1]})`}
          </code>
        </pre>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            const patternKeys = Object.keys(patterns);
            const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
            setActivePattern(patternKeys[prevIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
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
          onClick={() => {
            const patternKeys = Object.keys(patterns);
            const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
            setActivePattern(patternKeys[nextIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NextGreaterVisualizer;
