import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowsUpDown, Group, Binary, Hash, LayersLinked, Play, Pause, RotateCcw } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('pairs');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'arrows-up-down': return <ArrowsUpDown className="w-5 h-5" />;
      case 'group': return <Group className="w-5 h-5" />;
      case 'binary': return <Binary className="w-5 h-5" />;
      case 'hash': return <Hash className="w-5 h-5" />;
      case 'layers-linked': return <LayersLinked className="w-5 h-5" />;
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
      case 'pairs':
        const pairs = [];
        for (let i = 0; i < curr.length; i++) {
          for (let j = i + 1; j < curr.length; j++) {
            if (Math.abs(curr[i] - curr[j]) === patterns.pairs.k) {
              pairs.push({ name: `${curr[i]}-${curr[j]}`, value: 1 });
            }
          }
        }
        return pairs;
      
      case 'groups':
        return curr.reduce((acc, num) => {
          const sum = String(num).split('').reduce((a, b) => a + Number(b), 0);
          acc[sum] = (acc[sum] || 0) + 1;
          return Object.entries(acc).map(([key, value]) => ({ name: `Sum ${key}`, value }));
        }, {});
      
      case 'balance':
        const freq = {};
        curr.forEach(char => {
          freq[char] = (freq[char] || 0) + 1;
        });
        return Object.entries(freq).map(([key, value]) => ({ name: key, value }));
      
      case 'subarray':
        const patterns = new Set();
        for (let i = 0; i < curr.length; i++) {
          let count = 0;
          for (let j = i; j < curr.length; j++) {
            if (curr[j] % patterns.subarray.k === 0) count++;
            patterns.add(curr.slice(i, j + 1).join(','));
          }
        }
        return Array.from(patterns).map(pattern => ({ name: String(pattern), value: 1 }));
      
      case 'complex':
        return curr.reduce((acc, val) => {
          acc[val] = (acc[val] || 0) + 1;
          return Object.entries(acc)
            .sort((a, b) => Number(b[1]) - Number(a[1]))
            .map(([key, value]) => ({ name: key, value }));
        }, {});
      
      default:
        return [];
    }
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
          <div className="flex flex-wrap gap-2">
            {typeof patterns[activePattern].data === 'string' 
              ? patterns[activePattern].data.split('').map((val, idx) => (
                  <div
                    key={idx}
                    className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                      ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
                  >
                    {val}
                  </div>
                ))
              : patterns[activePattern].data.map((val, idx) => (
                  <div
                    key={idx}
                    className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                      ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
                  >
                    {val}
                  </div>
                ))
            }
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
            {getPatternCode()}
          </code>
        </pre>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {getStepDescription()}
      </p>

      <div className="flex justify-center gap-6 mb-4">
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
      </div>

      <div className="max-w-2xl mx-auto">
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
    </div>
  );
};

function getPatternCode() {
  const pattern = patterns[activePattern];
  const codeSnippets = {
    pairs: 'count += freq.get(num + k) + freq.get(num - k);',
    groups: 'groups[digitSum(num)]++;',
    balance: 'state ^= (1 << (char.charCodeAt(0) - 97));',
    subarray: 'patterns.add(array.slice(i, j + 1));',
    complex: 'maxFreq = Math.max(maxFreq, ++count[num]);'
  };
  return step === 0 
    ? '// Initialize data structures'
    : codeSnippets[activePattern];
}

function getStepDescription() {
  const descriptions = {
    pairs: 'Finding pairs with target difference',
    groups: 'Grouping by digit sum',
    balance: 'Tracking character balance',
    subarray: 'Generating valid subarrays',
    complex: 'Computing frequency score'
  };
  return step === 0 
    ? 'Initialize tracking structures'
    : `${descriptions[activePattern]} - Step ${step}`;
}

export default Visualizer;
