import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Hash, Filter, Layers } from 'lucide-react';
import { patterns } from './data';

const Visualizer = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'hash': return <Hash className="w-4 h-4" />;
      case 'filter': return <Filter className="w-4 h-4" />;
      case 'layers': return <Layers className="w-4 h-4" />;
      default: return <Hash className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < patterns[activePattern].data.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const getFrequencyData = () => {
    const curr = patterns[activePattern].data.slice(0, step);
    const freq = curr.reduce((acc, val) => {
      if (activePattern === 'conditional' && typeof val === 'number') {
        if (val % 2 === 0) acc[val] = (acc[val] || 0) + 1;
      } else {
        acc[val] = (acc[val] || 0) + 1;
      }
      return acc;
    }, {});
    return Object.entries(freq).map(([key, value]) => ({ name: key, value }));
  };

  return (
    <div className="w-full space-y-4">
      {/* Pattern Selection - More compact grid */}
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
          <button
            key={key}
            onClick={() => {
              setActivePattern(key);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`p-3 rounded-lg transition-all ${
              activePattern === key 
                ? 'bg-white shadow scale-102' 
                : 'bg-gray-50 hover:bg-white hover:shadow'
            }`}
          >
            <div className="flex items-center gap-2">
              <div style={{ color }} className="p-1 rounded-lg bg-opacity-10 bg-current">
                {getIcon(icon)}
              </div>
              <span className="font-medium text-sm">{title}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Input Sequence - Reduced vertical space */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium mb-2">Input Sequence</h3>
          <div className="flex flex-wrap gap-1">
            {patterns[activePattern].data.map((val, idx) => (
              <div
                key={idx}
                className={`w-8 h-8 flex items-center justify-center rounded-md font-mono text-sm
                  ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* Frequency Distribution - Fixed height */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium mb-2">Frequency Distribution</h3>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getFrequencyData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={patterns[activePattern].color}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Controls - Compact layout */}
      <div className="flex items-center justify-between gap-4 px-4">
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors
              ${isPlaying 
                ? 'bg-gray-200 hover:bg-gray-300'
                : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={() => {
              setStep(0);
              setIsPlaying(false);
            }}
            className="px-4 py-1.5 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
        </div>
        
        <div className="flex-1 max-w-xs">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Step {step + 1}</span>
            <span>of {patterns[activePattern].data.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / patterns[activePattern].data.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
