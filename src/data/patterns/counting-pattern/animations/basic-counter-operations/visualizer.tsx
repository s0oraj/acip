// src/data/patterns/counting-pattern/animations/basic-counter/visualizer.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Hash, Filter, Layers } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'hash': return <Hash className="w-5 h-5" />;
      case 'filter': return <Filter className="w-5 h-5" />;
      case 'layers': return <Layers className="w-5 h-5" />;
      default: return <Hash className="w-5 h-5" />;
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
    <Card className="w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <CardContent className="p-6">
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
                  {getIcon(icon)}
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

        {/* Controls */}
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

        {/* Progress Indicator */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Step {step + 1}</span>
            <span>of {patterns[activePattern].data.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / patterns[activePattern].data.length) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Visualizer;
