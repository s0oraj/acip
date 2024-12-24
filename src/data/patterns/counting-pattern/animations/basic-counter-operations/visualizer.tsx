import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Hash, Filter, Layers } from 'lucide-react';

const BasicCounterVisualizer = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const patterns = {
    basic: {
      data: [4, 2, 4, 1, 4, 3],
      icon: <Hash className="w-5 h-5" />,
      title: "Basic Counter",
      desc: "Element Frequency",
      color: "#4F46E5"
    },
    conditional: {
      data: [2, 3, 2, 4, 5, 2, 4, 6],
      icon: <Filter className="w-5 h-5" />,
      title: "Even Counter",
      desc: "Filtered Frequency",
      color: "#7C3AED"
    },
    multi: {
      data: ['AB', 'BC', 'AB', 'CD', 'AB'],
      icon: <Layers className="w-5 h-5" />,
      title: "Multi-Value",
      desc: "Pattern Frequency",
      color: "#2563EB"
    }
  };

  useEffect(() => {
    let timer;
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
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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
                {icon}
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Input Sequence</h3>
          <div className="flex flex-wrap gap-2">
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

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Frequency Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={getFrequencyData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
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

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-6 py-2 rounded-lg font-medium transition-colors
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
          className="px-6 py-2 rounded-lg font-medium bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BasicCounterVisualizer;
