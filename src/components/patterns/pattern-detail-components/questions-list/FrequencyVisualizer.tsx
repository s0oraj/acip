"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Counter } from '@/data/types';

interface FrequencyVisualizerProps {
  counter: Counter;
}

const FrequencyVisualizer: React.FC<FrequencyVisualizerProps> = ({ counter }) => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < counter.data.length - 1) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, counter.data.length]);

  const getFrequencyData = () => {
    return Object.entries(counter.data[step].counter).map(([key, value]) => ({ name: key, value }));
  };

  return (
    <Card className="w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{counter.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{counter.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Input Array Visualization */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-md font-semibold mb-4">Input Sequence</h4>
            <div className="flex flex-wrap gap-2">
              {counter.data[step].array.map((val, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-mono text-lg transition-all duration-300
                    ${idx === counter.data[step].activeIndex ? 'bg-blue-500 text-white scale-110' : 
                      counter.data[step].highlightIndices?.includes(idx) ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
                >
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Frequency Visualization */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-md font-semibold mb-4">Frequency Distribution</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={getFrequencyData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Code Display */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-white overflow-x-auto">
            <code>{counter.data[step].code}</code>
          </pre>
        </div>

        {/* Step Description */}
        <p className="mt-4 text-sm text-gray-600">{counter.data[step].description}</p>

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
      </CardContent>
    </Card>
  );
};

export default FrequencyVisualizer;

