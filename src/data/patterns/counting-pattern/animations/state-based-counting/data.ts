// data.ts
import { Animation } from '@/types';
import { GitBranch, Boxes, GitMerge } from 'lucide-react';

export const patterns = {
  transition: {
    data: 'pattern',
    icon: 'git-branch',
    title: "State Transition",
    desc: "Track single state changes",
    color: "#2563EB",
    states: { p: 0, a: 0, t: 0, r: 0, n: 0 }
  },
  multiple: {
    data: 'croak',
    icon: 'boxes',
    title: "Multiple States",
    desc: "Track multiple state changes",
    color: "#7C3AED",
    states: { c: 0, r: 0, o: 0, a: 0, k: 0 }
  },
  pattern: {
    data: 'abbacc',
    icon: 'git-merge',
    title: "Pattern States",
    desc: "Track pattern formations",
    color: "#059669",
    states: { balanced: 0, unbalanced: 0 }
  }
};

const updateStates = (pattern: string, char: string, states: Record<string, number>) => {
  const newStates = { ...states };
  
  switch (pattern) {
    case 'transition':
      newStates[char] = (newStates[char] || 0) + 1;
      break;
      
    case 'multiple':
      const order = 'croak';
      const prevCharIdx = (order.indexOf(char) - 1 + 5) % 5;
      const prevChar = order[prevCharIdx];
      
      if (order.includes(char)) {
        if (char === 'c' || newStates[prevChar] > 0) {
          newStates[char]++;
          if (prevChar !== 'k') newStates[prevChar]--;
        }
      }
      break;
      
    case 'pattern':
      const chars = Object.keys(newStates).filter(k => k !== 'balanced' && k !== 'unbalanced');
      const isBalanced = chars.every(c => 
        chars.filter(x => x === c).length % 2 === 0
      );
      newStates.balanced = isBalanced ? 1 : 0;
      newStates.unbalanced = isBalanced ? 0 : 1;
      break;
  }
  
  return newStates;
};

export const stateCountingAnimation: Animation = {
  id: "state-counting",
  title: "State-Based Counting Operations",
  description: "Exploring state transitions and pattern matching",
  steps: [
    {
      title: "State Transition Counter",
      description: "Track state changes in sequence",
      array: patterns.transition.data.split(''),
      phases: patterns.transition.data.split('').map((char, index) => ({
        description: index === 0 
          ? "Initialize state counter" 
          : `Process state for '${char}'`,
        activeIndex: index,
        highlightIndices: [index],
        states: patterns.transition.data
          .slice(0, index + 1)
          .split('')
          .reduce((acc, curr) => updateStates('transition', curr, acc), 
            { ...patterns.transition.states }),
        code: index === 0 
          ? "const states = {};" 
          : `states['${char}']++;`
      }))
    },
    {
      title: "Multiple State Counter",
      description: "Track multiple concurrent states",
      array: patterns.multiple.data.split(''),
      phases: patterns.multiple.data.split('').map((char, index) => ({
        description: index === 0 
          ? "Initialize multiple state tracking" 
          : `Update state for '${char}'`,
        activeIndex: index,
        highlightIndices: [index],
        states: patterns.multiple.data
          .slice(0, index + 1)
          .split('')
          .reduce((acc, curr) => updateStates('multiple', curr, acc), 
            { ...patterns.multiple.states }),
        code: index === 0 
          ? "const states = { c: 0, r: 0, o: 0, a: 0, k: 0 };" 
          : `processState('${char}');`
      }))
    }
  ]
};

// Visualizer.tsx
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, GitBranch, Boxes, GitMerge } from 'lucide-react';
import { patterns, stateCountingAnimation } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('transition');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStates, setCurrentStates] = useState(patterns[activePattern].states);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < patterns[activePattern].data.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  useEffect(() => {
    setCurrentStates(patterns[activePattern].states);
  }, [activePattern]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'git-branch': return <GitBranch className="w-5 h-5" />;
      case 'boxes': return <Boxes className="w-5 h-5" />;
      default: return <GitMerge className="w-5 h-5" />;
    }
  };

  const getVisualizationData = () => {
    const phase = stateCountingAnimation.steps.find(s => 
      s.array === patterns[activePattern].data.split('')
    )?.phases[step];
    
    return phase ? Object.entries(phase.states).map(([key, value]) => ({
      name: key,
      value
    })) : [];
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
            {patterns[activePattern].data.split('').map((char, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                  ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {char}
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Step {step}</span>
              <span>of {patterns[activePattern].data.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / patterns[activePattern].data.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">State Analysis</h3>
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

      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            const keys = Object.keys(patterns);
            const idx = keys.indexOf(activePattern);
            setActivePattern(keys[(idx - 1 + keys.length) % keys.length]);
            setStep(0);
            setIsPlaying(false);
          }}
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
            setCurrentStates(patterns[activePattern].states);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            const keys = Object.keys(patterns);
            const idx = keys.indexOf(activePattern);
            setActivePattern(keys[(idx + 1) % keys.length]);
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
