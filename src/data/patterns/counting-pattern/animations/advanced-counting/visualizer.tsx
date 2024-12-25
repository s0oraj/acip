import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Hash, GitBranch, GitMerge, Network, Boxes, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('pairs');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'git-branch': return <GitBranch className="w-5 h-5" />;
      case 'boxes': return <Boxes className="w-5 h-5" />;
      case 'git-merge': return <GitMerge className="w-5 h-5" />;
      case 'network': return <Network className="w-5 h-5" />;
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

  const getVisualizationData = () => {
    const curr = patterns[activePattern].data.slice(0, step);
    
    switch (activePattern) {
      case 'pairs': {
        const pairs: Record<string, number> = {};
        curr.forEach((val, i) => {
          curr.slice(0, i).forEach(prev => {
            if (Math.abs(val - prev) === patterns.pairs.diffK) {
              const key = `${Math.min(val, prev)}-${Math.max(val, prev)}`;
              pairs[key] = (pairs[key] || 0) + 1;
            }
          });
        });
        return Object.entries(pairs).map(([key, value]) => ({ name: key, value }));
      }
      case 'groups': {
        const groups: Record<number, number> = {};
        curr.forEach(val => {
          const sum = String(val).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
          groups[sum] = (groups[sum] || 0) + 1;
        });
        return Object.entries(groups).map(([key, value]) => ({ 
          name: `Sum ${key}`, 
          value 
        }));
      }
      default:
        return [];
    }
  };

  const handleNext = () => {
    const patternKeys = Object.keys(patterns);
    const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
    setActivePattern(patternKeys[nextIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const patternKeys = Object.keys(patterns);
    const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
    setActivePattern(patternKeys[prevIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Input Sequence</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {patterns[activePattern].data.map((val, idx) => (
              <div
                key={idx}
                className={`min-w-12 h-12 px-3 flex items-center justify-center rounded-lg font-mono text-lg
                  ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {val}
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Step {step + 1}</span>
              <span>of {patterns[activePattern].data.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((step + 1) / patterns[activePattern].data.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Pattern Analysis</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={getVisualizationData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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

      <div className="bg-gray-800 p-3 rounded-lg mb-4">
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {step === 0 
              ? activePattern === 'pairs' 
                ? "const pairCounter = { pairs: 0 };" 
                : "const groupCounter = {};"
              : activePattern === 'pairs'
                ? `// Check pairs for ${patterns[activePattern].data[step-1]}`
                : `groupCounter[digitSum(${patterns[activePattern].data[step-1]})]++;`}
          </code>
        </pre>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrevious}
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
          onClick={handleNext}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
