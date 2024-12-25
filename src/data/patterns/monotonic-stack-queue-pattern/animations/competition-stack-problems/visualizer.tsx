import React, { useState, useEffect } from 'react';
import { Trophy, Binary, TrendingUp, BarChart2, ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import { patterns } from './data';

const CompetitionVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('competitive');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy': return <Trophy className="w-5 h-5" />;
      case 'binary': return <Binary className="w-5 h-5" />;
      case 'trending-up': return <TrendingUp className="w-5 h-5" />;
      case 'bar-chart': return <BarChart2 className="w-5 h-5" />;
      default: return <Trophy className="w-5 h-5" />;
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

  const getStackState = () => {
    const stack: number[] = [];
    const curr = patterns[activePattern].data.slice(0, step);
    
    curr.forEach(num => {
      while (stack.length && stack[stack.length - 1] > num) {
        stack.pop();
      }
      stack.push(num);
    });

    return stack;
  };

  return (
    <div className="p-6">
      <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-3">Input Array</h3>
        <div className="flex flex-wrap gap-2 mb-4">
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

        <h3 className="text-lg font-semibold mb-3">Current Stack</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {getStackState().map((val, idx) => (
            <div
              key={idx}
              className="w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg bg-green-100 text-green-800"
            >
              {val}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            const patternKeys = Object.keys(patterns);
            const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
            setActivePattern(patternKeys[prevIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
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
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            const patternKeys = Object.keys(patterns);
            const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
            setActivePattern(patternKeys[nextIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CompetitionVisualizer;
