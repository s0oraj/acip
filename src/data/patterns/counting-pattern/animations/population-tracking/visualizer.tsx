// src/data/patterns/counting-pattern/animations/population-tracking/visualizer.tsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, Calendar, TrendingUp, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { patterns } from './data';

const PopulationVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('timeline');
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

  const getVisualizationData = () => {
    const curr = patterns[activePattern].data.slice(0, step + 1);
    
    switch (activePattern) {
      case 'timeline': {
        const timeline: Record<number, number> = {};
        curr.forEach(({ start, end }) => {
          for (let year = start; year <= end; year++) {
            timeline[year] = (timeline[year] || 0) + 1;
          }
        });
        return Object.entries(timeline).map(([year, count]) => ({
          name: year,
          value: count
        }));
      }
      case 'range': {
        const prefix = new Array(10).fill(0);
        curr.forEach(({ start, end }) => {
          prefix[start] += 1;
          prefix[end + 1] -= 1;
        });
        let count = 0;
        return prefix.map((delta, index) => {
          count += delta;
          return { name: index, value: count };
        });
      }
      case 'growth': {
        return curr.map((value, index) => ({
          name: index,
          value
        }));
      }
      default:
        return [];
    }
  };

  const renderChart = () => {
    const data = getVisualizationData();
    
    switch (activePattern) {
      case 'timeline':
      case 'range':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="value" 
                fill={patterns[activePattern].color}
                animationDuration={300}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'growth':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone"
                dataKey="value"
                stroke={patterns[activePattern].color}
                strokeWidth={2}
                dot={{ r: 4 }}
                animationDuration={300}
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
          <motion.button
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                {icon === 'users' ? <Users className="w-5 h-5" /> :
                 icon === 'calendar' ? <Calendar className="w-5 h-5" /> :
                 <TrendingUp className="w-5 h-5" />}
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <motion.div 
          className="bg-white p-5 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-3">Input Data</h3>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence mode="wait">
              {patterns[activePattern].data.map((val, idx) => (
                <motion.div
                  key={`${idx}-${JSON.stringify(val)}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: idx <= step ? 1 : 0.8,
                    opacity: idx <= step ? 1 : 0.5 
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  className={`min-w-[100px] p-2 rounded-lg font-mono text-sm ${
                    idx <= step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'
                  }`}
                >
                  {typeof val === 'object' 
                    ? `[${val.start}, ${val.end}]`
                    : val}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-5 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-3">Population Analysis</h3>
          {renderChart()}
        </motion.div>
      </div>

      <motion.div 
        className="bg-gray-800 p-3 rounded-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {step === 0 
              ? activePattern === 'timeline'
                ? "timeline = {}"
                : activePattern === 'range'
                  ? "prefix = [0] * n"
                  : "count = 0"
              : activePattern === 'timeline'
                ? `timeline[year] += 1`
                : activePattern === 'range'
                  ? `prefix[start] += 1\nprefix[end + 1] -= 1`
                  : `if prices[i] > prices[i-1]: count += streak`}
          </code>
        </pre>
      </motion.div>

      <div className="flex justify-center gap-4">
        {[
          { icon: ChevronLeft, action: () => {
            const patternKeys = Object.keys(patterns);
            const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
            setActivePattern(patternKeys[prevIndex]);
            setStep(0);
            setIsPlaying(false);
          }},
          { icon: isPlaying ? Pause : Play, action: () => setIsPlaying(!isPlaying) },
          { icon: RotateCcw, action: () => {
            setStep(0);
            setIsPlaying(false);
          }},
          { icon: ChevronRight, action: () => {
            const patternKeys = Object.keys(patterns);
            const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
            setActivePattern(patternKeys[nextIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
        ].map((button, index) => (
          <motion.button
            key={index}
            onClick={button.action}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              button.icon === (isPlaying ? Pause : Play)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button.icon className="w-5 h-5" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PopulationVisualizer;
