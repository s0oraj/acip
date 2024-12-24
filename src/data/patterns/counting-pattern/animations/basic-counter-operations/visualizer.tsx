import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Hash, Filter, Layers, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('basic');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    { title: "Basic Counter", data: patterns.basic.data },
    { title: "Even Counter", data: patterns.conditional.data },
    { title: "Multi-Value", data: patterns.multi.data }
  ];

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

  const handleNext = () => {
    const nextIndex = (questionIndex + 1) % questions.length;
    setQuestionIndex(nextIndex);
    setActivePattern(Object.keys(patterns)[nextIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const prevIndex = (questionIndex - 1 + questions.length) % questions.length;
    setQuestionIndex(prevIndex);
    setActivePattern(Object.keys(patterns)[prevIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          disabled={questionIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">{questions[questionIndex].title}</h2>
        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          disabled={questionIndex === questions.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Input Sequence</h3>
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
          <h3 className="text-lg font-semibold mb-3">Frequency Distribution</h3>
          <ResponsiveContainer width="100%" height={180}>
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

      <div className="bg-gray-800 p-3 rounded-lg mb-4">
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {step === 0 
              ? "const counter = {};" 
              : `counter[${patterns[activePattern].data[step-1]}] = (counter[${patterns[activePattern].data[step-1]}] || 0) + 1;`}
          </code>
        </pre>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {step === 0 
          ? "Initialize empty counter" 
          : `Process element (${patterns[activePattern].data[step-1]})`}
      </p>

      <div className="flex justify-center gap-6">
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
    </div>
  );
};

export default Visualizer;
