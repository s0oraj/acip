import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Hash, Filter, Layers, Play, Pause, RotateCcw } from 'lucide-react';

const conceptData = {
  'basic-freq': {
    title: "Frequency Map",
    data: [1, 2, 2, 3, 3, 3],
    description: "Basic frequency counting using hashmap",
    code: (num) => `freq[${num}] = (freq[${num}] || 0) + 1;`
  },
  'freq-of-freq': {
    title: "Meta Frequency",
    data: [1, 1, 2, 2, 3, 3, 3],
    description: "Tracking frequency of frequencies",
    code: (num) => `freqOfFreq[freq[${num}]] += 1;`
  },
  'group-freq': {
    title: "Group Frequency",
    data: [1, 1, 2, 2, 2, 3, 3],
    description: "Grouping elements by frequency",
    code: (num) => `groups[freq[${num}]].add(${num});`
  }
};

const FrequencyDistributionVisualizer: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState('basic-freq');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < conceptData[activeConcept].data.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activeConcept]);

  const getFrequencyData = () => {
    const curr = conceptData[activeConcept].data.slice(0, step);
    const freq = curr.reduce((acc: Record<number, number>, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(freq).map(([key, value]) => ({
      number: `Num ${key}`,
      frequency: value
    }));
  };

  const resetVisualization = () => {
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="p-6">
      {/* Concept Selection */}
      <div className="flex gap-2 mb-6">
        {Object.entries(conceptData).map(([key, { title }]) => (
          <button
            key={key}
            onClick={() => {
              setActiveConcept(key);
              resetVisualization();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeConcept === key
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Visualization Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Input Array</h3>
          <div className="flex flex-wrap gap-2">
            {conceptData[activeConcept].data.map((val, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                  ${idx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Distribution Visualization</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={getFrequencyData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="number" />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="frequency" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Code Display */}
      <div className="bg-gray-800 p-3 rounded-lg mb-4">
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {step === 0 
              ? "const freq = {};" 
              : conceptData[activeConcept].code(conceptData[activeConcept].data[step-1])}
          </code>
        </pre>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {conceptData[activeConcept].description}
      </p>

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
          onClick={resetVisualization}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {step + 1}</span>
          <span>of {conceptData[activeConcept].data.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / conceptData[activeConcept].data.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FrequencyDistributionVisualizer;
