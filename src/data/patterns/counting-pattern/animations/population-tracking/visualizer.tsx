import React, { useState, useEffect, useMemo } from 'react';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { populationPatterns } from './data';

const PopulationTrackingVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('timeline');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getTimelineData = useMemo(() => {
    if (activePattern !== 'timeline') return [];
    
    const pattern = populationPatterns[activePattern];
    const years = Array.from(
      { length: 51 }, 
      (_, i) => 1950 + i
    );

    return years.map(year => ({
      year,
      population: pattern.data
        .slice(0, step + 1)
        .filter(({ start, end }) => year >= start && year <= end)
        .reduce((acc, curr) => acc + curr.population, 0)
    }));
  }, [step, activePattern]);

  const getDynamicsData = useMemo(() => {
    if (activePattern !== 'dynamics') return [];
    
    return populationPatterns.dynamics.data
      .slice(0, step + 1)
      .map(data => ({
        ...data,
        net: data.births - data.deaths + data.migration
      }));
  }, [step, activePattern]);

  const getGrowthData = useMemo(() => {
    if (activePattern !== 'growth') return [];
    
    return populationPatterns.growth.data
      .slice(0, step + 1)
      .map(data => ({
        ...data,
        trend: data.trend === 'peak' ? data.value + 1 : 
               data.trend === 'bottom' ? data.value - 1 : data.value
      }));
  }, [step, activePattern]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < populationPatterns[activePattern].data.length - 1) {
      timer = setTimeout(() => setStep(s => s + 1), 1500);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const handleNext = () => {
    if (step < populationPatterns[activePattern].data.length - 1) {
      setStep(s => s + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(s => s - 1);
    }
  };

  const renderChart = () => {
    switch (activePattern) {
      case 'timeline':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={getTimelineData()}>
              <defs>
                <linearGradient id="populationGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={populationPatterns.timeline.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={populationPatterns.timeline.color} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="year" 
                tickFormatter={(value) => `${value}`}
              />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => [`${value.toFixed(1)}M`, 'Population']}
              />
              <Area 
                type="monotone" 
                dataKey="population" 
                stroke={populationPatterns.timeline.color}
                fillOpacity={1}
                fill="url(#populationGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'dynamics':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getDynamicsData()}>
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="births" fill="#4ADE80" />
              <Bar dataKey="deaths" fill="#F87171" />
              <Bar dataKey="migration" fill="#60A5FA" />
              <Bar dataKey="net" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'growth':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={getGrowthData()}>
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={populationPatterns.growth.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={populationPatterns.growth.color} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={populationPatterns.growth.color}
                strokeWidth={2}
                dot={{ 
                  fill: populationPatterns.growth.color,
                  r: 4 
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(populationPatterns).map(([key, { title, description, icon: Icon, color }]) => (
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
                : 'bg-white/60 hover:bg-white hover:shadow'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div 
                style={{ color }} 
                className="p-2 rounded-lg bg-opacity-10 bg-current"
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {populationPatterns[activePattern].title} Analysis
        </h3>
        {renderChart()}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Step {step + 1} of {populationPatterns[activePattern].data.length}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={step === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isPlaying 
                  ? 'bg-gray-200 hover:bg-gray-300' 
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
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={step === populationPatterns[activePattern].data.length - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
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
