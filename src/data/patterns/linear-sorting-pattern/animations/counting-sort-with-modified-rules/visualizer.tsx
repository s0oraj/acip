import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { countingSortAnimation } from './data';

const CountingSortVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentArray, setCurrentArray] = useState<number[]>([]);

  useEffect(() => {
    setCurrentArray(countingSortAnimation.steps[step].array);
  }, [step]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < countingSortAnimation.steps.length - 1) {
      timer = setTimeout(() => setStep(s => s + 1), 2000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const getChartData = () => {
    return currentArray.map((value, index) => ({ name: index.toString(), value }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{countingSortAnimation.steps[step].title}</h2>
        <p className="text-gray-600">{countingSortAnimation.steps[step].description}</p>
      </div>
      
      <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={getChartData()}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 p-3 rounded-lg mb-6">
        <pre className="text-sm text-white overflow-x-auto">
          <code>{countingSortAnimation.steps[step].code}</code>
        </pre>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <button
          onClick={() => { setStep(0); setIsPlaying(false); }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={() => setStep(s => Math.min(countingSortAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CountingSortVisualizer;

