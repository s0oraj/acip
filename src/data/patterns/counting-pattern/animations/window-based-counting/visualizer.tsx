// src/data/patterns/counting-pattern/animations/window-based-counting/visualizer.tsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Play, Pause, RotateCcw } from 'lucide-react';

const windowPatterns = {
  'fixed': {
    title: "Fixed Window",
    data: [4, 2, 1, 7, 8, 3, 6, 5],
    windowSize: 3,
    threshold: 5,
    description: "Track sum in fixed-size window",
    getResult: (window: number[]) => window.reduce((a, b) => a + b, 0) / window.length,
    formatResult: (val: number) => val.toFixed(2)
  },
  'distinct': {
    title: "Distinct Elements",
    data: [1, 2, 1, 3, 2, 3, 1, 2],
    windowSize: 3,
    description: "Count distinct elements in window",
    getResult: (window: number[]) => new Set(window).size,
    formatResult: (val: number) => val.toString()
  },
  'divisible': {
    title: "K-Beauty",
    data: [2, 4, 0, 8, 6, 4],
    windowSize: 2,
    number: 240864,
    description: "Check divisibility in window",
    getResult: (window: number[]) => {
      const num = parseInt(window.join(''));
      return num > 0 && 240864 % num === 0 ? 1 : 0;
    },
    formatResult: (val: number) => val ? "Yes" : "No"
  }
};

const WindowBasedCountingVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('fixed');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < windowPatterns[activePattern].data.length - windowPatterns[activePattern].windowSize + 1) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const getWindowData = () => {
    const pattern = windowPatterns[activePattern];
    const window = pattern.data.slice(step, step + pattern.windowSize);
    const result = pattern.getResult(window);
    return { window, result };
  };

  const getHistoryData = () => {
    const pattern = windowPatterns[activePattern];
    return Array.from({ length: step + 1 }, (_, i) => {
      const window = pattern.data.slice(i, i + pattern.windowSize);
      return {
        position: i,
        value: pattern.getResult(window)
      };
    });
  };

  return (
    <div className="p-6">
      {/* Pattern Selection */}
      <div className="flex gap-2 mb-6">
        {Object.entries(windowPatterns).map(([key, { title }]) => (
          <button
            key={key}
            onClick={() => {
              setActivePattern(key);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activePattern === key
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Visualization Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Input Array</h3>
          <div className="flex flex-wrap gap-2">
            {windowPatterns[activePattern].data.map((val, idx) => {
              const isInWindow = idx >= step && idx < step + windowPatterns[activePattern].windowSize;
              return (
                <div
                  key={idx}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                    ${isInWindow ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-500' : 'bg-gray-100'}`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Result History</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={getHistoryData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="position" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Current Window Result */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Current Window Result:</span>
          <span className="text-2xl font-bold text-blue-600">
            {windowPatterns[activePattern].formatResult(getWindowData().result)}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mb-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
            ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
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
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Window {step + 1}</span>
          <span>of {windowPatterns[activePattern].data.length - windowPatterns[activePattern].windowSize + 1}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((step + 1) / (windowPatterns[activePattern].data.length - windowPatterns[activePattern].windowSize + 1)) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowBasedCountingVisualizer;
