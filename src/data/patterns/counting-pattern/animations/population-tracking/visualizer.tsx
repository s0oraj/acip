// src/data/patterns/counting-pattern/animations/population-tracking/visualizer.tsx
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line } from 'recharts';
import { Play, Pause, RotateCcw } from 'lucide-react';

const PopulationTrackingVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('timeline');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getTimelineData = () => {
    const pattern = populationPatterns[activePattern];
    if (pattern.type === 'timeline') {
      const years = Array.from({ length: 40 }, (_, i) => 1950 + i);
      return years.map(year => ({
        year,
        population: pattern.data
          .slice(0, step + 1)
          .filter(({ start, end }) => year >= start && year < end)
          .length
      }));
    }
    return [];
  };

  const getRangeData = () => {
    const pattern = populationPatterns[activePattern];
    if (pattern.type === 'range') {
      const timeline = Array.from({ length: 10 }, (_, i) => i);
      return timeline.map(time => ({
        time,
        count: pattern.data
          .slice(0, step + 1)
          .filter(({ start, end }) => time >= start && time <= end)
          .length
      }));
    }
    return [];
  };

  const getGrowthData = () => {
    const pattern = populationPatterns[activePattern];
    if (pattern.type === 'growth') {
      return pattern.data
        .slice(0, step + 1)
        .map((value, index) => ({
          index,
          value,
          streak: getDescentStreak(pattern.data, index)
        }));
    }
    return [];
  };

  const getDescentStreak = (data: number[], index: number) => {
    let streak = 1;
    while (index > 0 && data[index] < data[index - 1]) {
      streak++;
      index--;
    }
    return streak;
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-6">
        {Object.entries(populationPatterns).map(([key, { title }]) => (
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

      <div className="grid grid-cols-1 gap-6 mb-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Population Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            {activePattern === 'timeline' ? (
              <AreaChart data={getTimelineData()}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="population" fill="#3B82F6" stroke="#2563EB" />
              </AreaChart>
            ) : activePattern === 'range' ? (
              <LineChart data={getRangeData()}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="stepAfter" dataKey="count" stroke="#3B82F6" />
              </LineChart>
            ) : (
              <LineChart data={getGrowthData()}>
                <XAxis dataKey="index" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" />
                <Line type="monotone" dataKey="streak" stroke="#10B981" />
              </LineChart>
            )}
          </ResponsiveContainer>
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

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {step + 1}</span>
          <span>of {populationPatterns[activePattern].data.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((step + 1) / populationPatterns[activePattern].data.length) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PopulationTrackingVisualizer;
