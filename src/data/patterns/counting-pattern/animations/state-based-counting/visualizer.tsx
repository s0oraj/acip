// src/data/patterns/counting-pattern/animations/state-based-counting/visualizer.tsx
import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Play, Pause, RotateCcw } from 'lucide-react';

const StateBasedCountingVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const pattern = statePatterns[activePattern];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < pattern.input.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern, pattern.input.length]);

  const getStateData = () => {
    const states: Record<string, number> = {};
    for (let i = 0; i < step; i++) {
      const char = pattern.input[i];
      pattern.states.forEach(state => {
        states[state] = (states[state] || 0) + (char === state ? 1 : 0);
      });
    }
    return pattern.states.map(state => ({
      state,
      count: states[state] || 0
    }));
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-6">
        {Object.entries(statePatterns).map(([key, { title }]) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Input String</h3>
          <div className="flex flex-wrap gap-2">
            {pattern.input.split('').map((char, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                  ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {char}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">State Distribution</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={getStateData()}>
              <XAxis dataKey="state" />
              <YAxis />
              <Tooltip />
              {pattern.states.map((state, idx) => (
                <Line
                  key={state}
                  type="monotone"
                  dataKey="count"
                  name={`State ${state}`}
                  stroke={`hsl(${(idx * 360) / pattern.states.length}, 70%, 50%)`}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <div className="grid grid-cols-2 gap-4">
          {pattern.states.map(state => {
            const count = getStateData().find(s => s.state === state)?.count || 0;
            return (
              <div key={state} className="flex justify-between items-center">
                <span className="text-gray-600">State '{state}':</span>
                <span className="text-xl font-bold">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

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

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {step + 1}</span>
          <span>of {pattern.input.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / pattern.input.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StateBasedCountingVisualizer;
